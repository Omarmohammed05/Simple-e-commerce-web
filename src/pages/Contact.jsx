import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for reaching out! We will reply shortly.')
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">Contact us</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required placeholder="Jane Appleseed" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="jane@example.com" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <textarea id="message" required className="w-full h-28 rounded-md border bg-transparent p-3 text-sm" placeholder="How can we help?" />
          </div>
          <Button type="submit">Send message</Button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer 14‑day returns on all products in original condition.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
            <AccordionContent>
              Yes, we ship to over 50 countries worldwide.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              You will receive a tracking link via email after checkout.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
