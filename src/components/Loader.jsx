import React from 'react'

export default function Loader() {
  return (
    <div className="grid place-items-center py-16" data-aos="fade-in">
      <div className="h-10 w-10 rounded-full border-2 border-foreground/20 border-t-foreground animate-spin" />
    </div>
  )
}
