import { CircuitBoard, Zap, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function About() {
  const features = [
    {
      icon: <CircuitBoard className="h-8 w-8 text-primary" />,
      title: "Experience",
      description: "Our expert team of hardware and firmware developers brings years of IoT innovation."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Quick Support",
      description: "Rapid response times and dedicated support for all your IoT implementation needs."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Time-Tested",
      description: "Proven track record of delivering reliable IoT solutions since 2022."
    }
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              About Company
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Your Partner for IoT Innovation
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Embed Solutions is the partner of choice for many of Kenya&apos;s leading enterprises and agribusinesses. 
              We help businesses elevate their operations through custom IoT solutions, hardware development, and expert consultancy services.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-4" variant='link'>
              Learn More About Us
            </Button>
          </div>

          <div className="relative h-[600px] w-full">
            {/* Main blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 blur-3xl animate-blob"></div>
            
            {/* Secondary blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-green-400 to-cyan-500 opacity-70 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-pink-400 to-orange-500 opacity-70 blur-3xl animate-blob animation-delay-4000"></div>

            {/* Animated Circuit Pattern */}
            <svg
              className="absolute inset-0 w-full h-full animate-circuit mix-blend-overlay opacity-30"
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path
                    d="M100 0 L100 100 M0 100 L200 100 M100 100 L100 200"
                    className="stroke-current"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="100" cy="100" r="5" className="fill-current" />
                  <circle cx="0" cy="100" r="5" className="fill-current" />
                  <circle cx="200" cy="100" r="5" className="fill-current" />
                </pattern>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="text-blue-500" stopColor="currentColor">
                    <animate
                      attributeName="stop-color"
                      values="#3B82F6;#8B5CF6;#3B82F6"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" className="text-purple-500" stopColor="currentColor">
                    <animate
                      attributeName="stop-color"
                      values="#8B5CF6;#3B82F6;#8B5CF6"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-gradient)" mask="url(#circuit-mask)" />
              <mask id="circuit-mask">
                <rect width="100%" height="100%" fill="url(#circuit)" />
              </mask>
            </svg>

            {/* Floating Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-75"></div>
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float animation-delay-2000 opacity-75"></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-float animation-delay-4000 opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}