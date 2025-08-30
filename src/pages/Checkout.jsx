import React from 'react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'
import Modal from '../components/Modal'
import CheckoutSuccessAnimation from '../components/CheckoutSuccessAnimation'
import { motion } from 'framer-motion'
import { useCart } from '../hooks/useCart'

export default function Checkout() {
  const { clearCart, subtotal } = useCart()
  const [open, setOpen] = React.useState(false)
  const [showSuccessAnim, setShowSuccessAnim] = React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setOpen(true)
    setShowSuccessAnim(true)
    clearCart()
  }

  return (
    <div className="grid lg:grid-cols-[1fr,360px] gap-8">
      <motion.form onSubmit={onSubmit} className="space-y-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required placeholder="Jane Appleseed" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="jane@example.com" />
          </div>
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" required placeholder="1 Infinite Loop, Cupertino, CA" />
        </div>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Payment</div>
          <div className="grid sm:grid-cols-3 gap-3">
            {['Visa','PayPal','Stripe'].map((m) => (
              <label key={m} className="border rounded-md p-3 flex items-center gap-2 cursor-pointer">
                <input type="radio" name="payment" required />
                <span>{m}</span>
              </label>
            ))}
          </div>
        </div>
        <Button type="submit" className="w-full sm:w-auto rounded-full">Pay ${subtotal.toFixed(2)}</Button>
      </motion.form>

      <motion.div className="border rounded-2xl p-6 h-fit space-y-3 glow-surface" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between text-foreground/60"><span>Shipping</span><span>Free</span></div>
        <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
      </motion.div>

      <Modal open={open} onOpenChange={setOpen} title="Payment Successful" description="Your order has been placed.">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-2 py-6">
          <div className="h-16 w-16 rounded-full bg-green-500/10 text-green-600 grid place-items-center text-3xl">✓</div>
          <div className="text-center">
            <div className="font-medium">Thank you for your purchase!</div>
            <div className="text-sm text-muted-foreground">A receipt has been sent to your email.</div>
          </div>
        </motion.div>
      </Modal>
      <CheckoutSuccessAnimation show={showSuccessAnim} onDone={() => setShowSuccessAnim(false)} />
    </div>
  )
}
