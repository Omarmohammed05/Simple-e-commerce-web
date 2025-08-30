import * as React from 'react'
import { cn } from '../../lib/utils'

export function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-foreground text-background',
    secondary: 'bg-secondary text-foreground',
    outline: 'border border-input',
  }
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 will-change-transform hover:scale-105', variants[variant], className)} {...props} />
  )
}
