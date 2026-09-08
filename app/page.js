import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import ShowcaseGallery from "./components/ShowcaseGallery";
import StatsCounter from "./components/StatsCounter";
import ServicesSection from "./components/ServicesSection";
import ExpertHandsSection from "./components/ExpertHandsSection";
import VisionSection from "./components/VisionSection";
import VideoSection from "./components/VideoSection";
import FaqSection from "./components/FaqSection";
import TestimonialSection from "./components/TestimonialSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col relative selection:bg-[#7a3f1b] selection:text-white">
      {/* Floating Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy / Statement Section */}
      <PhilosophySection />

      {/* Showcase / Continuous Infinite Gallery Slider */}
      <ShowcaseGallery />

      {/* Stats Counter with Vertical Rolling Digit Animation */}
      <StatsCounter />

      {/* WHAT WE DO / Services Checkerboard Grid */}
      <ServicesSection />

      {/* GUIDED BY EXPERT HANDS / Features with Golden Icons */}
      <ExpertHandsSection />

      {/* CRAFTING WITH VISION / We shape & elevate your space (/a1.jpg) */}
      <VisionSection />

      {/* Cinematic Full-Width Video Showcase (/video.mp4) */}
      <VideoSection />

      {/* FAQ Section (Image on Left, Accordion on Right) */}
      <FaqSection />

      {/* Client Testimonials & Star Reviews */}
      <TestimonialSection />

      {/* Call To Action Banner */}
      <CtaSection />

      {/* Master Brand Footer */}
      <Footer />

      {/* Floating Action Elements (Right Bar, Chat, Scroll To Top) */}
      <FloatingWidgets />
    </main>
  );
}
