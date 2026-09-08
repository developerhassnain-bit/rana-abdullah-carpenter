"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      name: "Malik Usman Tariq",
      role: "Homeowner",
      location: "DHA Phase 5, Lahore",
      quote:
        "Rana Abdullah crafted our custom kitchen cabinets and master bedroom wardrobes with top-quality UV and solid Sheesham wood. The joinery fitting and smooth finishing were flawless. Highly recommended carpenter in Lahore!",
      rating: 5,
    },
    {
      id: 2,
      name: "Chaudhry Bilal Ahmed",
      role: "Architect & Interior Consultant",
      location: "Bahria Town, Lahore",
      quote:
        "We regularly collaborate with Rana Abdullah for custom door repairs, wall panelling, and bespoke furniture. His craftsmanship, honest timeline, and attention to wood durability are truly exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Tariq Mahmood",
      role: "Resident",
      location: "Green Town & Model Town, Lahore",
      quote:
        "From solid wood dining tables to door lock & polish repairs, Rana Abdullah is our go-to professional carpenter. Professional behavior, fair rates, and neat on-site work.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeItem = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 lg:py-20 text-neutral-900 relative overflow-hidden border-t border-neutral-100"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Tag & Heading */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
          <div className="overflow-hidden pb-1">
            <span
              className="block text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8c461d] uppercase mb-2 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0%)" : "translateY(110%)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.1s",
              }}
            >
              CLIENT EXPERIENCES
            </span>
          </div>

          <div className="overflow-hidden">
            <h2
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-neutral-950 tracking-tight transform transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isInView ? "translateY(0%)" : "translateY(110%)",
                opacity: isInView ? 1 : 0,
                transitionDelay: "0.22s",
              }}
            >
              Trusted by architects, designers & homeowners
            </h2>
          </div>
        </div>

        {/* Testimonial Card with Smooth Upward Fade */}
        <div
          className="max-w-4xl mx-auto bg-[#faf8f5] p-6 sm:p-10 lg:p-12 border border-[#ece4d9] shadow-sm relative transform transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(35px)",
            opacity: isInView ? 1 : 0,
            transitionDelay: "0.38s",
          }}
        >
          
          <Quote className="w-10 h-10 text-[#7a3f1b]/20 mb-4" />

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-4 sm:mb-5 text-[#8c461d]">
            {[...Array(activeItem.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#8c461d]" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-base sm:text-xl lg:text-[22px] font-medium leading-relaxed text-neutral-900 mb-6 sm:mb-8">
            &ldquo;{activeItem.quote}&rdquo;
          </p>

          {/* Author Details & Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-5 border-t border-neutral-200">
            <div>
              <h4 className="text-lg font-bold text-neutral-950">{activeItem.name}</h4>
              <p className="text-sm text-neutral-600">
                {activeItem.role} • <span className="text-[#8c461d] font-semibold">{activeItem.location}</span>
              </p>
            </div>

            {/* Slider Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-11 h-11 bg-white hover:bg-[#7a3f1b] hover:text-white border border-neutral-300 text-neutral-800 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-11 h-11 bg-white hover:bg-[#7a3f1b] hover:text-white border border-neutral-300 text-neutral-800 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
