'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

export function Stats() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const stats = [
    { value: 13, label: 'Clients Served' },
    { value: 21, label: 'Projects Completed' },
    { value: 13, label: 'Designs Created' },
    { value: 2, label: 'Innovative Products' },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              {isClient ? (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  className="text-4xl font-bold text-primary"
                  enableScrollSpy
                  scrollSpyOnce
                />
              ) : (
                <span className="text-4xl font-bold text-primary">{stat.value}</span>
              )}
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}