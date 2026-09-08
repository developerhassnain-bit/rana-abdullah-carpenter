"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

function InteractiveGradientHeading() {
  const containerRef = useRef(null);
  
  // Target coordinates (where the mouse actually is)
  const targetPos = useRef({ x: 15, y: 50 });
  
  // Rendered coordinates (smoothly lagged via Lerp physics)
  const [currentPos, setCurrentPos] = useState({ x: 15, y: 50 });
  const [hasInteracted, setHasInteracted] = useState(false);
  const animFrameRef = useRef(null);

  // Smooth fluid lerp loop
  useEffect(() => {
    const lerpFactor = 0.065; // Soft delayed easing factor for cinematic smoothness

    const updatePosition = () => {
      setCurrentPos((prev) => {
        const dx = targetPos.current.x - prev.x;
        const dy = targetPos.current.y - prev.y;

        // If very close, stop updating state to save cycles
        if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
          return prev;
        }

        return {
          x: prev.x + dx * lerpFactor,
          y: prev.y + dy * lerpFactor,
        };
      });

      animFrameRef.current = requestAnimationFrame(updatePosition);
    };

    animFrameRef.current = requestAnimationFrame(updatePosition);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    targetPos.current = { x, y };
    setHasInteracted(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="inline-block relative select-none cursor-pointer"
    >
      <h2
        className="text-5xl sm:text-7xl md:text-9xl lg:text-[132px] xl:text-[156px] font-black tracking-[-0.035em] leading-none uppercase"
        style={{
          backgroundImage: hasInteracted
            ? `radial-gradient(circle 520px at ${currentPos.x.toFixed(2)}% ${currentPos.y.toFixed(2)}%, #4e2e1b 0%, #7d573f 24%, #bca18a 52%, #f6eee3 100%)`
            : `linear-gradient(90deg, #95735d 0%, #b89a83 30%, #ceb49e 60%, #f6ede3 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          display: "inline-block",
        }}
      >
        WHAT WE DO
      </h2>
    </div>
  );
}

function ServiceImageCard({ src, alt, tag, fallbackGradient }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative group overflow-hidden bg-neutral-800 aspect-square w-full">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${fallbackGradient} p-6 flex flex-col justify-between text-white relative`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-1 bg-black/40 rounded w-fit relative z-10">
            {tag}
          </span>
          <div className="relative z-10">
            <p className="text-xs text-amber-200">
              Place <code className="bg-black/50 px-1 py-0.5 rounded text-amber-300 font-mono">{src}</code> in public/
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

function ServiceTextCard({ title, desc }) {
  return (
    <div className="bg-[#383232] p-8 sm:p-10 lg:p-12 flex flex-col justify-between aspect-square w-full group hover:bg-[#3f3838] transition-colors duration-300">
      <div>
        <h3 className="text-2xl sm:text-[26px] font-bold text-white leading-tight mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed font-normal">
          {desc}
        </p>
      </div>

      <div className="pt-6">
        <Link
          href="#contact"
          className="inline-block text-xs sm:text-sm font-bold tracking-wider uppercase text-white/90 hover:text-white border-b border-white/30 hover:border-white pb-0.5 transition-all"
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
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

  // Card wrapper with smooth staggered bottom-to-top fade
  const animatedCardStyle = (delayIndex) => ({
    transform: isInView ? "translateY(0px)" : "translateY(40px)",
    opacity: isInView ? 1 : 0,
    transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delayIndex * 0.09}s, opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delayIndex * 0.09}s`,
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-[#272222] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Interactive Dynamic Smooth Lag Gradient Header: WHAT WE DO */}
        <div className="mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
          <InteractiveGradientHeading />
        </div>

        {/* 2x4 Checkerboard Grid with Smooth Bottom-to-Top Fade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          
          {/* Row 1 - Card 1 */}
          <div style={animatedCardStyle(0)}>
            <ServiceTextCard
              title="Furniture making"
              desc="Handcrafted bespoke wooden furniture designed and built to elevate your living and workspace."
            />
          </div>

          {/* Row 1 - Card 2 */}
          <div style={animatedCardStyle(1)}>
            <ServiceImageCard
              src="/s1.jpg"
              alt="Furniture Making"
              tag="Furniture Making"
              fallbackGradient="from-[#6b3e26] via-[#4a2817] to-[#27150c]"
            />
          </div>

          {/* Row 1 - Card 3 */}
          <div style={animatedCardStyle(2)}>
            <ServiceTextCard
              title="Kitchen cabinets"
              desc="Precision-crafted timber cabinetry, custom pantries, and architectural storage built for life."
            />
          </div>

          {/* Row 1 - Card 4 */}
          <div style={animatedCardStyle(3)}>
            <ServiceImageCard
              src="/s2.jpg"
              alt="Kitchen Cabinets"
              tag="Kitchen Cabinets"
              fallbackGradient="from-[#8c6b4f] via-[#5c422e] to-[#2b1f16]"
            />
          </div>

          {/* Row 2 - Card 5 */}
          <div style={animatedCardStyle(4)}>
            <ServiceImageCard
              src="/s3.jpg"
              alt="Door and Wood Repair"
              tag="Door & Repair"
              fallbackGradient="from-[#4a4f3b] via-[#333728] to-[#1c1e15]"
            />
          </div>

          {/* Row 2 - Card 6 */}
          <div style={animatedCardStyle(5)}>
            <ServiceTextCard
              title="Door and wood repair"
              desc="Master restoration, precision joinery adjustments, and surface refinishing for wooden doors and fixtures."
            />
          </div>

          {/* Row 2 - Card 7 */}
          <div style={animatedCardStyle(6)}>
            <ServiceImageCard
              src="/s4.jpg"
              alt="Custom Wood Work"
              tag="Custom Woodwork"
              fallbackGradient="from-[#8b613e] via-[#5e3f26] to-[#2e1d10]"
            />
          </div>

          {/* Row 2 - Card 8 */}
          <div style={animatedCardStyle(7)}>
            <ServiceTextCard
              title="Custom wood work"
              desc="Specialized architectural millwork, geometric wood paneling, and one-of-a-kind timber installations."
            />
          </div>

        </div>

      </div>
    </section>
  );
}
