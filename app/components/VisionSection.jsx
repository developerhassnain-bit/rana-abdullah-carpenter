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
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-neutral-950 leading-[1.08] tracking-tight mb-4 sm:mb-6 uppercase">
              We Shape &amp; <br />
              <span className="text-[#7a3f1b]">Elevate Your Space</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
              Transforming Lahore residences with precision architectural carpentry, bespoke bedroom suites, and luxury modular kitchen millwork.
            </p>

            {/* 2 Organized Visual Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="bg-[#fcfaf7] border border-[#ebdcd0] p-4 rounded-xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#7a3f1b]/10 text-[#7a3f1b] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-950">Pure Solid Sheesham</h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Kiln-seasoned against weather &amp; moisture</p>
                </div>
              </div>

              <div className="bg-[#fcfaf7] border border-[#ebdcd0] p-4 rounded-xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#7a3f1b]/10 text-[#7a3f1b] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-950">Architectural Joinery</h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Laser precision &amp; concealed hardware</p>
                </div>
              </div>
            </div>

            {/* CTA & WhatsApp Button */}
            <div className="flex items-center gap-3.5 flex-wrap">
              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20your%20woodwork%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow hover:shadow-md cursor-pointer"
              >
                <span>Let&apos;s Build Something Lasting</span>
                <span className="text-amber-400">&rarr;</span>
              </a>
              <Link
                href="/gallery"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 hover:text-[#7a3f1b] px-4 py-3.5 transition-colors"
              >
                View Portfolio
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
