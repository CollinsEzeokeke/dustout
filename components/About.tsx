'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const features = [
    {
      title: 'Professional Staff',
      description: 'Our team consists of trained and experienced cleaning professionals.'
    },
    {
      title: 'Quality Equipment',
      description: 'We use professional-grade cleaning equipment and eco-friendly products.'
    },
    {
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee with our cleaning services.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-image.png"
                alt="About Dustout"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-majer text-primary-blue mb-6">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-8">
              With years of experience in the cleaning industry, we provide top-notch cleaning
              services that ensure your space is not just clean, but healthy and comfortable.
              Our commitment to excellence and attention to detail sets us apart.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="h-8 w-8 bg-mint-green rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-primary-blue rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 bg-primary-blue text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
