'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-majer text-5xl text-primary-blue mb-2">About Us</h2>
          <h3 className="font-majer text-3xl md:text-4xl lg:text-5xl text-dark-blue mb-6">Best Cleaning in The UK</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <Image
                src="/images/men-high-five.png"
                alt="Team members high-fiving"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <p className="font-majer text-sm text-gray-600">5000+ Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-600 font-medium mb-8 text-base md:text-lg">
              At DustOut, we are the UK's top cleaning agency, specializing in industrial cleaning, residential cleaning, fumigation, and landscaping.
              <br /><br />
              Our expert team delivers reliable, eco-friendly services that meet the highest standards, transforming spaces with precision and care. Whether it's deep cleaning, pest control, or outdoor makeovers, DustOut ensures cleaner, healthier, and more beautiful environments across the UK.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Reliable', 'Fast', 'Thorough', 'Affordable'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="bg-light-blue p-2 rounded-lg">
                    <CheckIcon className="h-5 w-5 text-primary-blue" />
                  </div>
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#booking" 
                className="bg-primary-blue text-white px-8 py-3 rounded-full font-majer hover:bg-dark-blue transition-colors"
              >
                Book Us
              </a>
              <a 
                href="#services" 
                className="bg-light-blue text-primary-blue px-8 py-3 rounded-full font-majer hover:bg-cyan transition-colors"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
