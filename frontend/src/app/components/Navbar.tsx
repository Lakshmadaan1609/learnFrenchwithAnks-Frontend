'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                Learn French With Anks
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/consult-now"
                className="bg-gradient-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
                              <Link
                  href="/consult-now"
                  className="bg-gradient-accent text-white block px-3 py-2 rounded-lg text-base font-medium hover:opacity-90 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
