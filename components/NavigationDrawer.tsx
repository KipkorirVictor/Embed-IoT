// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import { Menu } from 'lucide-react'

// export function NavigationDrawer() {
//   const [open, setOpen] = useState(false)

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//         <Button variant="ghost" className="md:hidden">
//           <Menu className="h-6 w-6" />
//           <span className="sr-only">Toggle navigation menu</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left">
//         <nav className="flex flex-col space-y-4">
//           <Link
//             href="#products"
//             className="text-lg font-medium hover:underline"
//             onClick={() => setOpen(false)}
//           >
//             Products
//           </Link>
//           <Link
//             href="#services"
//             className="text-lg font-medium hover:underline"
//             onClick={() => setOpen(false)}
//           >
//             Services
//           </Link>
//           <Link
//             href="#about"
//             className="text-lg font-medium hover:underline"
//             onClick={() => setOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/contact"
//             className="text-lg font-medium hover:underline"
//             onClick={() => setOpen(false)}
//           >
//             Contact
//           </Link>
//         </nav>
//       </SheetContent>
//     </Sheet>
//   )
// }