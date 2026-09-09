"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Video,
  Play,
} from "lucide-react";

// Kinetic character/word reveal component
function AnimatedTextLine({ text, delay = 0, className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden pb-1 ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.28em] overflow-hidden">
          {word.split("").map((char, charIdx) => {
            const charDelay = delay + wordIdx * 0.08 + charIdx * 0.025;
            return (
              <span
                key={charIdx}
                className="inline-block transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: mounted ? "translateY(0%)" : "translateY(115%)",
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${charDelay}s`,
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

// 19 Curated Images (img1-img5 .jpg, img6-img19 .jpeg)
const galleryImages = [
  { id: 1, src: "/img1.jpg", alt: "Woodwork Project 1" },
  { id: 2, src: "/img2.jpg", alt: "Woodwork Project 2" },
  { id: 3, src: "/img3.jpg", alt: "Woodwork Project 3" },
  { id: 4, src: "/img4.jpg", alt: "Woodwork Project 4" },
  { id: 5, src: "/img5.jpg", alt: "Woodwork Project 5" },
  { id: 6, src: "/img6.jpeg", alt: "Woodwork Project 6" },
  { id: 7, src: "/img7.jpeg", alt: "Woodwork Project 7" },
  { id: 8, src: "/img8.jpeg", alt: "Woodwork Project 8" },
  { id: 9, src: "/img9.jpeg", alt: "Woodwork Project 9" },
  { id: 10, src: "/img10.jpeg", alt: "Woodwork Project 10" },
  { id: 11, src: "/img11.jpeg", alt: "Woodwork Project 11" },
  { id: 12, src: "/img12.jpeg", alt: "Woodwork Project 12" },
  { id: 13, src: "/img13.jpeg", alt: "Woodwork Project 13" },
  { id: 14, src: "/img14.jpeg", alt: "Woodwork Project 14" },
  { id: 15, src: "/img15.jpeg", alt: "Woodwork Project 15" },
  { id: 16, src: "/img16.jpeg", alt: "Woodwork Project 16" },
  { id: 17, src: "/img17.jpeg", alt: "Woodwork Project 17" },
  { id: 18, src: "/img18.jpeg", alt: "Woodwork Project 18" },
  { id: 19, src: "/img19.jpeg", alt: "Woodwork Project 19" },
];

// 4 Workshop & Site Footage Videos (/v1.mov to /v4.mov)
const galleryVideos = [
  { id: 1, src: "/v1.mov", title: "Workshop Wood Crafting & Polish in Progress", tag: "Workshop Live" },
  { id: 2, src: "/v2.mov", title: "Custom Furniture Fitting & Joinery", tag: "Timber Fitting" },
  { id: 3, src: "/v3.mov", title: "Solid Sheesham & Surface Polishing Work", tag: "Hand Finish" },
  { id: 4, src: "/v4.mov", title: "Site Installation & Architectural Walkthrough", tag: "Site Installation" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleInquireOnWhatsApp = (img) => {
    const message = `Assalam o Alaikum Rana Abdullah Sahib,%0A%0AMaine aap ki website gallery me Project #${img.id} (${img.src}) dekha hai.%0A%0AMujhe is tarah ke woodwork ka estimate chahiyen. Shukriya!`;
    window.open(`https://wa.me/923261455033?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white flex flex-col relative selection:bg-[#7a3f1b] selection:text-white">
      {/* Smart Sticky Top Navigation */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SECTION 1: KINETIC HERO HEADER */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#fdfbf9] pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 border-b border-[#eee7de] overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#8c461d]" />
            <span>PORTFOLIO & WORKSHOP ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Main Headline */}
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-neutral-950 tracking-[-0.025em] leading-[1.08] select-none mb-6">
                <span className="block">
                  <AnimatedTextLine text="Curated timber craft & installations." delay={0.1} />
                </span>
                <span className="block text-neutral-400">
                  <AnimatedTextLine text="Showcasing 15+ years across Lahore" delay={0.35} />{" "}
                  <span className="text-[#8c461d] inline-block">
                    <AnimatedTextLine text="by Rana Abdullah." delay={0.6} />
                  </span>
                </span>
              </h1>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore our visual gallery of custom kitchens, solid Sheesham beds, bespoke wardrobes, door fittings, and architectural timber works across Lahore.
              </p>
            </div>

            {/* Right Action Quick Banner */}
            <div className="lg:col-span-4 bg-[#faf8f5] border border-[#ece4d9] p-6 sm:p-7 flex flex-col justify-between rounded-none shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8c461d] block mb-2">
                  Custom Orders Available
                </span>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">
                  Want a Custom Design Made?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  Send us any reference photo or sketch on WhatsApp to get instant sizing and price estimation.
                </p>
              </div>

              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20have%20a%20custom%20woodwork%20design%20reference%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs uppercase tracking-wider py-3 px-5 flex items-center justify-center gap-2 transition-colors rounded-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Reference Photo (0326 1455033)</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 19 PURE IMAGES GALLERY GRID */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-neutral-100">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* 3x3 Pure Image Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-[#e8ded2] shadow-sm hover:shadow-2xl transition-all duration-500 rounded-none cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Ambient Dark Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-13 h-13 bg-[#7a3f1b] text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 4 WORKSHOP & SITE VIDEOS */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-16 sm:py-24 border-b border-[#ebdcd0]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <Video className="w-3.5 h-3.5 text-[#8c461d]" />
                <span>WORKSHOP & SITE FOOTAGE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-[-0.025em]">
                Live Crafting & Installation Videos
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
              Watch authentic workshop footage of our master craftsmen shaping solid Sheesham, fine hand-polishing, and on-site furniture fittings.
            </p>
          </div>

          {/* 4 Videos Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-[#e8ded2] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group"
              >
                {/* Video Player Container */}
                <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                    <source src={video.src} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Info & WhatsApp Inquire */}
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4 bg-white border-t border-[#f0e6dc]">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#8c461d] bg-[#7a3f1b]/10 px-2.5 py-0.5 inline-block">
                      {video.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                      {video.title}
                    </h3>
                  </div>

                  <a
                    href={`https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20Maine%20aap%20ki%20website%20gallery%20me%20Video%20${video.id}%20(${video.src})%20dekhi%20hai.%20Mujhe%20is%20ke%20barey%20me%20inquire%20karna%20hai.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-[#7a3f1b] hover:bg-[#623113] text-white p-3.5 transition-colors shadow-md flex items-center justify-center gap-2 group-hover:scale-105 transform duration-300"
                    title="Inquire about this work on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-black/60 hover:bg-[#7a3f1b] p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-black/60 hover:bg-[#7a3f1b] p-3.5 rounded-full transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-black/60 hover:bg-[#7a3f1b] p-3.5 rounded-full transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain border border-white/15 shadow-2xl"
            />

            {/* Bottom Actions Bar */}
            <div className="mt-5 flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleInquireOnWhatsApp(selectedImage)}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-6 flex items-center gap-2 transition-colors rounded-none shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Inquire This on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 px-5 transition-colors rounded-none cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Master Luxury CTA Section */}
      <CtaSection />

      {/* Master Brand Footer */}
      <Footer />

      {/* Floating Scroll-To-Top Button */}
      <FloatingWidgets />
    </main>
  );
}
