'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Updated services array to match the image
const services = [
  {
    id: 1,
    title: 'Landscaping',
    icon: '/images/landscaping-icon.svg', // Placeholder for SVG icon
  },
  {
    id: 2,
    title: 'Residential Cleaning',
    icon: '/images/residential-cleaning-icon.svg', // Placeholder for SVG icon
  },
  {
    id: 3,
    title: 'Industrial Cleaning',
    icon: '/images/industrial-cleaning-icon.svg', // Placeholder for SVG icon
  },
  {
    id: 4,
    title: 'Fumigation',
    icon: '/images/fumigation-icon.svg', // Placeholder for SVG icon
  },
  {
    id: 5,
    title: 'Refuse Disposal',
    icon: '/images/refuse-disposal-icon.svg', // Placeholder for SVG icon
  },
  {
    id: 6,
    title: 'Deep Cleaning',
    icon: '/images/deep-cleaning-icon.svg', // Placeholder for SVG icon
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-sky-50">
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/bubble.png"
          alt="Bubble"
          width={200}
          height={200}
          className="absolute top-20 left-10 opacity-20"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble"
          width={100}
          height={100}
          className="absolute top-40 right-20 opacity-15"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble"
          width={150}
          height={150}
          className="absolute bottom-20 left-1/4 opacity-25"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble"
          width={80}
          height={80}
          className="absolute bottom-40 right-1/3 opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-blue-600 mb-4">Our Services</h2>
        </motion.div>

        {/* Mobile view - Vertical cards */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-500 rounded-xl p-6 text-center shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  {/* Placeholder for icon */}
                  <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                    {/* SVG icon will be placed here */}
                  </div>
                </div>
                <h3 className="text-white text-lg font-medium">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop view - 3x2 Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-500 rounded-2xl p-8 text-center shadow-md border-2 border-dashed border-white"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  {/* Placeholder for icon */}
                  <div className="w-full h-full flex items-center justify-center">
                    {/* SVG icon will be placed here */}
                  </div>
                </div>
                <h3 className="text-white text-xl font-medium">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="#booking" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full inline-block hover:bg-blue-700 transition-colors"
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
