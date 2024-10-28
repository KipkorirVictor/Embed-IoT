/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
// import {/*useCallback*/} from 'react'
import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Button } from '@/components/ui/button'
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

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function Testimonials() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState(testimonials)
  // const [ setHovering] = useState(false)

  const options: EmblaOptionsType = {
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    breakpoints: {
      '(max-width: 639px)': { slidesToScroll: 1 },
      '(min-width: 640px) and (max-width: 1023px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext()
  // }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext()
        setShuffledTestimonials(shuffleArray([...testimonials]))
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(intervalId)
    }
  }, [emblaApi])

  return (
    <section 
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
      // onMouseEnter={() => setHovering(true)}
      // onMouseLeave={() => setHovering(false)}
    >
      <div className="mx-auto container px-4 md:px-6">
         <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-5">
              OUR CLIENTS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Client&apos;s Say
            </h2>
         </div>
        
        <div className="relative"
          // onMouseEnter={() => setHovering(true)}
          // onMouseLeave={() => setHovering(false)}
        
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex"
              // onMouseEnter={() => setHovering(true)}
              // onMouseLeave={() => setHovering(false)}
            >
              {shuffledTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2 sm:px-3 lg:px-4"
                >
                  <div
                    className={cn(
                      "h-full transition-all duration-300 transform",
                      "rounded-xl border bg-white p-4 sm:p-6 dark:bg-gray-800",
                      "flex flex-col justify-between gap-4"
                    )}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.author}, ${testimonial.role} at ${testimonial.company}`}
                          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            {testimonial.company}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        &quot;{testimonial.content}&quot;  
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800",
              "transition-opacity duration-300",
              hovering ? "opacity-100" : "opacity-0"
            )}
            onClick={scrollPrev}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button> */}

          {/* <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800",
              "transition-opacity duration-300",
              hovering ? "opacity-100" : "opacity-0"
            )}
            onClick={scrollNext}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </section>
  )
}
// 'use client'

// import { useCallback, useEffect, useState } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import  { EmblaOptionsType } from 'embla-carousel'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { cn } from '@/lib/utils'

// type Testimonial = {
//   content: string
//   author: string
//   role: string
//   company: string
//   image: string
// }

// const testimonials: Testimonial[] = [
//   {
//     content: "Embed Solutions transformed our agricultural operations. Their DripFlow system has reduced our water consumption by 40% while improving crop yields. It's been a game-changer for our farm.",
//     author: "Sarah Kimani",
//     role: "Operations Director",
//     company: "Green Fields Farm",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=128&h=128&fit=crop&crop=faces&q=80"
//   },
//   {
//     content: "The BeeLink system has revolutionized how we monitor our apiaries. The real-time data and predictive analytics have helped us optimize our honey production significantly.",
//     author: "John Mwangi",
//     role: "Chief Apiarist",
//     company: "Sweet Honey Co.",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&w=128&h=128&fit=crop&crop=faces&q=80"
//   },
//   {
//     content: "Their hardware development expertise is unmatched. They helped us create a custom IoT solution that perfectly fits our unique requirements. The attention to detail was impressive.",
//     author: "Alice Wanjiku",
//     role: "Technical Director",
//     company: "Tech Innovators Ltd",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=128&h=128&fit=crop&crop=faces&q=80"
//   },
//   {
//     content: "Working with Embed Solutions was a pleasure. Their team's technical knowledge and professional approach made our project implementation smooth and successful.",
//     author: "David Ochieng",
//     role: "CEO",
//     company: "Smart Farms Kenya",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=128&h=128&fit=crop&crop=faces&q=80"
//   }
// ]

// const shuffleArray = (array: any[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// export function Testimonials() {
//   const [shuffledTestimonials, setShuffledTestimonials] = useState(testimonials)
//   const [hovering, setHovering] = useState(false)

//   const options: EmblaOptionsType = {
//     loop: true,
//     align: 'start',
//     slidesToScroll: 1,
//     breakpoints: {
//       '(min-width: 640px)': { slidesToScroll: 2 },
//       '(min-width: 1024px)': { slidesToScroll: 3 },
//     }
//   }

//   const [emblaRef, emblaApi] = useEmblaCarousel(options)

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   useEffect(() => {
//     if (emblaApi) {
//       const intervalId = setInterval(() => {
//         emblaApi.scrollNext()
//         setShuffledTestimonials(shuffleArray([...testimonials]))
//       }, 5000) // Change slide every 5 seconds

//       return () => clearInterval(intervalId)
//     }
//   }, [emblaApi])

//   return (
//     <section 
//       className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
//       onMouseEnter={() => setHovering(true)}
//       onMouseLeave={() => setHovering(false)}
//     >
//       <div className="mx-auto container px-4 md:px-6">
//         <div className="text-center mb-12">
//            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-5">
//              OUR CLIENTS
//            </div>
//            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//              What Our Client&apos;s Say
//            </h2>
//         </div>
        
//         <div className="relative">
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex -ml-4">
//               {shuffledTestimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="flex-[0_0_calc(100%-16px)] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.33%-16px)] min-w-0 pl-4 relative"
//                 >
//                   <div
//                     className={cn(
//                       "h-full transition-all duration-300 transform",
//                       "rounded-xl border bg-white p-4 sm:p-6 dark:bg-gray-800",
//                       "flex flex-col justify-between gap-4"
//                     )}
//                   >
//                     <div className="space-y-4">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={testimonial.image}
//                           alt={`${testimonial.author}, ${testimonial.role} at ${testimonial.company}`}
//                           className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
//                         />
//                         <div>
//                           <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
//                             {testimonial.company}
//                           </h4>
//                           <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
//                             {testimonial.role}
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
//                         &quot;{testimonial.content}&quot;
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Button
//             variant="outline"
//             size="icon"
//             className={cn(
//               "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800",
//               "transition-opacity duration-300",
//               hovering ? "opacity-100" : "opacity-0"
//             )}
//             onClick={scrollPrev}
//             aria-label="Previous testimonials"
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className={cn(
//               "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800",
//               "transition-opacity duration-300",
//               hovering ? "opacity-100" : "opacity-0"
//             )}
//             onClick={scrollNext}
//             aria-label="Next testimonials"
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
