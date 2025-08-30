import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CheckoutSuccessAnimation({ show, onDone }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 60 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed left-1/2 top-24 z-[100] -translate-x-1/2 bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center border border-black/10"
          style={{ minWidth: 320 }}
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
            className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900 text-green-600 grid place-items-center text-5xl mb-3 shadow-lg"
          >
            ✓
          </motion.div>
          <div className="font-semibold text-lg mb-1">Payment Complete!</div>
          <div className="text-sm text-foreground/60 mb-2">Thank you for your order.</div>
          <button
            onClick={onDone}
            className="mt-2 px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
