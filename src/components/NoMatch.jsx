import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function NoMatch() {
  return (
    <div className="min-h-[40vh] grid place-items-center text-center gap-3">
      <div className="text-2xl font-semibold">Page not found</div>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Button asChild><Link to="/">Go Home</Link></Button>
    </div>
  )
}
