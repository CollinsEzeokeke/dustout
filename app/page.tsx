'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        {/* Other Sections */}
        <AboutSection />
        <ServicesSection />
        <BookingForm />
        {/* Booking section */}

        {/* contact section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
