'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Ankita mam is just amazing and exceptional. Because of her help, I was easily able to pass my listening and writing. Her teaching methods are so effective and personalized.",
    author: "Muskan Patel",
    designation: "Student",
    rating: 5
  },
  {
    quote: "The lessons were well-structured, engaging, and easy to follow, making the process of learning French enjoyable. I achieved CLB 7+ in my TEF exam thanks to the expert guidance.",
    author: "Sultan Thakur",
    designation: "Student",
    rating: 5
  },
  {
    quote: "The personalized approach and attention to detail helped me improve my French significantly. The mock tests and feedback were invaluable for my exam preparation.",
    author: "Priya Sharma",
    designation: "Student",
    rating: 5
  },
  {
    quote: "I was struggling with French pronunciation, but the systematic approach and patient teaching helped me overcome my challenges. Highly recommended!",
    author: "Rajesh Kumar",
    designation: "Student",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our successful students have to say about their experience with Learn French With Anks.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center relative">
            <div className="mb-6">
              {/* Quote Icon */}
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-gray-900 text-lg">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].designation}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Students Taught</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">CLB 7+</div>
            <div className="text-gray-600">Average Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}
