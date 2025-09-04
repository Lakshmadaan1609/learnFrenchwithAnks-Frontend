import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips to Achieve CLB 7+ in TEF Exam",
    excerpt: "Discover the proven strategies and techniques that have helped hundreds of students achieve their target CLB 7+ scores in the TEF exam.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Exam Tips",
    author: "Ankita Agrawal"
  },
  {
    id: 2,
    title: "Understanding the CRS Score System for Canada PR",
    excerpt: "Learn how French language proficiency can significantly boost your Comprehensive Ranking System (CRS) score for Canadian immigration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Immigration",
    author: "Ankita Agrawal"
  },
  {
    id: 3,
    title: "French Pronunciation Guide for Beginners",
    excerpt: "Master the fundamentals of French pronunciation with our comprehensive guide designed specifically for English speakers.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Learning Tips",
    author: "Kanika Saxena"
  },
  {
    id: 4,
    title: "TCF vs TEF: Which Exam Should You Choose?",
    excerpt: "A comprehensive comparison of TCF and TEF exams to help you make the right choice for your Canada PR application.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Exam Tips",
    author: "Ankita Agrawal"
  },
  {
    id: 5,
    title: "Common French Grammar Mistakes to Avoid",
    excerpt: "Learn about the most common French grammar mistakes that students make and how to avoid them in your exams.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Learning Tips",
    author: "Kanika Saxena"
  },
  {
    id: 6,
    title: "How to Prepare for TEF Speaking Test",
    excerpt: "Expert tips and strategies to help you excel in the TEF speaking test and achieve your target CLB score.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "November 15, 2024",
    readTime: "7 min read",
    category: "Exam Tips",
    author: "Kanika Saxena"
  }
];

const categories = ["All", "Exam Tips", "Learning Tips", "Immigration"];
const recentPosts = blogPosts.slice(0, 3);

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-blue-900 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you succeed in your French learning journey
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {post.date}
                          <span className="mx-2">•</span>
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {post.readTime}
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            By {post.author}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors"
                          >
                            Read More
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex space-x-2">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
                      1
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                      2
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                      3
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                      Next
                    </button>
                  </nav>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <a
                            href="#"
                            className={`block py-2 px-3 rounded-lg transition-colors ${
                              category === 'All' 
                                ? 'bg-primary text-white' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Posts */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <div key={post.id} className="flex space-x-3">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {post.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-primary text-white rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      Subscribe to our newsletter for the latest French learning tips and exam strategies.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button
                        type="submit"
                        className="w-full bg-accent text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-500 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Ready to start your French learning journey? Book a free consultation with our experts.
                    </p>
                    <a
                      href="/consult-now"
                      className="block w-full bg-primary text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
