"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function VisionSection() {
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Stacked Timber Logs Image with Smooth Fade/Scale */}
          <div
            className="lg:col-span-6 transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isInView ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.97)",
              opacity: isInView ? 1 : 0,
            }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] w-full overflow-hidden bg-neutral-100 shadow-sm group">
              {!imageError ? (
                <img
                  src="/a1.jpg"
                  alt="Crafting with Vision - Raw Timber"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#734320] via-[#4d2a13] to-[#251206] p-8 flex flex-col justify-between text-white relative">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-black/40 rounded w-fit relative z-10">
                    Sustainable Timber
                  </span>
                  <div className="relative z-10">
                    <p className="text-sm font-semibold mb-1">Raw Timber Woodwork</p>
                    <p className="text-xs text-amber-200">
                      Place <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-300 font-mono">/a1.jpg</code> in public/
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Vision & Craftsmanship Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-2xl">
            
            {/* Top Subtitle */}
            <div className="overflow-hidden pb-1">
              <span
                className="block text-xs sm:text-sm font-bold tracking-[0.2em] text-neutral-800 uppercase mb-4 sm:mb-5 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0%)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.15s",
                }}
              >
                CRAFTING WITH VISION
              </span>
            </div>

            {/* Main Title Animated Line-by-Line */}
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-neutral-950 leading-[1.1] tracking-tight mb-6 sm:mb-8">
              <div className="overflow-hidden pb-1">
                <span
                  className="block transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isInView ? "translateY(0%)" : "translateY(110%)",
                    opacity: isInView ? 1 : 0,
                    transitionDelay: "0.25s",
                  }}
                >
                  We shape &
                </span>
              </div>
              <div className="overflow-hidden pb-1">
                <span
                  className="block transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isInView ? "translateY(0%)" : "translateY(110%)",
                    opacity: isInView ? 1 : 0,
                    transitionDelay: "0.38s",
                  }}
                >
                  elevate your space
                </span>
              </div>
            </h2>

            {/* Top Paragraph */}
            <div
              className="transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(25px)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.5s",
              }}
            >
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal mb-8 sm:mb-10">
                Transforming Lahore homes and spaces with expert woodwork, fine bespoke furniture, and a promise of timeless beauty and enduring quality for every project we touch.
              </p>
            </div>

            {/* Callout Link */}
            <div
              className="mb-14 sm:mb-16 transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.62s",
              }}
            >
              <Link
                href="#contact"
                className="inline-block text-xs sm:text-sm font-extrabold tracking-wider uppercase text-neutral-900 hover:text-[#8c461d] transition-colors border-b-2 border-neutral-900 hover:border-[#8c461d] pb-1"
              >
                LET&apos;S BUILD SOMETHING LASTING!
              </Link>
            </div>

            {/* Bottom Sub-Feature: Boundless craftsmanship */}
            <div
              className="pt-6 sm:pt-8 border-t border-neutral-100 transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(25px)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.75s",
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
                Boundless craftsmanship
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                From first sketch to flawless finish, our team brings skill, care, and quality wood seasoning methods to every detail, making every room exceptional.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
