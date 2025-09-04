import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogPreview from './components/BlogPreview';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <CoursesSection />
        <TestimonialsSection />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
