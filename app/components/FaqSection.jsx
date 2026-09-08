"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
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

  const faqs = [
    {
      q: "What types of wood and materials do you work with?",
      a: "We work with top-grade solid woods including pure Sheesham (Tahli), Deodar (Diyar), Walnut (Akhrot), Teak (Sagwan), as well as premium imported High-Gloss UV sheets, Acrylic, and Lasani/MDF boards for modern modular kitchens and wardrobes.",
    },
    {
      q: "Which areas of Lahore do you provide on-site carpentry services in?",
      a: "We provide on-site carpentry, furniture making, and repairs across all areas of Lahore including Green Town, Model Town, DHA, Bahria Town, Gulberg, Johar Town, Wapda Town, Cantt, and surrounding localities.",
    },
    {
      q: "Do you make custom kitchen cabinets and wardrobes?",
      a: "Yes! We specialize in custom modern and classical kitchen cabinets, modular wardrobes, TV media walls, and wooden doors designed according to your exact room measurements and budget.",
    },
    {
      q: "Do you provide door fitting, lock change, and wood polish repairs?",
      a: "Yes, our door and wood repair service covers swollen door adjustments, lock/hinge replacements, wooden window repairs, and professional deco / lacquer polish restoration.",
    },
    {
      q: "How can I get an estimate for my carpentry work in Lahore?",
      a: "You can simply call or WhatsApp Rana Abdullah at 0326 1455033. We offer free on-site visits and quick price quotes based on your required woodwork.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full bg-[#faf7f2] py-16 sm:py-20 lg:py-24 border-t border-[#ebe4dc] overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Intro & "Still have questions?" Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Tag / Category Badge */}
              <div className="overflow-hidden pb-1">
                <div
                  className="inline-flex items-center gap-2 mb-4 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isInView ? "translateY(0%)" : "translateY(110%)",
                    opacity: isInView ? 1 : 0,
                    transitionDelay: "0.1s",
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[#8c461d]" />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8c461d] uppercase">
                    QUESTIONS & ANSWERS
                  </span>
                </div>
              </div>

              {/* Main Headline Animated Line-by-Line */}
              <div className="overflow-hidden mb-5">
                <h2
                  className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 leading-[1.15] tracking-tight transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isInView ? "translateY(0%)" : "translateY(110%)",
                    opacity: isInView ? 1 : 0,
                    transitionDelay: "0.2s",
                  }}
                >
                  Clear answers for custom woodwork & craftsmanship
                </h2>
              </div>

              {/* Descriptive text */}
              <p
                className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-lg transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isInView ? "translateY(0px)" : "translateY(25px)",
                  opacity: isInView ? 1 : 0,
                  transitionDelay: "0.32s",
                }}
              >
                Clear answers on timber sourcing, project timelines, bespoke cabinetry, flooring restoration, and guaranteed craftsmanship across Lahore.
              </p>
            </div>

            {/* "Still have questions?" Card */}
            <div
              className="bg-[#ede6dc] border border-[#ded5c8] rounded-none p-7 sm:p-8 max-w-md shadow-sm transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0px)" : "translateY(30px)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.45s",
              }}
            >
              <h3 className="text-xl font-bold text-neutral-950 mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Need clarity before starting your project? Speak directly with Rana Abdullah and get honest advice tailored to your space.
              </p>
              
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#7a3f1b] hover:bg-[#623113] text-white font-semibold text-sm px-5 py-3.5 rounded-none shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-none bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>Book a consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Stacked Sharp Card Accordions with Staggered Fade */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    transform: isInView ? "translateY(0px)" : "translateY(35px)",
                    opacity: isInView ? 1 : 0,
                    transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + idx * 0.08}s, opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + idx * 0.08}s`,
                  }}
                  className={`border rounded-none p-6 sm:p-7 transition-colors duration-300 ${
                    isOpen
                      ? "bg-[#f3ede3] border-[#d8ccbe] shadow-sm"
                      : "bg-[#f5efe7]/80 hover:bg-[#f3ede3] border-[#e7ddd1]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-none flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-neutral-950 text-white shadow-md"
                          : "bg-[#ded6cc] text-neutral-800 hover:bg-[#d0c6ba]"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 stroke-[2.5] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 text-neutral-700 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
