import { Droplet, Bug } from 'lucide-react'

export function Products() {
  const products = [
    {
      icon: <Droplet className="h-12 w-12 mb-2 text-blue-500" />,
      title: 'DripFlow',
      description: 'Smart irrigation system for precise watering, maximizing crop yields and promoting water conservation.',
      features: [
        'Water usage monitoring',
        'Predictive water usage',
        'Integrated weather forecasting',
        'Remote monitoring and control',
      ],
    },
    {
      icon: <Bug className="h-12 w-12 mb-2 text-yellow-500" />,
      title: 'BeeLink',
      description: 'Smart beehive system for optimizing honey production and colony health management.',
      features: [
        'Remote monitoring and control',
        'Intrusion detection',
        'Colony health monitoring',
        'Predictive honey production',
      ],
    },
  ]

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our IoT Products
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 items-start justify-center">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              {product.icon}
              <h3 className="text-2xl font-bold">{product.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                {product.description}
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}