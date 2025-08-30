import * as React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '../../lib/utils'

export function Select({ value, onValueChange, children, placeholder }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="inline-flex items-center justify-between h-10 px-3 rounded-md border w-full bg-background text-sm transition-all duration-200 will-change-transform hover:scale-105 focus:scale-105" data-aos="fade-in">
        {value || placeholder}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start" className="z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
        {React.Children.map(children, (child) => React.cloneElement(child, { onSelect: () => onValueChange(child.props.value) }))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export function SelectItem({ value, children, onSelect }) {
  return (
    <DropdownMenu.Item onSelect={onSelect} className={cn('relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground')}>
      {children}
    </DropdownMenu.Item>
  )
}
