import React from 'react'
import { CartProvider } from '../hooks/useCart'
import { AuthProvider } from '../hooks/useAuth'

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  )
}
