import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { cn } from '../lib/utils'

export default function Modal({ open, onOpenChange, title, description, children, footer }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out" />
  <Dialog.Content className={cn('fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out rounded-lg')} data-aos="zoom-in" data-aos-duration="400">
          <div className="space-y-2">
            {title && <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">{title}</Dialog.Title>}
            {description && <Dialog.Description className="text-sm text-muted-foreground">{description}</Dialog.Description>}
          </div>
          <div>{children}</div>
          {footer && <div className="flex justify-end gap-2">{footer}</div>}
          <Dialog.Close asChild>
            <Button variant="ghost" className="absolute right-3 top-3 transition-transform duration-200 hover:scale-110 active:scale-95">✕</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
