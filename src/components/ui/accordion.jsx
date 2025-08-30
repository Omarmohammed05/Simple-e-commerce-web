import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '../../lib/utils'

const Accordion = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Root ref={ref} data-aos="fade-up" data-aos-duration="500" {...props} />
))
Accordion.displayName = 'Accordion'

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn('flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className)}
      {...props}
    >
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className)} {...props}>
    <div className="pb-4 pt-0">
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
