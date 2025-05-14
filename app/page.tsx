'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#176FD4] to-[#0C3A6E]">
          {/* Background Image */}
          <Image
            src="/images/smoky-background.png"
            alt="Smoky Background"
            fill
            className="object-cover opacity-50"
          />

          {/* Content Container */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            {/* Hero Content */}
            <div className="text-center">
              <motion.h1 
                className="font-majer text-7xl text-white leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We Clean; <br />
                So You Don't<br />
                Have To
              </motion.h1>

              <motion.button
                className="bg-white text-[#176FD4] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Book Now
              </motion.button>
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
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
