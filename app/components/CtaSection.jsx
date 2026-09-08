"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, TreePine, Sparkles } from "lucide-react";

export default function CtaSection() {
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
      id="contact"
      className="w-full bg-white py-10 sm:py-14 lg:py-16 relative overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Redesigned Luxury Timber Banner Card with Smooth Scale/Fade Reveal */}
        <div
          className="relative overflow-hidden bg-gradient-to-br from-[#2a1b13] via-[#1d120d] to-[#120a06] border border-[#3d271c] shadow-2xl p-8 sm:p-14 lg:p-20 transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isInView ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.98)",
            opacity: isInView ? 1 : 0,
          }}
        >
          
          {/* Subtle ambient lighting & pattern accents */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7a3f1b]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#5c2f13]/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Area (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="overflow-hidden pb-1">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/30 border border-[#7a3f1b]/50 text-[#e6ccb2] text-xs font-bold tracking-[0.2em] uppercase mb-6 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isInView ? "translateY(0%)" : "translateY(110%)",
                    opacity: isInView ? 1 : 0,
                    transitionDelay: "0.15s",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4a373]" />
                  <span>START YOUR BESPOKE TIMBER PROJECT</span>
                </div>
              </div>

              <div className="overflow-hidden mb-6">
                <h2
                  className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.12] tracking-tight transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isInView ? "translateY(0%)" : "translateY(110%)",
                    opacity: isInView ? 1 : 0,
                    transitionDelay: "0.25s",
                  }}
                >
                  Ready to craft timeless spaces with master woodwork?
                </h2>
              </div>

              <p
                className="text-[#ddcfc6] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0px)" : "translateY(25px)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.38s",
                }}
              >
                Whether you need custom modular kitchens, solid Sheesham furniture, or professional door & lock repairs in Lahore, Rana Abdullah brings master carpentry to every cut.
              </p>

              {/* Trust Badges */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 w-full transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0px)" : "translateY(25px)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.5s",
                }}
              >
                <div className="flex items-center gap-3">
                  <TreePine className="w-5 h-5 text-[#d4a373] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium">100% Solid Timbers</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d4a373] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium">10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#d4a373] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium">Custom Design Sizing</span>
                </div>
              </div>

            </div>

            {/* Right Action Box (5 Columns) */}
            <div
              className="lg:col-span-5 w-full flex flex-col justify-center transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(35px)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.45s",
              }}
            >
              <div className="bg-[#180e09]/90 border border-white/10 p-8 sm:p-10 shadow-xl backdrop-blur-sm flex flex-col gap-5">
                
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#d4a373] font-bold block mb-1">
                    Direct Consultation
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Request an On-Site Estimate
                  </h3>
                </div>

                <div className="flex flex-col gap-3.5">
                  <a
                    href="https://wa.me/923261455033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-sm sm:text-base py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 group shadow-lg cursor-pointer"
                  >
                    <span>WhatsApp Rana Abdullah</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>

                  <a
                    href="tel:+923261455033"
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm sm:text-base py-3.5 px-6 flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#d4a373]" />
                    <span>0326 1455033</span>
                  </a>
                </div>

                <p className="text-[12px] text-center text-neutral-400">
                  Green Town, Lahore • Fast On-Site Visit Available
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
