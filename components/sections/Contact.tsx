import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Embed IoT in Your Business?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Join the IoT revolution with Embed Solutions&apos; cutting-edge technologies.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              We will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}