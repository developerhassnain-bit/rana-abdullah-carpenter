"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  TreePine, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Award
} from "lucide-react";

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
      { threshold: 0.12 }
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

  const craftPillars = [
    {
      num: "01",
      tag: "Raw Material",
      title: "Kiln-Seasoned Timber",
      icon: TreePine,
      badge: "100% Solid Wood",
      points: [
        "Pure Sheesham, Walnut & Oak",
        "Termite & moisture treated",
        "No warping or grain splitting"
      ],
      highlight: "from-amber-500/10 to-transparent",
    },
    {
      num: "02",
      tag: "Precision Millwork",
      title: "0.5mm Precision Joinery",
      icon: Compass,
      badge: "CNC & Hand-Fit",
      points: [
        "Laser-cut fluted wall panelling",
        "Blum soft-close drawer tracks",
        "Seamless concealed joinery"
      ],
      highlight: "from-stone-500/10 to-transparent",
    },
    {
      num: "03",
      tag: "Artisan Finishing",
      title: "Hand-Rubbed Polish",
      icon: Sparkles,
      badge: "Italian Lacquer",
      points: [
        "Velvet matte & high-gloss deco",
        "Natural wood grain preservation",
        "Scratch & heat resistant coat"
      ],
      highlight: "from-amber-600/10 to-transparent",
    },
    {
      num: "04",
      tag: "Lahore Delivery",
      title: "Zero-Mess Installation",
      icon: ShieldCheck,
      badge: "Lifetime Durability",
      points: [
        "On-site precision room fitting",
        "Artisan quality inspection",
        "Direct master carpenter support"
      ],
      highlight: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="w-full bg-[#fbf9f6] py-16 sm:py-24 lg:py-28 border-b border-[#ebdcd0] select-none"
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ===================================================================== */}
        {/* TOP HEADER: Badge + Headline + Action Link */}
        {/* ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#ebdcd0]">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7a3f1b]/10 border border-[#7a3f1b]/25 mb-3.5">
              <Award className="w-3.5 h-3.5 text-[#7a3f1b]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#7a3f1b]">
                Craft Philosophy
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-[-0.03em] leading-[1.08] text-neutral-950 uppercase">
              Where Precision Meets <br className="hidden sm:inline" />
              <span className="text-[#7a3f1b]">Architectural Art</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20want%20to%20consult%20about%20a%20custom%20woodwork%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow hover:shadow-lg hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span>Consult Craft Master</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 4 ORGANIZED VISUAL CRAFT PILLARS (Clean Grid, No Heavy Text Blocks) */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {craftPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#f5ede4] hover:bg-[#eee3d5] rounded-2xl p-6 sm:p-7 border border-[#e4d3c1] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-default"
                style={{
                  transform: isInView ? "translateY(0px)" : "translateY(24px)",
                  opacity: isInView ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s`,
                }}
              >
                {/* Background decorative corner number */}
                <span className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-black/5 group-hover:text-[#7a3f1b]/10 transition-colors pointer-events-none font-mono">
                  {pillar.num}
                </span>

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#231710] group-hover:bg-[#7a3f1b] text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a3f1b] bg-[#7a3f1b]/10 border border-[#7a3f1b]/20 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-500 block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4 group-hover:text-[#7a3f1b] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Clean Bullet Points */}
                  <ul className="space-y-2.5 pt-2 border-t border-[#dfcebc]/80">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7a3f1b] flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro Bottom Status */}
                <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-bold text-neutral-500 uppercase tracking-wider border-t border-[#dfcebc]/50">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-[#7a3f1b] group-hover:translate-x-0.5 transition-transform">Guaranteed &rarr;</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* BOTTOM INTERACTIVE TRUST STRIP */}
        {/* ===================================================================== */}
        <div className="mt-8 sm:mt-10 bg-[#231710] text-white rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-900/30 shadow-lg">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#7a3f1b] flex items-center justify-center flex-shrink-0 text-white font-black text-sm">
              RA
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Direct Master Carpenter Guarantee by Rana Abdullah
              </p>
              <p className="text-[11px] sm:text-xs text-neutral-400 font-normal">
                100% Seasoned Hardwoods • No Particle Substandard Wood • Transparent Pricing
              </p>
            </div>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4a373] hover:text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full border border-white/15 transition-all flex-shrink-0"
          >
            <span>Explore Workshop Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}


