import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export default function ProductCard({ product }) {
  // Micro-animation: bounce on click
  const [clicked, setClicked] = React.useState(false)
  return (
    <div
      data-aos="fade-up"
      className="will-change-transform"
      onClick={() => {
        setClicked(true)
        setTimeout(() => setClicked(false), 200)
      }}
      style={{
        transform: clicked ? 'scale(0.96)' : 'none',
        transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)',
      }}
    >
      <Card className="overflow-hidden rounded-2xl border border-black/10 bg-card transition-shadow duration-300 hover:shadow-xl will-change-transform">
        <Link to={`/products/${product.id}`} className="block group">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.04] will-change-transform"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
        <CardHeader className="pt-4">
          <CardTitle className="text-[17px] md:text-lg font-semibold tracking-tight">{product.name}</CardTitle>
          <div className="text-sm text-foreground/60">{product.category}</div>
        </CardHeader>
        <CardContent className="flex items-center justify-between pb-5">
          <div className="text-base md:text-lg font-semibold">${product.price}</div>
          <Button asChild size="sm" className="rounded-full transition-transform duration-200 hover:scale-105 active:scale-95">
            <Link to={`/products/${product.id}`}>View</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
