import React from 'react'
import { useLocation } from 'react-router-dom'

export default function RouteAnnouncer() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    const h1 = document.querySelector('h1')
    const page = h1?.textContent || pathname
    const el = document.getElementById('route-change-region')
    if (el) el.textContent = `Navigated to ${page}`
  }, [pathname])
  return <div id="route-change-region" aria-live="polite" className="sr-only" />
}
