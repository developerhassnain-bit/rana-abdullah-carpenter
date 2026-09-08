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
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
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

// 4 Main Service Feature Cards (Matching Reference Layout)
const servicesList = [
  {
    id: "furniture-making",
    title: "Furniture making",
    desc: "We design and handcraft custom wooden dining tables, seating, shelving, and architectural fixtures.",
    badge: "Bespoke Joinery",
    features: ["Hand-selected hardwood slabs", "Mortise and tenon joinery", "Zero-VOC natural oil finish"],
    icon: (
      <svg className="w-12 h-12 text-[#8c461d]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 28h36v8H6z" />
        <path d="M10 36v8" />
        <path d="M38 36v8" />
        <path d="M10 28V14a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v14" />
        <path d="M16 10v18" />
        <path d="M32 10v18" />
        <path d="M6 24h36" />
      </svg>
    ),
  },
  {
    id: "kitchen-cabinets",
    title: "Kitchen cabinets",
    desc: "Custom timber cabinetry, seamless islands, and architectural millwork engineered for culinary living.",
    badge: "Architectural Kitchens",
    features: ["Soft-close solid timber drawer boxes", "Custom internal organizers", "Precision on-site alignment"],
    icon: (
      <svg className="w-12 h-12 text-[#8c461d]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="32" rx="0" />
        <line x1="24" y1="8" x2="24" y2="40" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <circle cx="20" cy="16" r="1.5" fill="currentColor" />
        <circle cx="28" cy="16" r="1.5" fill="currentColor" />
        <circle cx="20" cy="32" r="1.5" fill="currentColor" />
        <circle cx="28" cy="32" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "door-and-wood-repair",
    title: "Door and wood repair",
    desc: "Master restoration, precision joinery adjustments, and surface refinishing for wooden doors and heritage fixtures.",
    badge: "Historic Care",
    features: ["Seamless grain matching", "Structural timber stabilization", "Antique wax & oil re-finishing"],
    icon: (
      <svg className="w-12 h-12 text-[#8c461d]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 6h28v36H10z" />
        <line x1="10" y1="42" x2="38" y2="42" strokeWidth="3" />
        <circle cx="32" cy="24" r="2" fill="currentColor" />
        <path d="M16 14h16" />
        <path d="M16 34h16" />
      </svg>
    ),
  },
  {
    id: "custom-wood-work",
    title: "Custom wood work",
    desc: "Specialized architectural millwork, wood panelling, floating timber stairs, and bespoke installations.",
    badge: "Fine Millwork",
    features: ["3D CAD & material sampling", "Acoustic wood slat panelling", "End-to-end master installation"],
    icon: (
      <svg className="w-12 h-12 text-[#8c461d]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 38L24 6l16 32H8z" />
        <line x1="16" y1="26" x2="32" y2="26" />
        <circle cx="24" cy="20" r="3" />
      </svg>
    ),
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

      {/* Hero Header Section (Reference Image 1) */}
      <section className="w-full bg-[#fdfbf9] pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 border-b border-[#eee7de]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Subtitle Tag */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 bg-[#8c461d]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase">
              OUR EXPERTISE & SERVICES
            </span>
          </div>

          {/* Main Kinetic Staggered Title */}
          <div className="max-w-5xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-bold tracking-[-0.025em] leading-[1.2] select-none text-neutral-950">
              <span className="block">
                <AnimatedTextLine text="Craft with vision using woodwork." delay={0.1} />
              </span>
              <span className="block text-neutral-400">
                <AnimatedTextLine
                  text="Designing elegant spaces with ease"
                  delay={0.35}
                />{" "}
                <span className="text-neutral-950 inline-block">
                  <AnimatedTextLine text="to" delay={0.6} />
                </span>
              </span>
              <span className="block text-neutral-950">
                <AnimatedTextLine text="elevate every interior look" delay={0.75} />
              </span>
            </h1>
          </div>

          {/* Sub-text paragraph (Offset to bottom right, matching Reference Image 1) */}
          <div className="mt-8 sm:mt-12 lg:mt-14 flex justify-end">
            <div className="max-w-md lg:max-w-lg">
              <p className="text-[#55504c] text-sm sm:text-[15px] leading-relaxed font-normal">
                Saw is devoted to bringing artistry and custom woodwork to every setting, ensuring each project is crafted for style, strength, and a seamless client experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Feature Service Cards (Reference Image 2) */}
      <section className="w-full bg-[#faf7f2] py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesList.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white border border-[#e8dfd3] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#8c461d]/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group rounded-none"
                style={{
                  animation: `fadeInUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s forwards`,
                }}
              >
                <div>
                  {/* Icon Area */}
                  <div className="w-16 h-16 flex items-center justify-center mb-8 bg-[#faf7f2] border border-[#eee7de] group-hover:bg-[#7a3f1b]/10 transition-colors">
                    {service.icon}
                  </div>

                  {/* Badge */}
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8c461d] block mb-2">
                    {service.badge}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-[26px] font-bold text-neutral-950 tracking-tight leading-snug mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 pt-4 border-t border-neutral-100 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-neutral-700">
                        <Check className="w-4 h-4 text-[#8c461d] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8c461d] group-hover:text-[#623113] transition-colors border-b border-[#8c461d]/30 group-hover:border-[#8c461d] pb-1 w-fit"
                >
                  <span>Request Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Infinite Text Marquee Banner (Reference Image 3 - No Orange, Brown Asterisks) */}
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
      {/* 3 SHOWCASE SECTIONS (Requested by User with img1, img2, img3 & Brown Theme) */}
      {/* ========================================================================= */}

      {/* Showcase Section 1: Left Text, Right Image (/img1.jpg) */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-neutral-100 overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-4 block">
                TIMELESS CRAFTSMANSHIP APPROACH
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-neutral-950 leading-[1.12] tracking-tight mb-6">
                Transform your space with Rana Abdullah
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                Rana Abdullah blends artistry and skill to shape unique woodwork, delivering high quality carpentry and cabinetry for lasting beauty.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 shadow transition-all duration-300 rounded-none cursor-pointer"
              >
                READ MORE
              </Link>
            </div>

            {/* Right Image (/img1.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-100 shadow-sm group">
                <img
                  src="/img1.jpg"
                  alt="Timeless Craftsmanship Approach"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Showcase Section 2: Left Image (/img2.jpg), Right Text */}
      <section className="w-full bg-[#faf8f5] py-20 sm:py-28 border-b border-neutral-100 overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image (/img2.jpg) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-100 shadow-sm group">
                <img
                  src="/img2.jpg"
                  alt="Innovative Flooring Lasting Impact"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start max-w-xl">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-4 block">
                WOODWORK EXPERTISE FOR YOU
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-neutral-950 leading-[1.12] tracking-tight mb-6">
                Innovative cabinetry, lasting impact
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                We enhance Lahore living areas with custom woodwork, expert solid wood joinery, and durable finishes that create warmth and prestige.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 shadow transition-all duration-300 rounded-none cursor-pointer"
              >
                READ MORE
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Showcase Section 3: Left Text, Right Image (/img3.jpg) */}
      <section className="w-full bg-white py-20 sm:py-28 border-b border-neutral-100 overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-4 block">
                INSPIRED WOODWORK VISION
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-neutral-950 leading-[1.12] tracking-tight mb-6">
                Custom excellence with Rana Abdullah
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                Rana Abdullah brings expert carpentry and modern finishes to life across Lahore, uniting master craftsmanship with genuine customer satisfaction.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-[#7a3f1b] hover:bg-[#623113] text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 shadow transition-all duration-300 rounded-none cursor-pointer"
              >
                READ MORE
              </Link>
            </div>

            {/* Right Image (/img3.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-100 shadow-sm group">
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
