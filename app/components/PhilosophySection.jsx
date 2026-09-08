"use client";

import React, { useState, useEffect, useRef } from "react";

export default function PhilosophySection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main Headline Statement - Animated line by line from bottom to top */}
        <div className="max-w-5xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-bold tracking-[-0.025em] leading-[1.18] select-none">
            
            {/* Line 1 */}
            <div className="overflow-hidden pb-1">
              <span
                className="block text-neutral-900 transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0%)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.1s",
                }}
              >
                Enhance spaces with woodwork.
              </span>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden pb-1">
              <span
                className="block transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0%)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.25s",
                }}
              >
                <span className="text-[#9ca3af] font-semibold">
                  Crafting timeless interiors with care{" "}
                </span>
                <span className="text-neutral-900 font-bold">to</span>
              </span>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden pb-1">
              <span
                className="block text-neutral-900 transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0%)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.4s",
                }}
              >
                elevate every living area
              </span>
            </div>

          </h2>
        </div>

        {/* Sub-text paragraph (Offset to the right with smooth upward fade) */}
        <div className="mt-10 sm:mt-14 lg:mt-16 flex justify-end">
          <div
            className="max-w-md lg:max-w-lg transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transitionDelay: "0.55s",
            }}
          >
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed font-normal">
              Rana Abdullah Woodwork is dedicated to enriching Lahore homes and offices with fine custom woodwork, kitchen cabinets, and durable repairs, blending master carpentry with lasting beauty.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
