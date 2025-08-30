import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import products from '../assets/products.json'
import ProductCard from '../components/ProductCard'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -80])

  return (
    <div className="space-y-20">
      {/* Hero */}
  <section className="relative overflow-hidden" data-aos="fade-up">
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(80%_80%_at_50%_0%,#000,transparent)] will-change-transform"
        />
        {/* Ambient colorful swirl */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-1/2 translate-x-1/2 h-[540px] w-[540px] rounded-full blur-3xl opacity-30 md:opacity-40 will-change-transform"
          style={{
            background:
              'conic-gradient(from 120deg at 50% 50%, #60a5fa, #a78bfa, #f472b6, #60a5fa)'
          }}
        />
  <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-6 md:space-y-8">
            <h1
              className="text-5xl md:text-6xl font-semibold tracking-tight"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              The best place to buy the products you love.
            </h1>
            <p
              className="text-lg text-foreground/60 max-w-[55ch]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Shop the latest devices with fast, free delivery and expert support.
            </p>
            <div
              className="flex gap-3"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link to="/products">Shop now</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <Link to="/contact">Need help?</Link>
              </Button>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="/images/hero-mac.svg"
              alt="Mac"
              className="rounded-2xl border border-black/10 w-full object-cover shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-transform duration-500 will-change-transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
  <section className="space-y-6" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500">
          The latest.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p, i) => (
            <div key={p.id} data-aos="fade-up" data-aos-delay={150 + i * 80}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
        {[
          { label: 'Customers', value: '1M+' },
          { label: 'Products', value: '250+' },
          { label: 'Countries', value: '50+' },
          { label: 'Satisfaction', value: '99%+' },
        ].map((s, i) => (
          <div
            key={s.label}
            className="rounded-2xl border border-black/10 p-6 text-center bg-card transition-transform duration-300 will-change-transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={250 + i * 60}
          >
            <div className="text-3xl font-semibold">{s.value}</div>
            <div className="text-sm text-foreground/60">{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
