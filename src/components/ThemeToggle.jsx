import React from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(() => document.documentElement.classList.contains('dark'))

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={() => setDark(!dark)}
      className="h-9 px-3 rounded-md border text-sm transition-all duration-200 will-change-transform hover:scale-105 focus:scale-105"
      data-aos="fade-in"
    >
      {dark ? 'Light' : 'Dark'} mode
    </motion.button>
  )
}
