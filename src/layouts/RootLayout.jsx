import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RouteAnnouncer from '../components/RouteAnnouncer'

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Navbar />
      <RouteAnnouncer />
      <main className="flex-1 container mx-auto container-padding">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
