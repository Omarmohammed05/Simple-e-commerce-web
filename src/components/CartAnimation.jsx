import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CartAnimation({ show, product, onDone }) {
  return (
    <AnimatePresence>
      {show && product && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 60 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed left-1/2 top-24 z-[100] -translate-x-1/2 bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center border border-black/10"
          style={{ minWidth: 320 }}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
            className="h-24 w-24 object-cover rounded-xl mb-3 shadow-lg"
          />
          <div className="font-semibold text-lg mb-1">Added to Cart!</div>
          <div className="text-sm text-foreground/60 mb-2">{product.name}</div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-600 text-2xl mb-2"
          >
            ✓
          </motion.div>
          <button
            onClick={onDone}
            className="mt-2 px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Continue Shopping
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
