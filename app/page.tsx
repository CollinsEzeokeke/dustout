"use client";

import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";

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
        {/* pricing section */}
        <PricingSection />
        {/* why choose us section */}
        <WhyChooseUs />
        {/*  how to book us section*/}

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
