'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C3A6E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-majer">
              Dustout
            </Link>
            <p className="mt-4 text-white/70">
              Professional cleaning services for homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Regular Cleaning</li>
              <li className="text-white/70">Deep Cleaning</li>
              <li className="text-white/70">Move In/Out Cleaning</li>
              <li className="text-white/70">Commercial Cleaning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-white/70">123 Cleaning Street</li>
              <li className="text-white/70">City, State 12345</li>
              <li className="text-white/70">Phone: (555) 123-4567</li>
              <li className="text-white/70">Email: info@dustout.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
          <p>&copy; {currentYear} Dustout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
