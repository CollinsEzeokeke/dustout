'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Other Sections */}
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
