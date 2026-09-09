"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

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
      { threshold: 0.15 }
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
      id="philosophy"
      className="w-full bg-[#fcfaf7] py-16 sm:py-24 lg:py-28 border-b border-[#ebdcd0] select-none"
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Subtle Top Badge */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#7a3f1b]"></span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8c461d]">
            CRAFT STATEMENT
          </span>
        </div>

        {/* Main Headline Statement */}
        <div className="max-w-5xl">
          <h2
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.14] text-neutral-950 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block text-neutral-950">
              Enhance spaces with woodwork.
            </span>
            <span className="block text-neutral-400 font-semibold mt-1">
              Crafting <span className="text-neutral-900 font-bold">timeless interiors with care</span> to elevate every living area.
            </span>
          </h2>
        </div>

        {/* Clean, Organized 2-Column Split */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-[#e2d6c7] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Short Narrative & WhatsApp Link */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Rana Abdullah Woodwork is dedicated to enriching Lahore homes and offices with fine custom woodwork, luxury kitchen cabinetry, and durable repairs — blending master carpentry with lasting beauty.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20discussing%20a%20woodwork%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#7a3f1b] hover:text-[#54270d] group transition-colors cursor-pointer"
              >
                <span>Discuss your custom project with Rana Abdullah</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: 3 Organized Horizontal Metric Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#e2d6c7]/80">
            
            {/* Row 1 */}
            <div className="pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
              <span className="text-xs font-mono font-bold text-[#8c461d] tracking-wider">
                01 / SOLID TIMBER
              </span>
              <div className="max-w-md">
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
                  Kiln-Seasoned Sheesham & Oak
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  Treated against moisture, cracking, and warping for lifetime architectural durability.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
              <span className="text-xs font-mono font-bold text-[#8c461d] tracking-wider">
                02 / BESPOKE JOINERY
              </span>
              <div className="max-w-md">
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
                  0.5mm Precision Fitting & CNC
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  Laser-guided fluted panels, soft-close Blum hardware, and exact on-site room sizing.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
              <span className="text-xs font-mono font-bold text-[#8c461d] tracking-wider">
                03 / MASTER FINISH
              </span>
              <div className="max-w-md">
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
                  Hand-Rubbed Protective Polish
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  Multi-layer Italian polyurethane matte & high-gloss coats preserving natural wood grains.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


