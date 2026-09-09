"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  Award,
  Ruler,
  Trees,
  Hammer,
} from "lucide-react";

// Kinetic bottom-to-top character/word reveal component
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
            const charDelay = delay + (wordIdx * 0.08) + (charIdx * 0.025);
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

// 4 Main Service Feature Cards with Rich Imagery & Specifications
const servicesList = [
  {
    id: "furniture-making",
    title: "Bespoke Furniture Making",
    desc: "Custom handcrafted dining tables, solid Sheesham beds, luxury consoles, and living room suites built for generations.",
    badge: "Solid Hardwood",
    img: "/img1.jpg",
    features: [
      "Kiln-seasoned Pakistani Sheesham & Oak",
      "Traditional mortise & tenon joinery",
      "Scratch-resistant Italian PU finish",
      "Custom sizing tailored to your room plan",
    ],
  },
  {
    id: "kitchen-cabinets",
    title: "Modular Kitchen Cabinetry",
    desc: "Modern luxury kitchens built with imported High-Gloss UV, Acrylic, and Lasani boards with Blum soft-close fittings.",
    badge: "Modern Architecture",
    img: "/img3.jpg",
    features: [
      "100% Waterproof & moisture-resistant carcasses",
      "Soft-close channels & pantry organizers",
      "Quartz / Corian countertop integration",
      "Laser-leveled on-site installation in Lahore",
    ],
  },
  {
    id: "door-and-wood-repair",
    title: "Door Fitting & Polish Care",
    desc: "Master restoration, planning swollen doors, luxury lock & handle installations, and flawless lacquer refinishing.",
    badge: "On-Site Care",
    img: "/img5.jpg",
    features: [
      "Weatherproof solid Ash & Teak main doors",
      "On-site swollen door planning & alignment",
      "High-security electronic lock installations",
      "Deco & lacquer polish rejuvenation",
    ],
  },
  {
    id: "custom-wood-work",
    title: "Architectural Millwork & Paneling",
    desc: "Bespoke CNC fluted wall slats, acoustic timber paneling, floating media consoles, and ceiling rafters.",
    badge: "Fine Millwork",
    img: "/img4.jpg",
    features: [
      "Precision CNC fluted wood paneling",
      "Floating TV media walls & backlit consoles",
      "Solid timber ceiling beams & pergolas",
      "Custom 3D CAD design & material sampling",
    ],
  },
];

const marqueeWords = [
  "WOODWORK",
  "CRAFTSMAN",
  "CARPENTRY",
  "ARCHITECTURE",
  "TIMBER",
  "JOINERY",
  "MILLWORK",
  "BESPOKE",
];

