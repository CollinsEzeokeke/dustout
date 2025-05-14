'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-blue to-dark-blue">
          {/* Background Image */}
          <Image
            src="/images/smoky-watercolor-background.png"
            alt="Smoky Background"
            fill
            className="object-cover opacity-50"
            priority
          />

          {/* Content Container */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            {/* Hero Content */}
            <div className="text-center">
              <motion.h1 
                className="font-majer text-5xl md:text-7xl text-white leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We Clean; <br />
                So You Don't<br />
                Have To
              </motion.h1>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="#booking" 
                  className="bg-mint-green text-primary-blue font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Book Us
                </a>
                <a 
                  href="#get-started" 
                  className="bg-white text-primary-blue font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
                >
                  Get Started
                </a>
              </motion.div>
            </div>

            {/* Decorative Bubbles */}
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="bubble absolute"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.2, 
                  scale: 1,
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </section>

        {/* Other Sections */}
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
