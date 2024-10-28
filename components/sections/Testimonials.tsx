/* eslint-disable react/no-unescaped-entities */
'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Testimonial = {
  content: string
  author: string
  role: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    content: "Embed Solutions transformed our agricultural operations. Their DripFlow system has reduced our water consumption by 40% while improving crop yields. It's been a game-changer for our farm.",
    author: "Sarah Kimani",
    role: "Operations Director",
    company: "Green Fields Farm",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=128&h=128&fit=crop&crop=faces&q=80"
  },
  {
    content: "The BeeLink system has revolutionized how we monitor our apiaries. The real-time data and predictive analytics have helped us optimize our honey production significantly.",
    author: "John Mwangi",
    role: "Chief Apiarist",
    company: "Sweet Honey Co.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&w=128&h=128&fit=crop&crop=faces&q=80"
  },
  {
    content: "Their hardware development expertise is unmatched. They helped us create a custom IoT solution that perfectly fits our unique requirements. The attention to detail was impressive.",
    author: "Alice Wanjiku",
    role: "Technical Director",
    company: "Tech Innovators Ltd",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=128&h=128&fit=crop&crop=faces&q=80"
  },
  {
    content: "Working with Embed Solutions was a pleasure. Their team's technical knowledge and professional approach made our project implementation smooth and successful.",
    author: "David Ochieng",
    role: "CEO",
    company: "Smart Farms Kenya",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=128&h=128&fit=crop&crop=faces&q=80"
  }
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    startIndex: 1
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50  dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 ">
          What Our Clients Say
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 relative transition-transform duration-300"
                >
                  <div
                    className={cn(
                      "relative h-full transition-all duration-300 transform",
                      "group cursor-pointer rounded-xl border bg-white p-6 dark:bg-gray-800",
                      "flex flex-col justify-between gap-4"
                    )}
                  >
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full w-12 h-12 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}