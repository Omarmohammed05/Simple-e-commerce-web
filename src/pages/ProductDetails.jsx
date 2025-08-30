import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import products from '../assets/products.json'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Button } from '../components/ui/button'
import { useCart } from '../hooks/useCart'
import CartAnimation from '../components/CartAnimation'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  const { addToCart } = useCart()
  const [selected, setSelected] = React.useState(product?.gallery?.[0])
  const [showCartAnim, setShowCartAnim] = React.useState(false)

  if (!product) return <div>Product not found.</div>

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div data-aos="fade-right" data-aos-delay="100">
        <img
          key={selected}
          src={selected}
          alt={product.name}
          className="w-full rounded-2xl border border-black/10 object-cover transition-transform duration-500 will-change-transform hover:scale-105"
        />
        <div className="flex gap-3 mt-3">
          {product.gallery.map((img) => (
            <button
              key={img}
              onClick={() => setSelected(img)}
              className={`h-20 w-20 rounded-lg border overflow-hidden transition-all duration-300 will-change-transform ${selected===img ? 'ring-2 ring-ring scale-95' : 'hover:scale-95 hover:shadow-md'}`}
              data-aos="zoom-in"
              data-aos-delay={120 + product.gallery.indexOf(img) * 40}
            >
              <img src={img} alt="thumb" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="text-foreground/60">{product.category}</p>
        </div>
        <div className="text-2xl font-semibold">${product.price}</div>
        <p className="text-foreground/70 max-w-prose">{product.description}</p>

  <Button
    onClick={() => {
      addToCart(product, 1)
      setShowCartAnim(true)
    }}
    className="w-full md:w-auto rounded-full transition-transform duration-200 will-change-transform hover:scale-105 active:scale-95"
  >
    Add to Cart
  </Button>

  <CartAnimation
    show={showCartAnim}
    product={product}
    onDone={() => setShowCartAnim(false)}
  />

  <Tabs defaultValue="specs" className="w-full" data-aos="fade-up" data-aos-delay="250">
          <TabsList className="rounded-full">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
          </TabsList>
          <TabsContent value="specs">
            <ul className="space-y-2">
              {Object.entries(product.specs || {}).map(([k, v]) => (
                <li key={k} className="flex justify-between border-b py-2"><span className="text-muted-foreground">{k}</span><span>{v}</span></li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="text-muted-foreground">No reviews yet. Be the first to review!</div>
          </TabsContent>
          <TabsContent value="qa">
            <div className="text-muted-foreground">Have questions? Contact us on the Contact page.</div>
          </TabsContent>
        </Tabs>

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-medium mb-3">Related products</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 2)
              .map((p, i) => (
                <div key={p.id} className="flex gap-3 border rounded-md p-3 items-center transition-transform duration-300 will-change-transform hover:scale-102 hover:shadow-md" data-aos="fade-up" data-aos-delay={350 + i * 60}>
                  <img src={p.image} alt={p.name} className="h-16 w-16 object-cover rounded transition-transform duration-300 hover:scale-105" />
                  <div className="flex-1">
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm text-muted-foreground">${p.price}</div>
                  </div>
                  <Button onClick={() => addToCart(p)} className="transition-transform duration-200 hover:scale-105 active:scale-95">Add</Button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
