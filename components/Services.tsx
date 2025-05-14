'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Regular Cleaning',
      description: 'Weekly or bi-weekly cleaning services to maintain a spotless environment.',
      price: 'From $80/visit'
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning of all areas, including hard-to-reach spaces and detailed attention.',
      price: 'From $200/visit'
    },
    {
      title: 'Move In/Out Cleaning',
      description: 'Comprehensive cleaning service for moving in or out of properties.',
      price: 'From $250/visit'
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-majer text-primary-blue mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 bg-mint-green rounded-full mb-6 flex items-center justify-center">
                {/* Icon placeholder */}
                <div className="h-6 w-6 bg-primary-blue rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <p className="text-xl font-semibold text-primary-blue">{service.price}</p>
              <button className="mt-6 w-full bg-primary-blue text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-white text-primary-blue border-2 border-primary-blue px-8 py-3 rounded-full hover:bg-primary-blue hover:text-white transition-all">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
