'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-blue/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/dust-out-white.png"
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
              <Link href="/#services" className="text-white hover:text-cyan font-majer text-lg">
                Services
              </Link>
              <Link href="/#about" className="text-white hover:text-cyan font-majer text-lg">
                About Us
              </Link>
              <Link href="/#contact" className="text-white hover:text-cyan font-majer text-lg">
                Contact
              </Link>
              <Link href="/#booking" className="bg-mint-green text-primary-blue px-6 py-2 rounded-full font-majer text-lg hover:bg-white transition-colors">
                Book Us
              </Link>
              <Link href="/#get-started" className="bg-white text-primary-blue px-6 py-2 rounded-full font-majer text-lg hover:bg-mint-green transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mint-green"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-blue/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/#services" 
              className="text-white hover:text-cyan block px-3 py-2 font-majer text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#about" 
              className="text-white hover:text-cyan block px-3 py-2 font-majer text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/#contact" 
              className="text-white hover:text-cyan block px-3 py-2 font-majer text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/#booking" 
              className="text-white hover:text-mint-green block px-3 py-2 font-majer text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Us
            </Link>
            <Link 
              href="/#get-started" 
              className="text-white hover:text-mint-green block px-3 py-2 font-majer text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
