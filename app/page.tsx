/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Testimonials }  from '@/components/sections/Testimonies'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { About } from '@/components/sections/About'
import { Stats } from '@/components/sections/Stats'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl">

        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className='absolute inset-0 z-0'>
            <Image
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=1920&q=80"
              alt="Engineer working on a PCB"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0 z-0 filter grayscale opacity-30"
            />
          </div>
          {/* Top Left Clip Path */}
          <div className='absolute top-0 left-0 w-1/4 h-1/3 bg-gradient-to-br from-blue-500 to-purple-100 opacity-30 z-0' 
            style={{clipPath: 'polygon(0 0,100% 0,0 100%)'}}>
          </div>
          <div className='absolute top-0 left-0 w-1/4 h-1/3 bg-gradient-to-br from-blue-500 to-purple-100 opacity-50 z-0' 
            style={{clipPath: 'polygon(0 0,100% 0,0 50%)'}}>
          </div>

          {/* Bottom Right Clip Path */}
          <div className='absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-500 to-purple-200 opacity-30 z-10' 
          style={{clipPath: 'polygon(100% 100%, 0 100%, 100% 0)'}}>
          </div>
          <div className='absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-500 to-purple-200 opacity-50 z-10' 
          style={{clipPath: 'polygon(100% 50%, 0 100%, 100% 0)'}}>
          </div>

          {/* Lines on clippath Bottom Right*/}
          <svg className="absolute bottom-0 right-0 w-1/3 h-1/3 z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(191, 219, 254)', stopOpacity: 0.3 }}/>
                <stop offset="100%" style={{ stopColor: 'rgb(233, 213, 255)', stopOpacity: 0.3 }}/>
              </linearGradient>
              <clipPath id="clip1">
                <polygon points="100,100 0,100 100,0"/>
              </clipPath>
            </defs>
            <polygon points='100,100 0,100 100,0' fill='url(#grad2)' clipPath='url(#clip2)'/>
            { [...Array(10)].map((_,i) => (
              <line
                key={i}
                x1="100"
                y1={100-i * 7}
                x2={100-i * 7}
                y2="100"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.5"
                clipPath="url(#clip2)"
              />
            ))}
          </svg>

          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Transformative IoT Solutions for a Smarter World
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Embed Solutions LTD designs and implements intelligent IoT solutions to address complex challenges, fostering growth and efficiency.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default" className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/*More on Enbed IoT*/}
        <About />

        {/* Our Numbers Section */}
        <Stats />

        {/* Products Section */}
        <Products />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>
        {/* Footer */}
        <Footer />
    </div>
  )
}
