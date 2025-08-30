import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Cart</h1>
      {items.length === 0 ? (
        <div className="text-muted-foreground">Your cart is empty.</div>
      ) : (
        <div className="grid lg:grid-cols-[1fr,360px] gap-8">
          <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {items.map((p) => (
              <motion.div key={p.id} layout className="flex items-center gap-4 border rounded-lg p-4 bg-card">
                <img src={p.image} alt={p.name} className="h-20 w-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-foreground/60">${p.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-9 w-9 border rounded" onClick={() => updateQuantity(p.id, p.quantity - 1)}>-</button>
                  <div className="w-8 text-center">{p.quantity}</div>
                  <button className="h-9 w-9 border rounded" onClick={() => updateQuantity(p.id, p.quantity + 1)}>+</button>
                </div>
                <Button variant="ghost" onClick={() => removeFromCart(p.id)}>Remove</Button>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="border rounded-2xl p-6 h-fit space-y-3 glow-surface" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-foreground/60"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            <Button asChild className="w-full rounded-full"><Link to="/checkout">Checkout</Link></Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
