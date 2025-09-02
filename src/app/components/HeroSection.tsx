'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import MovingText from './MovingText';
import { useScrollTextHighlight } from './useScrollTextHighlight';

export default function HeroSection() {
  const textRef = useRef(null);
  const targetText = "Canada PR Dream";
  const { letterColors } = useScrollTextHighlight(targetText);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );
    }

                  // Simple Canadian leaf animations
              const leaves = document.querySelectorAll('.canadian-leaf, .canadian-leaf-secondary, .canadian-leaf-small');
              
              leaves.forEach((leaf, index) => {
                gsap.set(leaf, { 
                  x: -50 + (index * 30), 
                  y: 100 + (index * 20),
                  rotation: index * 45,
                  scale: 0.6 + (index * 0.2)
                });

                gsap.to(leaf, {
                  duration: 8 + (index * 2),
                  x: "+=400",
                  y: "-=200",
                  rotation: 360 + (index * 180),
                  scale: 1 + (index * 0.3),
                  ease: "power1.inOut",
                  repeat: -1,
                  yoyo: true
                });
              });
  }, []);

  const floatingElements = [
    { text: "TEF", delay: 0, y: -20 },
    { text: "TCF", delay: 0.5, y: 20 },
    { text: "CLB 7+", delay: 1, y: -15 },
    { text: "Canada PR", delay: 1.5, y: 25 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient with Parallax */}
      <Parallax speed={-10} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-primary"></div>
      </Parallax>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10 text-6xl md:text-8xl font-bold"
            initial={{ 
              x: 0,
              y: 0,
              opacity: 0 
            }}
            animate={{ 
              y: [null, element.y],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
          >
            {element.text}
          </motion.div>
        ))}
      </div>

      {/* Moving Canadian Leaves */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="canadian-leaf-container">
          {/* Main Leaf */}
          <svg 
            className="canadian-leaf absolute opacity-20"
            width="80" 
            height="80" 
            viewBox="0 0 100 100"
            fill="currentColor"
            style={{ color: '#ffffff' }}
          >
            <path d="M50 10 C60 20, 70 30, 75 50 C70 70, 60 80, 50 90 C40 80, 30 70, 25 50 C30 30, 40 20, 50 10 Z" />
            <path d="M50 15 C55 25, 60 35, 62 50 C60 65, 55 75, 50 85 C45 75, 40 65, 38 50 C40 35, 45 25, 50 15 Z" />
            <path d="M50 20 C52 28, 54 36, 55 50 C54 64, 52 72, 50 80 C48 72, 46 64, 45 50 C46 36, 48 28, 50 20 Z" />
          </svg>
          
          {/* Secondary Leaf */}
          <svg 
            className="canadian-leaf-secondary absolute opacity-15"
            width="60" 
            height="60" 
            viewBox="0 0 100 100"
            fill="currentColor"
            style={{ color: '#ffffff' }}
          >
            <path d="M50 10 C60 20, 70 30, 75 50 C70 70, 60 80, 50 90 C40 80, 30 70, 25 50 C30 30, 40 20, 50 10 Z" />
            <path d="M50 15 C55 25, 60 35, 62 50 C60 65, 55 75, 50 85 C45 75, 40 65, 38 50 C40 35, 45 25, 50 15 Z" />
          </svg>
          
          {/* Small Leaf */}
          <svg 
            className="canadian-leaf-small absolute opacity-10"
            width="40" 
            height="40" 
            viewBox="0 0 100 100"
            fill="currentColor"
            style={{ color: '#ffffff' }}
          >
            <path d="M50 10 C60 20, 70 30, 75 50 C70 70, 60 80, 50 90 C40 80, 30 70, 25 50 C30 30, 40 20, 50 10 Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-scroll-text
          >
            Master French for Your{' '}
            <span className="inline-block">
              {targetText.split('').map((letter, index) => (
                                  <span
                    key={index}
                    className="scroll-text-letter"
                    style={{
                      color: letterColors[index] || '#ffffff'
                    }}
                  >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl mb-8 text-black dark:text-white max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Personalized TEF & TCF coaching to help you achieve CLB 7+ and boost your CRS score.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/consult-now"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl block"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/courses"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 block"
              >
                View Our Courses
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator with parallax */}
        <Parallax speed={-5} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </Parallax>
      </div>

      {/* Moving Text Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
        <MovingText 
          text="🎯 TEF • TCF • CLB 7+ • Canada PR • French Mastery • Immigration Success 🎯"
          speed={30}
          direction="left"
          className="text-white text-lg font-semibold py-2"
        />
      </div>
    </section>
  );
}
