"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/dustoutcolor.png"
                alt="DustOut Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/#contact"
                className="text-blue-500 hover:text-cyan font-majer font-bold text-lg"
              >
                Contact
              </Link>
              <Link
                href="/#about"
                className="text-blue-500 hover:text-cyan font-majer font-bold text-lg"
              >
                About Us
              </Link>
              <Link
                href="/#booking"
                className="text-blue-500 hover:text-cyan font-majer font-bold text-lg"
              >
                Book Us
              </Link>
              <Link
                href="/#get-started"
                className="bg-blue-700 text-white px-6 py-2 rounded-full font-majer font-bold text-lg hover:bg-mint-green transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button - simplified to match design */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="flex flex-col space-y-1.5 p-2 bg-green-500 rounded"
            >
              <span className="block w-6 h-1 bg-white rounded"></span>
              <span className="block w-6 h-1 bg-white rounded"></span>
              <span className="block w-6 h-1 bg-white rounded"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mx-4 mt-2 overflow-hidden">
          <div className="py-2">
            <Link
              href="/#contact"
              className="block px-4 py-3 text-blue-700 hover:bg-blue-50 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-3 text-blue-700 hover:bg-blue-50 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#booking"
              className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
