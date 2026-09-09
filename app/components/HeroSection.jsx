"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

// Kinetic bottom-to-top character/word reveal component
function AnimatedHeading({ text, delay = 0, className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden pb-1 ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden">
          {word.split("").map((char, charIdx) => {
            const charDelay = delay + (wordIdx * 0.06) + (charIdx * 0.018);
            return (
              <span
                key={charIdx}
                className="inline-block transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: mounted ? "translateY(0%)" : "translateY(120%)",
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

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full bg-[#fbf9f6] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[#ebdcd0] select-none">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ===================================================================== */}
        {/* 1. TOP HEADER ROW: Animated Headline + Subtitle + Right Pill Button */}
        {/* ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-neutral-950 tracking-[-0.035em] uppercase leading-[0.98]">
              <AnimatedHeading text="YOUR VISION, OUR CRAFT" delay={0.05} />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 mt-3 sm:mt-4 font-normal tracking-tight">
              Exceeding Standards In Custom Architectural Woodwork & Timber Joinery
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20your%20woodwork%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              Learn More
            </a>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 2. CENTER ROUNDED VISUAL CARD WITH FLOATING GLASS BAR */}
        {/* ===================================================================== */}
        <div className="relative w-full rounded-3xl sm:rounded-[36px] lg:rounded-[42px] overflow-hidden aspect-[16/10] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] mt-8 sm:mt-12 bg-neutral-900 shadow-2xl border border-neutral-200/80 group">
          
          {/* Background Video / Image */}
          <div className="absolute inset-0 z-0">
            {!hasVideoError ? (
              <video
                ref={videoRef}
                src="/video.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onError={() => setHasVideoError(true)}
                className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
              />
            ) : (
              <img
                src="/hero-img.jpg"
                alt="Inspired Woodwork Joinery"
                className="w-full h-full object-cover object-center brightness-[0.85]"
              />
            )}

            {/* Dark Vignette Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />
          </div>

          {/* Video Control Buttons (Top-Right of card) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="p-3 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 cursor-pointer shadow-lg"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="p-3 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 cursor-pointer shadow-lg"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4a373]" />}
            </button>
          </div>

          {/* Floating Glassmorphic Pill Bar at Bottom of Visual Card */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 bg-black/50 hover:bg-black/60 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-[26px] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all duration-300 shadow-2xl">
            
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#d4a373] bg-[#7a3f1b]/30 px-3 py-1 rounded-full border border-[#7a3f1b]/50 inline-block mb-1">
                MASTER JOINERY
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                <AnimatedHeading text="Leaders in bespoke timber joinery & luxury interiors" delay={0.25} />
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Our services: Custom solid Sheesham beds, luxury acrylic kitchens, fluted wall cladding & CNC architectural door fittings.
              </p>
            </div>

            {/* Circular Arrow Button */}
            <Link
              href="/gallery"
              aria-label="Explore Gallery"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-[#d4a373] text-neutral-950 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-110 flex-shrink-0 cursor-pointer"
            >
              <ArrowUpRight className="w-6 h-6 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

          </div>

        </div>

        {/* ===================================================================== */}
        {/* 3. BOTTOM 3 METRIC CARDS ROW */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          
          {/* CARD 1 */}
          <Link
            href="/gallery"
            className="bg-[#efe8df] hover:bg-[#e8dec7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] transition-all duration-300 border border-[#e2d6c7] shadow-sm relative group cursor-pointer hover:shadow-md hover:scale-[1.01]"
          >
            <div>
              <div className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
                19
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                TOTAL GALLERY PROJECTS
              </div>
            </div>

            <div className="absolute bottom-6 right-6 w-9 h-9 bg-[#231710] group-hover:bg-[#7a3f1b] text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link>

          {/* CARD 2 */}
          <div className="bg-[#efe8df] hover:bg-[#e8dec7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] transition-all duration-300 border border-[#e2d6c7] shadow-sm relative hover:shadow-md hover:scale-[1.01]">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
                  350+
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                  HOMES FURNISHED IN LAHORE
                </div>
              </div>

              <span className="border border-neutral-400/80 rounded-full px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-700 bg-white/40">
                RELIABLE
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#231710] hover:bg-[#1a110b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] transition-all duration-300 text-white shadow-xl relative border border-amber-900/30 hover:scale-[1.01]">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mt-2">
                SOLID SEASONED TIMBER
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
