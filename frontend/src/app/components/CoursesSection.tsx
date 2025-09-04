'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

const courses = [
  {
    title: "TEF/TCF Exam Preparation",
    description: "Specialized coaching for all modules of the TEF and TCF exams to help you achieve CLB 7+ scores.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    features: ["All 4 modules covered", "Mock tests & practice", "Personalized feedback", "CLB 7+ guarantee"]
  },
  {
    title: "French for Beginners (A1-A2)",
    description: "Build a strong foundation in French with our beginner-friendly courses designed for absolute beginners.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ["Basic grammar & vocabulary", "Pronunciation training", "Interactive sessions", "Cultural insights"]
  },
  {
    title: "Intermediate & Advanced (B1-B2)",
    description: "Advance your French skills to achieve fluency and confidence.",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Advanced conversation", "Business French", "Academic writing", "Fluency development"]
  }
];

export default function CoursesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none"></div>
      
      {/* Background Parallax Elements */}
      <Parallax speed={-3} className="absolute top-20 left-10 opacity-5">
        <div className="text-6xl font-bold text-primary">COURSES</div>
      </Parallax>
      <Parallax speed={3} className="absolute bottom-20 right-10 opacity-5">
        <div className="text-6xl font-bold text-primary">FRENCH</div>
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
            Our Courses
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose from our comprehensive range of French language courses designed to help you achieve your goals, 
            whether it&apos;s passing TEF/TCF exams or building fluency for your Canada PR journey.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/courses"
                className="block w-full text-center bg-gradient-accent text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/courses"
              className="inline-flex items-center bg-gradient-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              View All Courses
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
