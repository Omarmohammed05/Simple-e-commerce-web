import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-20">
      <div className="container mx-auto container-padding py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-foreground/60">
        <div>
          <div className="flex items-center gap-2 text-foreground mb-2 font-semibold tracking-tight">
            <span className="h-6 w-6 inline-block rounded-full bg-foreground" />
            AppleStore
          </div>
          <p>Minimal, refined, and beautifully fast.</p>
        </div>
        <div>
          <h4 className="text-foreground font-medium mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:underline transition-all duration-200 will-change-transform hover:scale-105">Products</a></li>
            <li><a href="/contact" className="hover:underline transition-all duration-200 will-change-transform hover:scale-105">Contact</a></li>
            <li><a href="/auth" className="hover:underline transition-all duration-200 will-change-transform hover:scale-105">Login</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-foreground font-medium mb-2">Legal</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline transition-all duration-200 will-change-transform hover:scale-105">Privacy Policy</a></li>
            <li><a className="hover:underline transition-all duration-200 will-change-transform hover:scale-105">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-foreground/60">© {new Date().getFullYear()} AppleStore. All rights reserved.</div>
    </footer>
  )
}
