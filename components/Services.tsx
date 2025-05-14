'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Residential Cleaning',
    description: 'Professional home cleaning services tailored to your needs',
    image: '/images/cleaning-tools-1.png',
    iconBg: 'bg-light-blue',
  },
  {
    id: 2,
    title: 'Industrial Cleaning',
    description: 'Specialized cleaning for industrial spaces and factories',
    image: '/images/worker-cleaning.png',
    iconBg: 'bg-mint-green',
  },
  {
    id: 3,
    title: 'Fumigation',
    description: 'Effective pest control and fumigation services',
    image: '/images/cleaning-tools-2.png',
    iconBg: 'bg-cyan',
  },
  {
    id: 4,
    title: 'Landscaping',
    description: 'Professional landscape design and maintenance',
    image: '/images/modern-house.png',
    iconBg: 'bg-light-blue',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-majer text-5xl text-primary-blue mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of cleaning and maintenance services for residential and commercial clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-light rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className={`${service.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-majer text-primary-blue mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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
            className="bg-primary-blue text-white px-8 py-3 rounded-full font-majer inline-block hover:bg-dark-blue transition-colors"
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
