import { Button } from '@/components/ui/button'
import {  Globe, Smartphone, Palette, TestTube, LineChart, Users } from 'lucide-react'


export  function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header and other sections remain unchanged */}
      
      <main className="flex-1">
        {/* Hero, Products, and other sections remain unchanged */}

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-black ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                {/* <h3 className="inline-block rounded-lg text-sm py-1 px-3 font-semibold text-purple-600 dark:text-gray-300 ">OUR SERVICES</h3> */}
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-5">
                  OUR SERVICES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  We Offer a Wide<br />Variety of IoT Services
                </h2>
              </div>
              {/* <Button variant="outline" className="hidden sm:inline-flex hover:bg-slate-600">
                All Services
              </Button> */}
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-2">
                <Globe className="h-10 w-10 text-gray-300" />
                <h3 className="text-xl font-bold">Hardware Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  From component selection to PCB design, we deliver cutting-edge hardware solutions that stand out in the IoT landscape.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Smartphone className="h-10 w-10 text-gray-300" />
                <h3 className="text-xl font-bold">Firmware Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create complex enterprise software, ensure reliable integration, and modernize your legacy systems with our expert firmware development.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Palette className="h-10 w-10 text-gray-300" />
                <h3 className="text-xl font-bold">UI/UX Design for IoT</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Build the product you need on time with an experienced team that uses a clear and effective design process, tailored for IoT interfaces.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <TestTube className="h-10 w-10 text-gray-300" />
                <h3 className="text-xl font-bold">QA & Testing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Turn to our experts to perform comprehensive, multi-stage testing and auditing of your IoT software and hardware integration.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <LineChart className="h-10 w-10 text-gray-300" />
                <h3 className="text-xl font-bold">IoT Consultancy</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios in your IoT ecosystem.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Users className="h-10 w-10 text-gray-300" />
                <h3 className="text-xl font-bold">Dedicated Team</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Over the past decade, our customers succeeded by leveraging Embed Solutions&apos; process of building, motivating, and managing software development teams.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center sm:hidden">
              <Button variant="outline">All Services</Button>
            </div>
          </div>
        </section>

        {/* About, Contact, and other sections remain unchanged */}
      </main>

      {/* Footer remains unchanged */}
    </div>
  )
}