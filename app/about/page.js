"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import {
  Sparkles,
  TreePine,
  ShieldCheck,
  Check,
  ArrowRight,
  ArrowUpRight,
  Award,
  Compass,
  Hammer,
  Clock,
  Layers,
  MapPin,
  Phone,
  Ruler,
  Wrench,
  Armchair,
  Home,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

// Kinetic character/word reveal component
function AnimatedTextLine({ text, delay = 0, className = "" }) {
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
            const charDelay = delay + wordIdx * 0.06 + charIdx * 0.018;
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

// Section 2: Specialty Craft Pillars
const specialties = [
  {
    title: "Modular Kitchens & Wardrobes",
    desc: "Engineered with imported High-Gloss UV, Acrylic, and Lasani boards. Soft-close Blum channels and custom internal cutlery & pantry organizers.",
    img: "/img3.jpg",
    tag: "MODERN INTERIORS",
    badge: "High-Gloss UV & Acrylic",
    points: [
      "100% Moisture & water resistant carcasses",
      "Soft-close channels & pantry pull-outs",
      "Laser-leveled fitting in Lahore",
    ],
  },
  {
    title: "Solid Sheesham & Teak Furniture",
    desc: "Heirloom dining tables, luxury double beds, and living room seating handcrafted from pure solid seasoned hardwood slabs.",
    img: "/img1.jpg",
    tag: "SOLID TIMBER",
    badge: "100% Seasoned Hardwood",
    points: [
      "Kiln-seasoned Pakistani Sheesham",
      "Traditional mortise & tenon joinery",
      "Hand-rubbed natural oil & PU finish",
    ],
  },
  {
    title: "Door Fitting & Polish Restoration",
    desc: "On-site swollen door planning, lock/handle replacements, and flawless deco & lacquer polish refinishing across Lahore.",
    img: "/img5.jpg",
    tag: "ON-SITE CARE",
    badge: "Master Restoration",
    points: [
      "Door realignment & seasonal adjustment",
      "Smart biometric & luxury lock fitting",
      "High-gloss deco & matte lacquer polish",
    ],
  },
];

// Section 3: 4-Step Process
const workflow = [
  {
    step: "01",
    title: "Free On-Site Visit",
    desc: "We visit your home in Lahore, take precise laser measurements, and discuss your custom woodwork vision & budget.",
    icon: <Ruler className="w-5 h-5 text-[#8c461d]" />,
  },
  {
    step: "02",
    title: "Timber & Sheet Selection",
    desc: "Choose from authentic Sheesham, Walnut, Deodar, or imported High-Gloss UV & Acrylic color swatches.",
    icon: <Layers className="w-5 h-5 text-[#8c461d]" />,
  },
  {
    step: "03",
    title: "Precision Workshop Joinery",
    desc: "Master carpentry cutting, seamless mortise & tenon joinery, and computerized edge-banding in our Lahore workshop.",
    icon: <Hammer className="w-5 h-5 text-[#8c461d]" />,
  },
  {
    step: "04",
    title: "Neat Installation & Polish",
    desc: "Professional on-site installation by our team with zero mess, followed by rich lacquer/deco polish protection.",
    icon: <Sparkles className="w-5 h-5 text-[#8c461d]" />,
  },
];

// Section 4: Authentic Pakistani Timber Varieties
const timberVarieties = [
  {
    name: "Pakistani Sheesham (Tahli)",
    tag: "TIMBER SPECIMEN 01",
    origin: "Punjab & KPK Forests",
    properties: "Heavy density, rich grain contrast, natural termite resistance",
    usage: "Luxury Beds, Dining Tables, Solid Main Doors",
    img: "/img2.jpg",
    desc: "The gold standard of Pakistani woodworking. Naturally strong and seasoned to withstand Lahore's summer and winter moisture.",
  },
  {
    name: "Kashmiri Walnut (Akhrot)",
    tag: "TIMBER SPECIMEN 02",
    origin: "Northern Valleys",
    properties: "Velvety dark chocolate swirls, smooth carving texture",
    usage: "Executive Office Desks, Royal Chairs, Fine Paneling",
    img: "/a1.jpg",
    desc: "Celebrated for its timeless luxury appearance and elegant dark tones that age gracefully with natural oil polish.",
  },
  {
    name: "Swat Deodar (Diyar Wood)",
    tag: "TIMBER SPECIMEN 03",
    origin: "Highland Swat & Gilgit",
    properties: "Aromatic timber resin, eternal rot resistance",
    usage: "Door Frames (Chokhats), Window Sills, Pergolas",
    img: "/img4.jpg",
    desc: "A soft, aromatic hardwood packed with natural essential oils, making it the most durable choice for exterior and wet areas.",
  },
  {
    name: "High-Gloss UV & Acrylic Sheets",
    tag: "MATERIAL SPECIMEN 04",
    origin: "Imported Premium Grade",
    properties: "Scratch-resistant, 100% water-proof, mirror gloss finish",
    usage: "Modern Kitchen Cabinets, TV Media Walls, Vanity Units",
    img: "/img3.jpg",
    desc: "Contemporary European aesthetics tailored for modern luxury homes in DHA, Bahria Town, and Gulberg Lahore.",
  },
];

// Section 5: Real Project Showcase Grid
const projects = [
  {
    title: "Luxury Kitchen & Island Fit-Out",
    location: "DHA Phase 6, Lahore",
    img: "/img1.jpg",
    tag: "Kitchens",
  },
  {
    title: "Solid Sheesham Dining Set & Slat Wall",
    location: "Bahria Town, Lahore",
    img: "/img6.jpeg",
    tag: "Bespoke Furniture",
  },
  {
    title: "Modern TV Media Wall & Wardrobes",
    location: "Model Town, Lahore",
    img: "/img3.jpg",
    tag: "Interior Joinery",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col relative selection:bg-[#7a3f1b] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SECTION 1: ARCHITECTURAL HERO & HERITAGE NARRATIVE */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#fbf9f6] pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 border-b border-[#ebdcd0] select-none">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Top Header Row: Bold Headline + Subtitle + Right Pill Button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-black text-neutral-950 tracking-[-0.035em] uppercase leading-[0.98]">
                <AnimatedTextLine text="HERITAGE & CRAFTSMANSHIP" delay={0.05} />
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 mt-3 sm:mt-4 font-normal tracking-tight">
                15+ Years Of Master Joinery, Solid Timber Passion & Honest Carpentry In Lahore
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20would%20like%20to%20discuss%20a%20woodwork%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                Consult With Rana Abdullah
              </a>
            </div>
          </div>

          {/* Center Visual Rounded Card With Floating Glass Bar */}
          <div className="relative w-full rounded-3xl sm:rounded-[36px] lg:rounded-[42px] overflow-hidden aspect-[16/10] sm:aspect-[21/9] min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] mt-8 sm:mt-12 bg-neutral-900 shadow-2xl border border-neutral-200/80 group">
            <img
              src="/a1.jpg"
              alt="Rana Abdullah Master Craftsman Workshop"
              className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05] transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

            {/* Floating Glassmorphic Pill Bar */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 bg-black/55 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-[26px] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl">
              <div className="space-y-1.5 max-w-3xl">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#d4a373] bg-[#7a3f1b]/30 px-3 py-1 rounded-full border border-[#7a3f1b]/50 inline-block mb-1">
                  FOUNDED BY RANA ABDULLAH
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Authentic Pakistani hardwoods shaped with 15+ years of precision in Lahore
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Serving DHA, Bahria Town, Gulberg, Model Town & all major residential sectors with bespoke joinery.
                </p>
              </div>

              <Link
                href="/gallery"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-[#d4a373] text-neutral-950 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-110 flex-shrink-0 cursor-pointer"
                title="Explore Gallery"
              >
                <ArrowUpRight className="w-6 h-6 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bottom 3 Metric Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-[#efe8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] border border-[#e2d6c7] shadow-sm">
              <div className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
                15+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                YEARS OF DEDICATED MASTERY
              </div>
            </div>

            <div className="bg-[#efe8df] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] border border-[#e2d6c7] shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                    SOLID SEASONED TIMBER
                  </div>
                </div>
                <span className="border border-neutral-400/80 rounded-full px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-700 bg-white/40">
                  VERIFIED
                </span>
              </div>
            </div>

            <div className="bg-[#231710] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[150px] text-white shadow-xl border border-amber-900/30">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
                350+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mt-2">
                LAHORE HOMES & CLIENTS
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SPECIALTY CRAFT PILLARS (CREATIVE ARCHITECTURAL CARDS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-20 sm:py-28 border-b border-[#eee7de] select-none">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#8c461d]" />
                <span>OUR EXPERTISE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-neutral-950 tracking-[-0.03em] uppercase leading-tight">
                Specialized Carpentry For Every Space
              </h2>
            </div>
            <p className="text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
              From contemporary high-gloss modular kitchens to pure solid Sheesham dining suites and master restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e8ded2] rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#7a3f1b]/40 transition-all duration-500 group hover:-translate-y-2"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#7a3f1b] text-white rounded-full shadow-md">
                      {item.tag}
                    </span>
                    <span className="absolute bottom-4 left-4 text-[11px] font-medium text-neutral-200">
                      {item.badge}
                    </span>
                  </div>

                  {/* Body Details */}
                  <div className="p-7 sm:p-8">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Feature Points */}
                    <ul className="space-y-2.5 pt-4 border-t border-neutral-100">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8c461d] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom WhatsApp Button */}
                <div className="p-7 sm:p-8 pt-0">
                  <a
                    href={`https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20am%20inquiring%20about%20"${item.title}".`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 4-STEP WORKFLOW IN LAHORE (CLEAN & CREATIVE PROCESS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-[#eee7de] select-none">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <Award className="w-3.5 h-3.5 text-[#8c461d]" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-neutral-950 tracking-[-0.03em] uppercase">
              Simple, Transparent & Hassle-Free
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3">
              From the initial laser measurement to final on-site installation and polish protection in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {workflow.map((item, idx) => (
              <div
                key={idx}
                className="relative p-7 sm:p-8 bg-[#faf7f2] border border-[#ebdcd0] rounded-3xl flex flex-col justify-between group hover:border-[#7a3f1b] hover:shadow-xl transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl border border-[#e5dcd1] shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-black text-[#8c461d]/25 group-hover:text-[#7a3f1b] transition-colors tracking-tight">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ebdcd0]/70 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8c461d]">
                  <span>Stage {item.step} Guarantee</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: TIMBER & MATERIALS EXCELLENCE (VISUAL SPECIMEN CARDS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-20 sm:py-28 border-b border-[#eee7de] select-none">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <TreePine className="w-3.5 h-3.5 text-[#8c461d]" />
              <span>MATERIALS WE USE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-neutral-950 tracking-[-0.03em] uppercase leading-tight">
              Premium Hardwoods & Imported Sheets
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-4">
              We never compromise on timber seasoning or hardware durability. Every project uses carefully selected solid woods and high-grade boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timberVarieties.map((mat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#ebdcd0] rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-sm group hover:shadow-2xl hover:border-[#7a3f1b]/40 transition-all duration-500"
              >
                <div className="sm:w-5/12 relative min-h-[240px] bg-neutral-100 overflow-hidden">
                  <img
                    src={mat.img}
                    alt={mat.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black/75 text-white backdrop-blur-sm rounded-full">
                    {mat.tag}
                  </span>
                </div>

                <div className="sm:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-1">
                      {mat.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#8c461d] block mb-3">
                      Origin: {mat.origin}
                    </span>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {mat.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-neutral-100 text-xs">
                    <div>
                      <span className="text-neutral-400 font-medium">Properties: </span>
                      <span className="font-semibold text-neutral-800">{mat.properties}</span>
                    </div>
                    <div className="bg-[#faf7f2] p-2.5 rounded-xl border border-[#ebdcd0]">
                      <span className="text-[#8c461d] font-bold uppercase text-[10px] tracking-wider block">Best Used For:</span>
                      <span className="font-bold text-neutral-900 text-xs">{mat.usage}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: RECENT DELIVERIES (CREATIVE SHOWCASE) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-[#eee7de] select-none">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <Home className="w-3.5 h-3.5 text-[#8c461d]" />
                <span>RECENT DELIVERIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-neutral-950 tracking-[-0.03em] uppercase">
                Crafted Across Lahore Homes
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7a3f1b] hover:text-[#231710] transition-colors border-b-2 border-[#7a3f1b] pb-1 w-fit cursor-pointer"
            >
              <span>Explore Full Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group bg-[#faf7f2] border border-[#ebdcd0] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/90 text-neutral-950 backdrop-blur-sm rounded-full">
                    {proj.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#d4a373]" />
                      {proj.location}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#7a3f1b] transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-950 mb-1 group-hover:text-[#7a3f1b] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    Master carpentry & joinery installation in {proj.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WORKSHOP CARD & DIRECT LAHORE CONTACT */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#231710] text-white py-20 sm:py-28 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#d4a373] uppercase mb-4 block">
                [ DIRECT WORKSHOP CONTACT ]
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-white leading-tight tracking-tight mb-6 uppercase">
                Need Expert Carpentry In Lahore?
              </h2>
              <p className="text-[#ddcfc6] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Contact Rana Abdullah directly for free on-site measurements, custom furniture quotes, modular kitchen fittings, or urgent door & lock repairs.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4a373] mt-1 flex-shrink-0" />
                  <span>Muhammad Hussain Road, Ameer Chowk Near The Trust School, Green Town, Lahore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4a373] flex-shrink-0" />
                  <a href="tel:+923261455033" className="hover:text-[#d4a373] font-bold text-white transition-colors">
                    0326 1455033
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href="https://wa.me/923261455033"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-sm sm:text-base py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:scale-105 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp: 0326 1455033</span>
              </a>

              <a
                href="tel:+923261455033"
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base py-3.5 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 text-center cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#d4a373]" />
                <span>Direct Call: 0326 1455033</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <CtaSection />

      {/* Master Brand Footer */}
      <Footer />

      {/* Floating Scroll-To-Top Button */}
      <FloatingWidgets />
    </main>
  );
}
