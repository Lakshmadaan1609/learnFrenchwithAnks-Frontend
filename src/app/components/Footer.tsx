import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white bg-red-500 px-4 py-2 rounded-lg mb-4 inline-block">
                Learn French With Anks
              </h3>
              <p className="text-white leading-relaxed mb-6 max-w-md">
                Your trusted partner in mastering French for Canada PR. We provide personalized TEF & TCF coaching 
                to help you achieve CLB 7+ scores and boost your CRS points.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="mailto:learnfrenchwithanks@gmail.com"
                className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center hover:opacity-90 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+14377335551"
                className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center hover:opacity-90 transition-all duration-300"
                aria-label="Phone"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white bg-red-500 px-3 py-1 rounded-lg font-semibold mb-4 inline-block">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-red-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white hover:text-red-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:text-red-300 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-red-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-red-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg text-white bg-red-500 px-3 py-1 rounded-lg font-semibold mb-4 inline-block">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-white hover:text-red-300 transition-colors">
                  TEF/TCF Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:text-red-300 transition-colors">
                  French for Beginners
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-white hover:text-red-300 transition-colors">
                  Intermediate French
                </Link>
              </li>
              <li>
                <Link href="/consult-now" className="text-white hover:text-red-300 transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0">
              © 2024 Learn French With Anks. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white hover:text-red-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-red-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
