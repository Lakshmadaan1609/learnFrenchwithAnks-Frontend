'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const courses = [
  {
    id: 1,
    title: "TEF/TCF Exam Preparation",
    level: "All Levels",
    duration: "8-12 weeks",
    price: "₹15,000",
    description: "Comprehensive preparation for all modules of TEF and TCF exams to help you achieve CLB 7+ scores.",
    modules: [
      "Listening Comprehension (Compréhension orale)",
      "Reading Comprehension (Compréhension écrite)", 
      "Writing Expression (Expression écrite)",
      "Speaking Expression (Expression orale)"
    ],
    features: [
      "Mock tests and practice sessions",
      "Personalized feedback and improvement plans",
      "Exam strategies and time management",
      "CLB 7+ score guarantee",
      "Small batch sizes (max 8 students)",
      "Flexible scheduling options"
    ],
    isExpanded: false
  },
  {
    id: 2,
    title: "French for Beginners (A1-A2)",
    level: "Beginner",
    duration: "12-16 weeks",
    price: "₹12,000",
    description: "Build a strong foundation in French with our beginner-friendly courses designed for absolute beginners.",
    modules: [
      "Basic French grammar and vocabulary",
      "Pronunciation and phonetics",
      "Essential conversation skills",
      "Introduction to French culture"
    ],
    features: [
      "Interactive learning sessions",
      "Audio-visual learning materials",
      "Cultural insights and context",
      "Progress tracking and assessments",
      "Beginner-friendly teaching methods",
      "Certificate of completion"
    ],
    isExpanded: false
  },
  {
    id: 3,
    title: "Intermediate & Advanced (B1-B2)",
    level: "Intermediate/Advanced",
    duration: "10-14 weeks",
    price: "₹18,000",
    description: "Advance your French skills to achieve fluency and confidence in professional and academic settings.",
    modules: [
      "Advanced grammar and syntax",
      "Business French communication",
      "Academic writing skills",
      "Complex conversation topics"
    ],
    features: [
      "Advanced conversation practice",
      "Business French terminology",
      "Academic writing techniques",
      "Fluency development exercises",
      "Professional communication skills",
      "Advanced certification preparation"
    ],
    isExpanded: false
  }
];

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleCourse = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-blue-900 max-w-3xl mx-auto">
              Choose the perfect French course to achieve your Canada PR goals
            </p>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Detailed Course Information
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each course is designed with your success in mind, featuring comprehensive curriculum, 
                expert instruction, and proven methodologies.
              </p>
            </div>

            <div className="space-y-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="bg-blue-100 text-primary px-3 py-1 rounded-full">
                            {course.level}
                          </span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {course.duration}
                          </span>
                          <span className="bg-accent text-white px-3 py-1 rounded-full font-semibold">
                            {course.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCourse(course.id)}
                        className="mt-4 lg:mt-0 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {expandedCourse === course.id ? 'Show Less' : 'View Details'}
                      </button>
                    </div>

                    {expandedCourse === course.id && (
                      <div className="border-t pt-6 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Modules</h4>
                            <ul className="space-y-2">
                              {course.modules.map((module, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-gray-600">{module}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Features</h4>
                            <ul className="space-y-2">
                              {course.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                  </svg>
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href="/consult-now"
                              className="flex-1 bg-accent text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-red-500 transition-colors"
                            >
                              Book Free Consultation
                            </a>
                            <a
                              href="/contact"
                              className="flex-1 bg-primary text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                              Enroll Now
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Courses?
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from certified French language experts with years of experience in TEF/TCF preparation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Our students consistently achieve CLB 7+ scores with a 95% success rate in TEF/TCF exams.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Learning</h3>
                <p className="text-gray-600">
                  Choose from various schedules and learning formats that fit your lifestyle and commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your French Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a free consultation today and let us help you choose the perfect course for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consult-now"
                className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500 transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
