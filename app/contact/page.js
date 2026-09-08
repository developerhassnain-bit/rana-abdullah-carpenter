"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TreePine,
  Ruler,
  Hammer,
  HelpCircle,
  MessageSquare,
  Building2,
  ExternalLink,
} from "lucide-react";

// Kinetic character/word reveal component
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

const serviceCategories = [
  "Furniture Making",
  "Kitchen Cabinets",
  "Door & Wood Repair",
  "Custom Wood Work",
  "Wardrobes & Media Walls",
  "Full House Woodwork",
];

const lahoreAreas = [
  "Green Town & Ameer Chowk",
  "DHA Phase 1 – 9",
  "Bahria Town Lahore",
  "Model Town & Garden Town",
  "Gulberg I, II, III",
  "Johar Town & Faisal Town",
  "Wapda Town & Valencia",
  "Cantt & Askari (All)",
  "Lake City & Raiwind Road",
  "Other Lahore Area",
];

const contactFaqs = [
  {
    q: "Do you provide free on-site visits across Lahore?",
    a: "Yes, Rana Abdullah provides 100% free on-site visits to your home or office anywhere in Lahore to take precise laser measurements, inspect wood requirements, and discuss design options.",
  },
  {
    q: "How fast can I get a cost estimate for my project?",
    a: "After you share dimensions or we visit your site, we typically deliver a comprehensive transparent itemized cost quote within 4 to 24 hours.",
  },
  {
    q: "Can you bring wood samples and sheet catalogs to our location?",
    a: "Yes! During our visit we bring authentic solid wood samples (Sheesham, Walnut, Deodar) along with latest High-Gloss UV and Acrylic sheet catalogs.",
  },
  {
    q: "Do you undertake urgent door repair or lock replacement jobs?",
    a: "Yes, for door planning, hinge adjustments, and emergency lock replacements in Lahore, we can often schedule same-day on-site service.",
  },
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("Furniture Making");
  const [selectedArea, setSelectedArea] = useState("Green Town & Ameer Chowk");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendToWhatsApp = (e) => {
    if (e) e.preventDefault();

    const text = `Assalam o Alaikum Rana Abdullah Sahib,%0A%0A*Mera Naam:* ${formData.name || "Client"}%0A*Phone / WhatsApp:* ${formData.phone || "Not specified"}%0A${formData.email ? `*Email:* ${formData.email}%0A` : ""}*Service Required:* ${selectedService}%0A*Location in Lahore:* ${selectedArea}%0A${formData.message ? `*Project Details / Dimensions:* ${formData.message}%0A` : ""}%0ABarae meharbani is woodwork project ka estimate aur catalog share kar dein. Shukriya!`;

    window.open(`https://wa.me/923261455033?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white flex flex-col relative selection:bg-[#7a3f1b] selection:text-white">
      {/* Smart Sticky Top Navigation */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SECTION 1: KINETIC HERO HEADER */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#fdfbf9] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 border-b border-[#eee7de] overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Subtitle Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#7a3f1b]/10 border border-[#7a3f1b]/30 text-[#8c461d] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#8c461d]" />
            <span>DIRECT WORKSHOP & FREE ESTIMATES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Main Title */}
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-neutral-950 tracking-[-0.025em] leading-[1.08] select-none mb-6">
                <span className="block">
                  <AnimatedTextLine text="Let's build your woodwork vision." delay={0.1} />
                </span>
                <span className="block text-neutral-400">
                  <AnimatedTextLine text="Expert carpentry across Lahore" delay={0.35} />{" "}
                  <span className="text-[#8c461d] inline-block">
                    <AnimatedTextLine text="with Rana Abdullah." delay={0.6} />
                  </span>
                </span>
              </h1>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Looking for custom kitchen cabinets, solid Sheesham bedroom furniture, bespoke wardrobes, or professional door & polish repairs? Contact us directly or visit our Green Town workshop for an on-site consultation.
              </p>
            </div>

            {/* Right Quick Direct Channels */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <a
                href="https://wa.me/923261455033"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7a3f1b] hover:bg-[#623113] text-white p-5 shadow-md transition-all flex items-center justify-between group rounded-none"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-white/15 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#d4a373] block">
                      Fastest Response
                    </span>
                    <span className="text-base font-bold text-white">
                      Chat on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="tel:+923261455033"
                className="bg-white border border-[#e4d9cc] hover:border-[#8c461d] p-5 shadow-sm transition-all flex items-center justify-between group rounded-none"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#faf7f2] border border-[#eee7de] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#8c461d]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-500 block">
                      Direct Carpenter Call
                    </span>
                    <span className="text-base font-bold text-neutral-950">
                      0326 1455033
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#8c461d] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 4 QUICK INFO PILLARS */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 border-b border-neutral-100">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Location */}
            <div className="bg-[#faf8f5] border border-[#ece4d9] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#8c461d]/50 transition-colors">
              <div>
                <div className="w-10 h-10 bg-white border border-[#e0d4c5] flex items-center justify-center text-[#8c461d] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-950 mb-1">
                  Workshop Address
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Muhammad Hussain Road, Ameer Chowk Near The Trust School, Green Town, Lahore
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#eee5d8] text-[11px] font-bold text-[#8c461d] uppercase tracking-wider">
                Lahore, Pakistan
              </div>
            </div>

            {/* Pillar 2: Direct Phone */}
            <div className="bg-[#faf8f5] border border-[#ece4d9] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#8c461d]/50 transition-colors">
              <div>
                <div className="w-10 h-10 bg-white border border-[#e0d4c5] flex items-center justify-center text-[#8c461d] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-950 mb-1">
                  Direct Phone & WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Speak directly with Rana Abdullah for urgent bookings and quotes.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#eee5d8]">
                <a href="tel:+923261455033" className="text-sm font-bold text-neutral-900 hover:text-[#8c461d] transition-colors">
                  0326 1455033
                </a>
              </div>
            </div>

            {/* Pillar 3: Timings */}
            <div className="bg-[#faf8f5] border border-[#ece4d9] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#8c461d]/50 transition-colors">
              <div>
                <div className="w-10 h-10 bg-white border border-[#e0d4c5] flex items-center justify-center text-[#8c461d] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-950 mb-1">
                  Working Hours
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Mon – Sat: 8:30 AM – 8:00 PM<br />
                  Sunday: On-Site Site Visits by Appointment
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#eee5d8] text-[11px] font-bold text-[#8c461d] uppercase tracking-wider">
                ⚡ 2-Hour Response Time
              </div>
            </div>

            {/* Pillar 4: Service Areas */}
            <div className="bg-[#faf8f5] border border-[#ece4d9] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#8c461d]/50 transition-colors">
              <div>
                <div className="w-10 h-10 bg-white border border-[#e0d4c5] flex items-center justify-center text-[#8c461d] mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-950 mb-1">
                  Service Area
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Covering DHA, Bahria Town, Model Town, Gulberg, Johar Town & All Lahore
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#eee5d8] text-[11px] font-bold text-[#8c461d] uppercase tracking-wider">
                100% On-Site Laser Visits
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ADVANCED INTERACTIVE ESTIMATE FORM & WORKSHOP PROFILE */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-20 sm:py-28">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Interactive Multi-Choice Consultation Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-[#e8dfd3] p-8 sm:p-12 shadow-sm rounded-none">
              
              <div className="border-b border-neutral-100 pb-6 mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8c461d] uppercase block mb-2">
                  DIRECT WOODWORK CONSULTATION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-950 tracking-tight">
                  Connect on WhatsApp with Rana Abdullah
                </h2>
                <p className="text-sm text-neutral-600 mt-2">
                  Apni zaroorat aur details niche darj karein aur seedha WhatsApp par Rana Abdullah se baat karein. Tamam details chat input me pehle se likhi hui aayengi.
                </p>
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-7">
                
                {/* 1. Service Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3">
                    Select Required Service *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {serviceCategories.map((service) => {
                      const isSelected = selectedService === service;
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => setSelectedService(service)}
                          className={`text-xs sm:text-[13px] font-semibold p-3.5 text-left border transition-all duration-200 cursor-pointer rounded-none ${
                            isSelected
                              ? "bg-[#7a3f1b] text-white border-[#7a3f1b] shadow-sm"
                              : "bg-[#faf8f5] text-neutral-700 border-[#e5dcd1] hover:border-[#8c461d]/50 hover:bg-[#f5efe7]"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Personal Contact Inputs: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Malik Usman"
                      className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3.5 focus:outline-none focus:border-[#7a3f1b] rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0300 1234567"
                      className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3.5 focus:outline-none focus:border-[#7a3f1b] rounded-none"
                    />
                  </div>
                </div>

                {/* 3. Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3.5 focus:outline-none focus:border-[#7a3f1b] rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Your Location in Lahore *
                    </label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3.5 focus:outline-none focus:border-[#7a3f1b] rounded-none cursor-pointer"
                    >
                      {lahoreAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Project Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Project Details / Dimensions / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. 10x12 UV Kitchen Cabinets, Solid Sheesham Double Bed Set, 3 Doors Swollen Repair, etc..."
                    className="w-full bg-[#faf8f5] border border-neutral-300 text-neutral-900 text-sm px-4 py-3.5 focus:outline-none focus:border-[#7a3f1b] rounded-none resize-none"
                  ></textarea>
                </div>

                {/* 5. Single Prominent WhatsApp Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base tracking-wider uppercase py-4 px-8 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer rounded-none group"
                  >
                    <svg className="w-5 h-5 fill-white flex-shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Send Details on WhatsApp (0326 1455033)</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>

            </div>

            {/* Right Column: Workshop Profile, Map & Guarantee (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Workshop Card */}
              <div className="bg-white border border-[#e8dfd3] p-8 shadow-sm rounded-none">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border border-[#eee7de] mb-6">
                  <img
                    src="/a2.jpg"
                    alt="Rana Abdullah Woodworking Workshop Lahore"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#7a3f1b] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                    GREEN TOWN LAHORE WORKSHOP
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 mb-2">
                  Rana Abdullah — Professional Carpenter
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Equipped with heavy wood seasoning, precise table saws, mortise cutters, and high-gloss edge banders to ensure immaculate woodwork.
                </p>

                <div className="space-y-3.5 pt-4 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8c461d] flex-shrink-0 mt-0.5" />
                    <span>Muhammad Hussain Road, Ameer Chowk Near The Trust School, Green Town, Lahore</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#8c461d] flex-shrink-0" />
                    <span className="font-semibold text-neutral-900">0326 1455033</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#8c461d] flex-shrink-0" />
                    <span>Open Mon – Sat (8:30 AM – 8:00 PM)</span>
                  </div>
                </div>
              </div>

              {/* Lahore Coverage Areas Badge Card */}
              <div className="bg-[#18110c] text-white p-8 border border-white/10 shadow-lg rounded-none">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4a373] block mb-2">
                  COVERING ALL LAHORE
                </span>
                <h4 className="text-xl font-bold text-white mb-3">
                  On-Site Visits Across All Neighborhoods
                </h4>
                <p className="text-xs text-white/70 leading-relaxed mb-5">
                  Our mobile master team is on call to provide on-site measurements, door repair solutions, and furniture delivery across:
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "DHA Phase 1-9",
                    "Bahria Town",
                    "Green Town",
                    "Model Town",
                    "Gulberg",
                    "Johar Town",
                    "Faisal Town",
                    "Wapda Town",
                    "Valencia",
                    "Cantt Lahore",
                    "Askari 1-11",
                    "Lake City",
                  ].map((loc, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-white/10 px-2.5 py-1 text-[#f3ede7] border border-white/10"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: 4-STEP CONSULTATION PROCESS */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-neutral-100">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-2 block">
              OUR SIMPLE PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              From Inquiry to Flawless Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Call or WhatsApp",
                desc: "Send your ideas, approximate sizes, or call Rana Abdullah at 0326 1455033 to discuss scope.",
                icon: <Phone className="w-5 h-5 text-[#8c461d]" />,
              },
              {
                step: "02",
                title: "Free On-Site Visit",
                desc: "We visit your location in Lahore with laser measurement tools and authentic timber/sheet swatches.",
                icon: <Ruler className="w-5 h-5 text-[#8c461d]" />,
              },
              {
                step: "03",
                title: "Workshop Crafting",
                desc: "Master joinery cutting, computerized edge-banding, and seasoning at our Green Town workshop.",
                icon: <Hammer className="w-5 h-5 text-[#8c461d]" />,
              },
              {
                step: "04",
                title: "Neat Installation & Polish",
                desc: "Zero-mess on-site installation by our polite craftsmen followed by lacquer / deco protection.",
                icon: <Sparkles className="w-5 h-5 text-[#8c461d]" />,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#faf8f5] border border-[#ece4d9] p-7 flex flex-col justify-between group hover:border-[#8c461d] transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 bg-white border border-[#e0d4c5] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-[#8c461d]/30 group-hover:text-[#8c461d] transition-colors">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CONTACT & VISIT FAQS */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#faf7f2] py-16 sm:py-24 border-b border-[#eee7de]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-2 block">
              QUICK QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              Consultation & Booking FAQs
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-none p-6 transition-colors duration-200 ${
                    isOpen
                      ? "bg-[#f3ede3] border-[#d8ccbe]"
                      : "bg-white border-[#e8ded2] hover:bg-[#faf7f2]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-xs font-bold text-[#8c461d] uppercase tracking-wider">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 text-neutral-600 text-sm sm:text-[15px] leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Master Luxury CTA Section */}
      <CtaSection />

      {/* Master Brand Footer */}
      <Footer />

      {/* Floating Scroll-To-Top Button */}
      <FloatingWidgets />
    </main>
  );
}
