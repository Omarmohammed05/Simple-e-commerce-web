import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth } from '../hooks/useAuth'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 })

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Scroll progress */}
  <motion.div className="fixed left-0 top-0 h-[2px] bg-foreground/90 origin-left z-[60]" style={{ scaleX }} />
      <div className="container mx-auto h-14 md:h-16 grid grid-cols-3 items-center container-padding">
        {/* Left: Clean links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground/70">
          {['/', '/products', '/contact'].map((path, idx) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn(
                  'transition-all duration-200 will-change-transform hover:text-foreground hover:scale-105 focus:scale-105',
                  isActive && 'text-foreground scale-105'
                )
              }
            >
              {['Home', 'Products', 'Contact'][idx]}
            </NavLink>
          ))}
        </nav>

        {/* Center: Brand */}
        <Link
          to="/"
          className="justify-self-center flex items-center gap-2 text-base md:text-lg font-semibold tracking-tight"
        >
          <span className="h-5 w-5 md:h-6 md:w-6 inline-block rounded-full bg-foreground" />
          AppleStore
        </Link>

        {/* Right: Actions */}
        <div className="justify-self-end flex items-center gap-1.5 md:gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/cart">Cart</Link>
          </Button>
          {user ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button size="sm" className="rounded-full" asChild>
              <Link to="/auth">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
