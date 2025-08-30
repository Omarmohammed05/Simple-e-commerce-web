import React from 'react'
import { motion } from 'framer-motion'
import productsData from '../assets/products.json'
import ProductCard from '../components/ProductCard'
import { Select, SelectItem } from '../components/ui/select'

const categories = ['All','iPhone','iPad','Mac','Watch','Accessories']

export default function Products() {
  const [query, setQuery] = React.useState('')
  const [category, setCategory] = React.useState('All')
  const [sort, setSort] = React.useState('Popularity')

  const filtered = productsData
    .filter(p => category === 'All' ? true : p.category === category)
    .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a,b) => {
      if (sort === 'Price: Low→High') return a.price - b.price
      if (sort === 'Price: High→Low') return b.price - a.price
      return b.popularity - a.popularity
    })

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-8">
      <aside className="space-y-4" data-aos="fade-right" data-aos-delay="100">
        <div className="rounded-2xl border border-black/10 p-4 space-y-4 bg-card">
          <h3 className="font-medium tracking-tight">Filter</h3>
          <input
            placeholder="Search"
            className="w-full h-10 rounded-md border px-3 bg-background focus:outline-none focus:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="space-y-2">
            <div className="text-sm text-foreground/60">Category</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition-all duration-300 will-change-transform ${category===c? 'bg-foreground text-background scale-105 shadow-lg' : 'hover:border-foreground/40 hover:scale-105 hover:shadow-md'}`}
                  data-aos="zoom-in"
                  data-aos-delay={120 + categories.indexOf(c) * 40}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-foreground/60">Sort</div>
            <Select value={sort} onValueChange={setSort} placeholder="Sort by">
              {["Popularity","Price: Low→High","Price: High→Low"].map((s) => (
                <SelectItem value={s} key={s}>{s}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </aside>

      <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={p.id} data-aos="fade-up" data-aos-delay={150 + i * 60}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
