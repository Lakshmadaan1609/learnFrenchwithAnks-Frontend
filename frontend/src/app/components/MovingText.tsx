'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MovingTextProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function MovingText({ 
  text, 
  speed = 20, 
  direction = 'left',
  className = '' 
}: MovingTextProps) {
  const textArray = Array.from({ length: 3 }, () => text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/20"></div>
      
      <motion.div
        className="flex relative z-10"
        animate={{
          x: direction === 'left' ? [0, -100] : [0, 100],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {textArray.map((item, index) => (
          <span key={index} className="mx-8">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ParallaxText({ 
  text, 
  speed = 1,
  className = '' 
}: { 
  text: string; 
  speed?: number;
  className?: string;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`${className}`}
      style={{
        y: scrollY * speed,
      }}
    >
      {text}
    </motion.div>
  );
}
