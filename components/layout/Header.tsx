'use client'

import Link from 'next/link'
import { CircuitBoard } from 'lucide-react'
import {
    Drawer, 
    DrawerTrigger, 
    DrawerContent, 
    DrawerHeader, 
    DrawerClose
} from '@/components/ui/drawer'
import { Button } from '../ui/button'

export function Header() {
  return (
<header className="w-full max-w-6xl px-4 lg:px-6 h-14 flex items-center">
      {/* Logo */}
      <Link className="flex items-center justify-center" href="/">
        <CircuitBoard className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">Embed Solutions</span>
      </Link>

      {/* Navigation for larger screens */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
          Products
        </Link>
        <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
          Services
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>

      {/* Drawer for smaller screens */}
      <div className="ml-auto md:hidden">
        <Drawer shouldScaleBackground>
          <DrawerTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DrawerTrigger>

          {/* Drawer Content */}
          <DrawerContent>
            <DrawerHeader>
              <h2 className="text-lg font-semibold">Menu</h2>
            </DrawerHeader>

            <nav className="flex flex-col p-4 space-y-4">
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="#products" className="text-sm font-medium hover:underline">
                Products
              </Link>
              <Link href="#services" className="text-sm font-medium hover:underline">
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline">
                Contact
              </Link>
            </nav>

            <DrawerClose asChild>
              <Button variant="ghost" className="absolute top-4 right-4">
                Close
              </Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}