export default function ServicesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col relative selection:bg-[#7a3f1b] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SECTION 1: ARCHITECTURAL HERO & EXPERTISE HEADER */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#fbf9f6] pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 border-b border-[#ebdcd0] select-none">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Top Header Row: Bold Headline + Subtitle + Right Pill Button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-black text-neutral-950 tracking-[-0.035em] uppercase leading-[0.98]">
                <AnimatedTextLine text="OUR SERVICES & CRAFT" delay={0.05} />
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 mt-3 sm:mt-4 font-normal tracking-tight">
                Precision Joinery, Custom Kitchen Cabinetry & Solid Hardwood Architectural Work Across Lahore
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                Get Free Estimate
              </a>
            </div>
          </div>

          {/* Center Visual Rounded Card With Floating Glass Bar */}
          <div className="relative w-full rounded-3xl sm:rounded-[36px] lg:rounded-[42px] overflow-hidden aspect-[16/10] sm:aspect-[21/9] min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] mt-8 sm:mt-12 bg-neutral-900 shadow-2xl border border-neutral-200/80 group">
            <img
              src="/img3.jpg"
              alt="Custom Woodwork Kitchen & Joinery Services"
              className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05] transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

            {/* Floating Glassmorphic Pill Bar */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 bg-black/55 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-[26px] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl">
              <div className="space-y-1.5 max-w-3xl">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#d4a373] bg-[#7a3f1b]/30 px-3 py-1 rounded-full border border-[#7a3f1b]/50 inline-block mb-1">
                  4 SPECIALIZED DISCIPLINES
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  From raw solid hardwoods to high-precision UV kitchens & architectural joinery
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Handcrafted furniture making, modular kitchen cabinets, door repairs & bespoke interior millwork in Lahore.
                </p>
              </div>

              <Link
                href="/gallery"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-[#d4a373] text-neutral-950 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-110 flex-shrink-0 cursor-pointer"
                title="View Gallery Projects"
              >
                <ArrowUpRight className="w-6 h-6 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bottom 3 Metric Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-[#efe8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] border border-[#e2d6c7] shadow-sm">
              <div className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
                04
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                CORE CRAFT DISCIPLINES
              </div>
            </div>

            <div className="bg-[#efe8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] border border-[#e2d6c7] shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
                    350+
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                    HOMES & KITCHENS FURNISHED
                  </div>
                </div>
                <span className="border border-neutral-400/80 rounded-full px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-700 bg-white/40">
                  RELIABLE
                </span>
              </div>
            </div>

            <div className="bg-[#231710] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] text-white shadow-xl border border-amber-900/30">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mt-2">
                CUSTOM BESPOKE SIZING
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 4 CREATIVE SERVICE FEATURE CARDS (WITH IMAGE HEADERS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-20 sm:py-28 overflow-hidden select-none">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#8c461d]" />
                <span>CORE SPECIALIZATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-[-0.03em] uppercase">
                What We Build For You
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
              Every piece is measured on-site in Lahore, built with seasoned timber, and finished with precision hand-craftsmanship.
            </p>
          </div>

          {/* 4 Creative Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#e8ded2] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#7a3f1b]/40 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2"
              >
                <div>
                  {/* Top Image Preview with Badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute top-3.5 left-3.5 text-[10px] font-bold uppercase tracking-widest text-white bg-[#7a3f1b] px-3 py-1 rounded-full shadow-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Features Checklist */}
                    <ul className="space-y-2.5 pt-4 border-t border-neutral-100 mb-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8c461d] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={`https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20inquiring%20about%20"${service.title}".%20Please%20share%20an%20estimate.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Request Estimate</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Infinite Text Marquee Banner */}
      <section className="w-full bg-[#1c140f] py-10 sm:py-14 overflow-hidden border-y border-white/10 select-none">
        <div className="w-full overflow-hidden relative">
          <div className="animate-infinite-slider flex items-center whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <div key={i} className="flex items-center">
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-wider text-white uppercase px-6 sm:px-10">
                  {word}
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#8c461d] font-serif select-none">
                  ✱
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 3 CREATIVE ARCHITECTURAL SHOWCASE SECTIONS */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28 lg:py-32 select-none border-b border-[#ebdcd0]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 space-y-20 sm:space-y-28">
          
          {/* Section Main Header */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <Award className="w-3.5 h-3.5 text-[#8c461d]" />
              <span>TIMELESS CRAFTSMANSHIP APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-neutral-950 tracking-[-0.03em] uppercase leading-[1.05]">
              Engineering Spaces With Purpose & Passion
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
              Every bedroom suite, modern kitchen, and architectural paneling project is executed with precision craftsmanship in Lahore.
            </p>
          </div>

          {/* Showcase 1: Left Text, Right Image (/img1.jpg) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-[#faf7f2] border border-[#ebdcd0] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#7a3f1b] text-white font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8c461d]">
                  Bespoke Living
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-neutral-950 leading-[1.12] tracking-tight mb-4">
                Transform your space with Rana Abdullah
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                Rana Abdullah blends artistry and skill to shape unique woodwork, delivering high quality carpentry and cabinetry for lasting beauty across Lahore homes.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white/70 border border-[#e2d6c7] p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Kiln-Seasoned Sheesham
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white/70 border border-[#e2d6c7] p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Mortise & Tenon Joinery
                </span>
              </div>

              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20custom%20furniture%20transformation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow transition-all hover:scale-105 cursor-pointer"
              >
                <span>Discuss Furniture Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md group">
                <img
                  src="/img1.jpg"
                  alt="Timeless Craftsmanship Approach"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Showcase 2: Left Image (/img2.jpg), Right Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-[#faf7f2] border border-[#ebdcd0] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md group">
                <img
                  src="/img2.jpg"
                  alt="Innovative Cabinetry Lasting Impact"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#7a3f1b] text-white font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8c461d]">
                  Modern Kitchens
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-neutral-950 leading-[1.12] tracking-tight mb-4">
                Innovative cabinetry, lasting impact
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                We enhance Lahore living areas with custom woodwork, expert solid wood joinery, and durable finishes that create warmth, prestige, and seamless culinary functionality.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white/70 border border-[#e2d6c7] p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Imported Acrylic / UV
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white/70 border border-[#e2d6c7] p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Blum Soft-Close Hardware
                </span>
              </div>

              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20kitchen%20cabinetry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow transition-all hover:scale-105 cursor-pointer"
              >
                <span>Request Kitchen Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Showcase 3: Left Text, Right Image (/img3.jpg) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-[#faf7f2] border border-[#ebdcd0] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#7a3f1b] text-white font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8c461d]">
                  Architectural Vision
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-neutral-950 leading-[1.12] tracking-tight mb-4">
                Custom excellence with Rana Abdullah
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                Rana Abdullah brings expert carpentry and modern finishes to life across Lahore, uniting master craftsmanship with genuine customer satisfaction and architectural beauty.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white/70 border border-[#e2d6c7] p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  CNC Fluted Wall Paneling
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white/70 border border-[#e2d6c7] p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Solid Wood Door Fittings
                </span>
              </div>

              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20interested%20in%20custom%20architectural%20millwork."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow transition-all hover:scale-105 cursor-pointer"
              >
                <span>Inquire Custom Millwork</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md group">
                <img
                  src="/img3.jpg"
                  alt="Inspired Woodwork Vision"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* DIRECT CONTACT WORKSHOP SECTION (Requested with Brown Theme Buttons) */}
      {/* ========================================================================= */}
      <section id="contact" className="w-full bg-[#faf7f2] py-20 sm:py-28">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Workshop Hours */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-3 block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight mb-6 leading-tight">
                Let&apos;s discuss your woodwork project
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-10">
                Visit our timber workshop, request material samples, or book an on-site architectural consultation with our master woodworkers.
              </p>

              <div className="space-y-6 pt-4 border-t border-[#ded5cb]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7a3f1b]/10 flex items-center justify-center text-[#8c461d] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider">Workshop Location</h4>
                    <p className="text-sm text-neutral-600 mt-0.5">Muhammad Hussain Road, Ameer Chowk Near The Trust School, Green Town, Lahore</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7a3f1b]/10 flex items-center justify-center text-[#8c461d] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider">Call / WhatsApp</h4>
                    <a href="https://wa.me/923261455033" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-800 font-semibold hover:text-[#8c461d] transition-colors mt-0.5 block">
                      0326 1455033
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7a3f1b]/10 flex items-center justify-center text-[#8c461d] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider">Workshop Email</h4>
                    <a href="mailto:ranaabdullahcarpenter@gmail.com" className="text-sm text-neutral-800 font-semibold hover:text-[#8c461d] transition-colors mt-0.5 block">
                      ranaabdullahcarpenter@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7a3f1b]/10 flex items-center justify-center text-[#8c461d] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider">Workshop Hours</h4>
                    <p className="text-sm text-neutral-600 mt-0.5">Mon – Fri: 8:00 AM – 6:00 PM (Sat by appointment)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Consultation Request Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#e8dfd3] p-8 sm:p-12 shadow-sm rounded-none">
                <h3 className="text-2xl font-bold text-neutral-950 mb-2">
                  Request Free Woodwork Estimate
                </h3>
                <p className="text-sm text-neutral-600 mb-8">
                  Fill out the details below and a master craftsman will get in touch within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 p-8 text-center">
                    <div className="w-12 h-12 bg-[#7a3f1b] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-950 mb-2">Thank you!</h4>
                    <p className="text-sm text-neutral-700">
                      Your estimate request has been received. Our master carpentry team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance"
                          className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3 focus:outline-none focus:border-[#7a3f1b] rounded-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3 focus:outline-none focus:border-[#7a3f1b] rounded-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3 focus:outline-none focus:border-[#7a3f1b] rounded-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          required
                          className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3 focus:outline-none focus:border-[#7a3f1b] rounded-none cursor-pointer"
                        >
                          <option value="Furniture Making">Furniture Making</option>
                          <option value="Kitchen Cabinets">Kitchen Cabinets</option>
                          <option value="Door and Wood Repair">Door and Wood Repair</option>
                          <option value="Custom Wood Work">Custom Wood Work</option>
                          <option value="Other Architectural Millwork">Other Architectural Millwork</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Project Details / Dimensions / Wood Preference
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your space, timber preference (White Oak, Walnut, Teak), or specific requirements..."
                        className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3 focus:outline-none focus:border-[#7a3f1b] rounded-none resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-sm tracking-widest uppercase py-4 px-8 flex items-center justify-center gap-3 transition-all duration-300 shadow-md cursor-pointer rounded-none"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Consultation Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action Banner */}
      <CtaSection />

      {/* Master Brand Footer */}
      <Footer />

      {/* Floating Scroll-To-Top Button */}
      <FloatingWidgets />
    </main>
  );
}
