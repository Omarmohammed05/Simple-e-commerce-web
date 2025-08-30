import React from 'react'

const CartContext = React.createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = React.useState([])

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p)
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const updateQuantity = (id, quantity) => {
    setItems((prev) => prev.map((p) => p.id === id ? { ...p, quantity: Math.max(1, quantity) } : p))
  }

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((sum, p) => sum + p.price * p.quantity, 0)

  const value = { items, addToCart, updateQuantity, removeFromCart, clearCart, subtotal }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = React.useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
