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
            const charDelay = delay + wordIdx * 0.08 + charIdx * 0.025;
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

// Section 2: Specialty Craft Pillars
const specialties = [
  {
    title: "Modular Kitchens & Wardrobes",
    desc: "Engineered with imported High-Gloss UV, Acrylic, and Lasani boards. Soft-close channels and custom internal organizers.",
    img: "/s1.jpg",
    tag: "MODERN INTERIORS",
  },
  {
    title: "Solid Sheesham & Teak Furniture",
    desc: "Heirloom dining tables, luxury double beds, and living room seating handcrafted from pure solid hardwood slabs.",
    img: "/s2.jpg",
    tag: "SOLID TIMBER",
  },
  {
    title: "Door Fitting & Polish Restoration",
    desc: "On-site swollen door planning, lock/handle replacements, and flawless deco/lacquer polish refinishing across Lahore.",
    img: "/s3.jpg",
    tag: "ON-SITE CARE",
  },
];

// Section 3: 4-Step Process
const workflow = [
  {
    step: "01",
    title: "Free On-Site Visit",
    desc: "We visit your home in Lahore, take precise laser measurements, and discuss your design vision & budget.",
    icon: <Ruler className="w-6 h-6 text-[#8c461d]" />,
  },
  {
    step: "02",
    title: "Timber & Sheet Selection",
    desc: "Choose from authentic Sheesham, Walnut, Deodar, or imported High-Gloss UV & Acrylic color swatches.",
    icon: <Layers className="w-6 h-6 text-[#8c461d]" />,
  },
  {
    step: "03",
    title: "Precision Workshop Joinery",
    desc: "Master carpentry cutting, seamless mortise & tenon joinery, and computerized edge-banding.",
    icon: <Hammer className="w-6 h-6 text-[#8c461d]" />,
  },
  {
    step: "04",
    title: "Neat Installation & Polish",
    desc: "Professional on-site installation by our team with zero mess, followed by rich lacquer/deco polish protection.",
    icon: <Sparkles className="w-6 h-6 text-[#8c461d]" />,
  },
];

