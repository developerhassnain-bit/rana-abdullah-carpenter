"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ExpertHandsSection() {
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

  const features = [
    {
      title: "Tailored woodwork",
      desc: "We create tailored wood and flooring for your style.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#d4974f]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="20" strokeDasharray="3 3" />
          <path d="M24 10C31.7 10 38 16.3 38 24C38 31.7 31.7 38 24 38C16.3 38 10 31.7 10 24" />
          <path d="M24 16C28.4 16 32 19.6 32 24C32 28.4 28.4 32 24 32C19.6 32 16 28.4 16 24" />
          <circle cx="24" cy="24" r="3" fill="#d4974f" />
        </svg>
      ),
    },
    {
      title: "Expert floor care",
      desc: "Our team revives and installs floors to suit you.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#d4974f]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6L6 20V42H42V20L24 6Z" />
          <path d="M16 26H32V42H16V26Z" />
          <line x1="24" y1="6" x2="24" y2="42" />
          <line x1="6" y1="20" x2="42" y2="20" />
        </svg>
      ),
    },
    {
      title: "Bespoke carpentry",
      desc: "We deliver custom pieces and restore wood surfaces daily.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#d4974f]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 8V40H40V32H16V8H8Z" />
          <line x1="12" y1="14" x2="16" y2="14" />
          <line x1="12" y1="20" x2="16" y2="20" />
          <line x1="12" y1="26" x2="16" y2="26" />
          <line x1="22" y1="36" x2="22" y2="40" />
          <line x1="28" y1="36" x2="28" y2="40" />
          <line x1="34" y1="36" x2="34" y2="40" />
          <path d="M20 12L38 30" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      title: "Skilled installations",
      desc: "We fit and finish wood floors with precise, skilled care.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#d4974f]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="14" strokeDasharray="4 2" />
          <path d="M24 10L27 15L33 13L32 19L38 21L34 26L38 30L32 32L33 38L27 36L24 41L21 36L15 38L16 32L10 30L14 26L10 21L16 19L15 13L21 15L24 10Z" />
          <circle cx="24" cy="24" r="4" fill="#d4974f" />
          <path d="M6 42H42" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#272222] border-t border-white/10 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top Header Grid with Smooth Staggered Rise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start mb-16 sm:mb-24">
          
          {/* Left Title */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden pb-1">
              <span
                className="block text-xs sm:text-sm font-bold tracking-[0.2em] text-white/70 uppercase mb-4 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0%)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.1s",
                }}
              >
                GUIDED BY EXPERT HANDS
              </span>
            </div>

            <div className="overflow-hidden">
              <h2
                className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0%)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.22s",
                }}
              >
                Crafting spaces with skill and care
              </h2>
            </div>
          </div>

          {/* Right Narrative Paragraphs with Fade-Up */}
          <div
            className="lg:col-span-6 space-y-4 text-white/75 text-sm sm:text-base leading-relaxed font-normal transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transitionDelay: "0.35s",
            }}
          >
            <p>
              At Rana Abdullah Carpentry, our passion is precision woodwork, custom kitchen cabinetry, and premium wood restoration across Lahore. Every project is shaped by skilled artisans who blend traditional Pakistani carpentry with modern designs.
            </p>
            <p>
              By utilizing top-grade local and imported woods like Sheesham, Walnut, and Deodar, we bring timeless elegance and strength to your home or workplace.
            </p>
          </div>

        </div>

        {/* Bottom 4 Feature Columns with Staggered Fade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pt-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start group"
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(35px)",
                opacity: isInView ? 1 : 0,
                transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${0.45 + idx * 0.1}s, opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${0.45 + idx * 0.1}s`,
              }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                {feat.title}
              </h3>
              <p className="text-white/65 text-sm sm:text-[15px] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
