'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Array of client avatars
  const clients = [
    "/images/person1.jpg",
    "/images/person2.jpg",
    "/images/person3.jpg",
    "/images/person1.jpg",
  ];

  // Services offered
  const services = [
    "Residential Cleaning",
    "Industrial Cleaning",
    "Fumigation",
    "Landscaping",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 to-sky-200">
      {/* bubble Image that's at the top of the page */}
      <Image
        src="/images/bubble.png"
        alt="Bubble"
        width={600}
        height={600}
        className="object-cover absolute -top-[15%] rotate-12 scale-150 transform left-[60%]"
      />
      {/* Background Image with Bubbles */}
      <Image
        src="/images/smoky-background.png"
        alt="Smoky Background"
        fill
        className="object-cover"
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8 top-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-left font-bold leading-tight">
              <span className="text-5xl md:text-6xl text-green-500">We Clean;</span>
              <br />
              <span className="text-5xl md:text-6xl text-blue-700">So You Don't</span>
              <br />
              <span className="text-5xl md:text-6xl text-blue-700">Have To</span>
            </h1>

            <div className="flex flex-row gap-4 mt-10">
              <Link 
                href="#get-started" 
                className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
              >
                Get Started
              </Link>
              <Link 
                href="#booking" 
                className="bg-white border-2 border-blue-500 text-blue-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
              >
                Book Us
              </Link>
            </div>

            {/* Client Avatars */}
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {clients.map((client, i) => (
                    <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                      <Image 
                        src={client} 
                        alt={`Client ${i+1}`} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-4 text-sm text-gray-600">5000+ Clients</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative overflow-visible min-h-[400px]">
            {/* <div className="absolute right-40 bottom-40 left-0 top-0 w-[200%] h-[200%] bg-blue-500"> */}
            <div className="absolute inset-0 -left-[100%] -top-[100%] w-[200%] h-[200%]">
              <Image
                src="/images/rectangle-13.png"
                alt="Cleaning Tools"
                fill
                className="object-contain origin-top-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Ribbons */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden h-[40%] flex flex-col justify-center items-center ">
        {/* Blue Ribbon */}
        <div className="relative bg-blue-600 py-2 transform -rotate-3 scale-110  z-10 h-11">
          <div className="flex space-x-5 animate-marquee whitespace-nowrap">
            {Array(5).fill(services).flat().map((service, i) => (
              <span key={i} className="text-white mx-4 font-medium">
                <span className="text-white">+</span> {service}
              </span>
            ))}
          </div>
        </div>
        
        {/* Green Ribbon */}
        <div className="relative bg-green-500 py-2 transform rotate-6 scale-110 h-11">
          <div className="flex space-x-5 animate-marquee2 whitespace-nowrap">
            {Array(5).fill(services).flat().map((service, i) => (
              <span key={i} className="text-white mx-4 font-medium">
                <span className="text-white">+</span> {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [0, 1, 0.8],
            y: [0, -40, -80],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <Image 
            src="/images/bubble.png" 
            alt="Bubble" 
            width={Math.random() * 30 + 20} 
            height={Math.random() * 30 + 20}
            className="object-contain"
          />
        </motion.div>
      ))}
    </section>
  );
} 