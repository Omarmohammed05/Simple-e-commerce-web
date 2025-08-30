import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ErrorPage from './pages/ErrorPage'

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}> 
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="products/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
          <Route path="cart" element={<PageTransition><Cart /></PageTransition>} />
          <Route path="checkout" element={<PageTransition><Checkout /></PageTransition>} />
          <Route path="auth" element={<PageTransition><Auth /></PageTransition>} />
          <Route path="dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
     