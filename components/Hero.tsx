"use client";

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50">
      {/* Background Image with Bubbles */}
      <Image
        src="/images/smoky-background.png"
        alt="Smoky Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Scattered bubbles for mobile view */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image
          src="/images/bubble.png"
          alt="Bubble Top Left"
          width={150}
          height={150}
          className="absolute top-[15%] left-[5%] opacity-40"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble Top Right"
          width={100}
          height={100}
          className="absolute top-[10%] right-[10%] opacity-30"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble Middle Left"
          width={80}
          height={80}
          className="absolute top-[40%] left-[15%] opacity-50"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble Bottom Right"
          width={120}
          height={120}
          className="absolute bottom-[35%] right-[5%] opacity-40"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble Bottom Left"
          width={90}
          height={90}
          className="absolute bottom-[25%] left-[20%] opacity-30"
        />
      </div>

      {/* Main Content - Mobile first approach */}
      <div className="relative z-20 mx-auto px-5 pt-24 pb-16 flex flex-col h-screen">
        {/* Hero Text Content */}
        <div className="flex-1 flex flex-col justify-center mb-6">
          <h1 className="font-bold leading-tight mb-6">
            <span className="text-4xl sm:text-5xl text-green-500 block">
              We Clean;
            </span>
            <span className="text-4xl sm:text-5xl text-blue-700 block mt-1">
              So You Don't
            </span>
            <span className="text-4xl sm:text-5xl text-blue-700 block mt-1">
              Have To
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="#get-started"
              className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full text-center shadow-lg hover:bg-opacity-90 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="#booking"
              className="bg-white text-blue-500 border-2 border-blue-500 font-semibold px-8 py-3 rounded-full text-center shadow-lg hover:bg-opacity-90 transition-all"
            >
              Book US
            </Link>
          </div>
        </div>

        {/* Hero Image - Centered on mobile */}
        <div className="flex-1 relative min-h-[280px] max-h-[350px] mx-auto w-full">
          <Image
            src="/images/rectangle-13.png"
            alt="Cleaning Tools"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Service Ribbons */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          {/* Blue Ribbon */}
          <div className="relative bg-blue-600 py-2 transform -rotate-2 z-10">
            <div className="flex space-x-5 animate-marquee whitespace-nowrap">
              {Array(5)
                .fill(services)
                .flat()
                .map((service, i) => (
                  <span key={i} className="text-white mx-4 font-medium text-sm">
                    <span className="text-white">+</span> {service}
                  </span>
                ))}
            </div>
          </div>

          {/* Green Ribbon */}
          <div className="relative bg-green-500 py-2 transform rotate-2">
            <div className="flex space-x-5 animate-marquee2 whitespace-nowrap">
              {Array(5)
                .fill(services)
                .flat()
                .map((service, i) => (
                  <span key={i} className="text-white mx-4 font-medium text-sm">
                    <span className="text-white">+</span> {service}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - only visible on medium screens and up */}
      <div className="hidden md:block">
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8 top-48">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-left font-bold leading-tight">
                <span className="text-5xl md:text-6xl text-green-500">
                  We Clean;
                </span>
                <br />
                <span className="text-5xl md:text-6xl text-blue-700">
                  So You Don't
                </span>
                <br />
                <span className="text-5xl md:text-6xl text-blue-700">
                  Have To
                </span>
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
                      <div
                        key={i}
                        className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white"
                      >
                        <Image
                          src={client}
                          alt={`Client ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="ml-4 text-sm text-gray-600">
                    5000+ Clients
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative overflow-visible min-h-[400px]">
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

        {/* Additional bubbles for desktop */}
        <Image
          src="/images/bubble.png"
          alt="Bubble Large"
          width={300}
          height={300}
          className="absolute top-20 right-[10%] opacity-50 z-0"
        />
        <Image
          src="/images/bubble.png"
          alt="Bubble"
          width={600}
          height={600}
          className="object-cover absolute top-[50%] rotate-6 opacity-50 scale-150 transform left-[10%] z-0"
        />
      </div>
    </section>
  );
}
