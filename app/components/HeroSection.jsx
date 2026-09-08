"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

// Kinetic character-by-character bottom-to-top reveal
function KineticCharacterText({ text, baseDelay = 0, className = "", dotColor = null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      {words.map((word, wIdx) => {
        const chars = word.split("");
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.2em] last:mr-0 overflow-hidden">
            {chars.map((char, cIdx) => {
              const delay = baseDelay + wIdx * 0.08 + cIdx * 0.03;
              const isLastDot = (char === "." && dotColor);

              return (
                <span
                  key={cIdx}
                  className={`inline-block transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isLastDot ? dotColor : ""
                  }`}
                  style={{
                    transform: mounted ? "translateY(0%)" : "translateY(120%)",
                    opacity: mounted ? 1 : 0,
                    transitionDelay: `${delay}s`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full min-h-[660px] sm:min-h-[760px] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#241a14]">
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src="/hero-img.jpg"
            alt="Inspired Woodwork Carpenter"
            className="w-full h-full object-cover object-center brightness-[0.92]"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#5e381e] via-[#331c0e] to-[#120a05] flex items-center justify-center">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          </div>
        )}

        {/* Cinematic Vignette Overlays for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-12 flex-1 flex flex-col justify-between">
        
        {/* Upper Area: Left Side Header (Shaping timber.) */}
        <div className="max-w-2xl select-none pt-4 sm:pt-6">
          {/* Subtitle tag */}
          <div className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            [ INSPIRED WOODWORK ]
          </div>

          {/* Main Title (Left Top) - Kinetic Animated Character Reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[92px] font-bold text-white leading-[1.02] tracking-[-0.025em]">
            <div className="block overflow-hidden">
              <KineticCharacterText text="Shaping" baseDelay={0.1} />
            </div>
            <div className="block overflow-hidden">
              <KineticCharacterText text="timber." baseDelay={0.35} />
            </div>
          </h1>
        </div>

        {/* Lower Area: Right-Bottom Text + Bottom-Left Link */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-10 sm:pt-14 pb-2">
          
          {/* Bottom Left: Explore our story */}
          <div className="order-2 lg:order-1 pb-1">
            <a
              href="#philosophy"
              className="group inline-flex items-center gap-2 text-white/95 hover:text-white text-sm sm:text-[15px] font-medium transition-all duration-200"
            >
              <ArrowDown className="w-4 h-4 stroke-[2] group-hover:translate-y-1 transition-transform" />
              <span>Explore our story</span>
            </a>
          </div>

          {/* Bottom Right: Building Nature. - Kinetic Animated Character Reveal */}
          <div className="order-1 lg:order-2 self-start lg:self-end text-left select-none">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[92px] font-bold text-white leading-[1.02] tracking-[-0.025em]">
              <div className="block overflow-hidden">
                <KineticCharacterText text="Building" baseDelay={0.55} />
              </div>
              <div className="block overflow-hidden">
                <KineticCharacterText text="Nature." baseDelay={0.8} dotColor="text-[#d4a373]" />
              </div>
            </h2>
          </div>

        </div>

      </div>

    </section>
  );
}
