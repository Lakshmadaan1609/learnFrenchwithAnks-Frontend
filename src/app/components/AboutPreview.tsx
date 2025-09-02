'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

export default function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 500, suffix: '+', label: 'Students Taught' },
    { value: 95, suffix: '%', label: 'Success Rate' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 7, suffix: '+', label: 'CLB Score' },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Parallax Elements */}
      <Parallax speed={-5} className="absolute top-10 left-10 opacity-10">
        <div className="text-8xl font-bold text-primary">FR</div>
      </Parallax>
      <Parallax speed={5} className="absolute bottom-10 right-10 opacity-10">
        <div className="text-8xl font-bold text-primary">EN</div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Who We Are
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Image with Parallax */}
          <Parallax speed={-10} className="order-2 lg:order-1">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Ankita Agrawal - Founder of Learn French With Anks"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl hover-lift"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-accent text-white p-4 rounded-lg shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Students Taught</div>
              </motion.div>
            </motion.div>
          </Parallax>

          {/* Content with Staggered Animation */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Meet Ankita Agrawal
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Welcome to <strong>Learn French With Anks</strong>, where your journey to mastering French for Canada PR begins! 
              Founded by Ankita Agrawal, our institute has been transforming lives through expert French language coaching.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              With over <strong>5 years of experience</strong> and a passion for helping students achieve their immigration goals, 
              we've successfully guided <strong>500+ students</strong> to achieve CLB 7+ scores in TEF and TCF exams. 
              Our personalized approach and proven methodology have helped countless students boost their CRS scores and realize their Canadian dream.
            </motion.p>
            
            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-gradient-secondary rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about-us"
                className="inline-flex items-center bg-gradient-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