// Section 4: Authentic Pakistani Timber Varieties
const timberVarieties = [
  {
    name: "Pakistani Sheesham (Tahli)",
    origin: "Punjab & KPK Forests",
    properties: "Heavy density, high grain contrast, natural termite resistance",
    usage: "Luxury Beds, Dining Tables, Solid Main Doors",
    img: "/img2.jpg",
    desc: "The gold standard of Pakistani woodworking. Naturally strong and seasoned to withstand Lahore's summer and winter moisture.",
  },
  {
    name: "Kashmiri Walnut (Akhrot)",
    origin: "Northern Valleys",
    properties: "Velvety dark chocolate swirls, smooth carving texture",
    usage: "Executive Office Desks, Royal Chairs, Fine Paneling",
    img: "/a1.jpg",
    desc: "Celebrated for its timeless luxury appearance and elegant dark tones that age gracefully with natural oil polish.",
  },
  {
    name: "Swat Deodar (Diyar Wood)",
    origin: "Highland Swat & Gilgit",
    properties: "Aromatic timber resin, eternal rot resistance",
    usage: "Architectural Door Frames (Chokhats), Window Sills, Pergolas",
    img: "/s4.jpg",
    desc: "A soft, aromatic hardwood packed with natural essential oils, making it the most durable choice for exterior and wet areas.",
  },
  {
    name: "High-Gloss UV & Acrylic Sheets",
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
    img: "/s1.jpg",
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
      {/* SECTION 1: HERO & HERITAGE NARRATIVE */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#fdfbf9] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[#eee7de]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 bg-[#8c461d]" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase">
                  RANA ABDULLAH — PROFESSIONAL CARPENTER
                </span>
              </div>

              {/* Kinetic Animated Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-neutral-950 leading-[1.12] tracking-tight mb-6 select-none">
                <span className="block">
                  <AnimatedTextLine text="Mastering woodwork in Lahore" delay={0.1} />
                </span>
                <span className="block text-neutral-400">
                  <AnimatedTextLine text="with precision & honest craft" delay={0.35} />{" "}
                  <span className="text-neutral-950 inline-block">
                    <AnimatedTextLine text="since 2008" delay={0.6} />
                  </span>
                </span>
              </h1>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Led by <strong>Rana Abdullah</strong>, our workshop in Green Town Lahore provides premier custom carpentry, modern UV kitchen cabinets, solid Sheesham furniture, and door repair services across Lahore with guaranteed durability.
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#eee7de] max-w-lg">
                <div>
                  <span className="block text-3xl sm:text-4xl font-bold text-neutral-950">15+</span>
                  <span className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">Years in Lahore</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-bold text-neutral-950">950+</span>
                  <span className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">Happy Homes</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-bold text-neutral-950">100%</span>
                  <span className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">Solid Wood Trust</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://wa.me/923261455033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 shadow-md transition-all rounded-none inline-flex items-center gap-2"
                >
                  <span>WhatsApp: 0326 1455033</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Workshop Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 shadow-xl group border border-[#e8dfd3]">
                <img
                  src="/a2.jpg"
                  alt="Rana Abdullah Carpenter at Work"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-6 bg-[#7a3f1b] text-white p-6 shadow-2xl rounded-none">
                <span className="block text-3xl sm:text-4xl font-black leading-none">15+</span>
                <span className="block text-xs font-bold uppercase tracking-wider mt-1 text-white/90">
                  Years of Trusted<br />Carpentry in Lahore
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SPECIALTY CRAFT PILLARS (WITH IMAGES) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-20 sm:py-28 border-b border-[#eee7de]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-14 sm:mb-18">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-3 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight leading-tight">
              Specialized carpentry for every corner of your home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e8dfd3] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#8c461d]/40 transition-all duration-300 rounded-none group overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-[#eee7de]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 bg-black/70 text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 4-STEP WORKFLOW IN LAHORE */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-neutral-100">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-3 block">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight">
              Simple, transparent, and hassle-free service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, idx) => (
              <div key={idx} className="relative p-8 bg-[#faf8f5] border border-[#ece4d9] rounded-none flex flex-col justify-between group hover:border-[#8c461d] transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white border border-[#e5dcd1] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-[#8c461d]/30 group-hover:text-[#8c461d] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: TIMBER & MATERIALS EXCELLENCE (VISUAL CARDS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-20 sm:py-28 border-b border-[#eee7de]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="max-w-3xl mb-14 sm:mb-18">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-3 block">
              MATERIALS WE USE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight leading-tight">
              Premium hardwoods & imported sheets
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-4">
              We never compromise on material quality. Every project uses carefully selected solid woods and high-grade boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timberVarieties.map((mat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#ece4d9] rounded-none overflow-hidden flex flex-col sm:flex-row shadow-sm group hover:shadow-lg transition-all duration-300"
              >
                <div className="sm:w-2/5 relative min-h-[220px] bg-neutral-100 overflow-hidden">
                  <img
                    src={mat.img}
                    alt={mat.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="sm:w-3/5 p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-neutral-950">
                        {mat.name}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-[#8c461d] block mb-3">
                      Source: {mat.origin}
                    </span>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {mat.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-100 text-[11px] sm:text-xs">
                    <div>
                      <span className="text-neutral-400 font-medium">Best for: </span>
                      <span className="font-semibold text-neutral-800">{mat.usage}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: REAL PROJECT HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-neutral-100">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-3 block">
                RECENT DELIVERIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight">
                Crafted across Lahore homes
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8c461d] hover:text-[#623113] transition-colors border-b border-[#8c461d] pb-1 w-fit"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-[#e8dfd3] mb-5">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute bottom-4 left-4 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 bg-black/75 text-white backdrop-blur-sm">
                    {proj.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-1 group-hover:text-[#8c461d] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  {proj.location}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WORKSHOP CARD & DIRECT LAHORE CONTACT */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#231710] text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#d4a373] uppercase mb-4 block">
                [ DIRECT WORKSHOP CONTACT ]
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-white leading-tight tracking-tight mb-6">
                Need expert carpentry work in Lahore?
              </h2>
              <p className="text-[#ddcfc6] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Contact Rana Abdullah directly for free on-site measurements, custom furniture quotes, kitchen fittings, or urgent door & lock repairs.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4a373] mt-1 flex-shrink-0" />
                  <span>Muhammad Hussain Road, Ameer Chowk Near The Trust School, Green Town, Lahore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4a373] flex-shrink-0" />
                  <a href="tel:+923261455033" className="hover:text-white font-bold text-white">0326 1455033</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href="https://wa.me/923261455033"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-sm sm:text-base py-4 px-8 flex items-center justify-center gap-3 transition-all duration-300 shadow-xl rounded-none text-center cursor-pointer"
              >
                <span>Chat on WhatsApp: 0326 1455033</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+923261455033"
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base py-3.5 px-8 flex items-center justify-center gap-3 transition-all duration-300 rounded-none text-center"
              >
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
