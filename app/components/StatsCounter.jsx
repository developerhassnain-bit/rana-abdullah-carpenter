"use client";

import React, { useEffect, useRef, useState } from "react";

function RollingNumber({ value, isVisible }) {
  if (value === "Lahore" || value === "Lhr") {
    return <span>Lahore</span>;
  }

  if (value === "100%") {
    return (
      <span className="inline-flex items-center">
        <DigitRoller target={1} isVisible={isVisible} />
        <DigitRoller target={0} isVisible={isVisible} delay={100} />
        <DigitRoller target={0} isVisible={isVisible} delay={200} />
        <span>%</span>
      </span>
    );
  }

  if (value === "950+") {
    return (
      <span className="inline-flex items-center">
        <DigitRoller target={9} isVisible={isVisible} />
        <DigitRoller target={5} isVisible={isVisible} delay={120} />
        <DigitRoller target={0} isVisible={isVisible} delay={240} />
        <span className="text-[#8c461d]">+</span>
      </span>
    );
  }

  if (value === "15+") {
    return (
      <span className="inline-flex items-center">
        <DigitRoller target={1} isVisible={isVisible} />
        <DigitRoller target={5} isVisible={isVisible} delay={120} />
        <span className="text-[#8c461d]">+</span>
      </span>
    );
  }

  // Pure numbers
  const digits = value.toString().split("");

  return (
    <span className="inline-flex items-center overflow-hidden">
      {digits.map((digit, idx) => (
        <DigitRoller key={idx} target={parseInt(digit, 10)} isVisible={isVisible} delay={idx * 120} />
      ))}
    </span>
  );
}

function DigitRoller({ target, isVisible, delay = 0 }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setActive(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <span className="inline-block h-[1.15em] overflow-hidden leading-none relative">
      <span
        className="flex flex-col transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: active ? `translateY(-${target * 10}%)` : `translateY(0%)`,
        }}
      >
        {numbers.map((num) => (
          <span key={num} className="h-[1.15em] flex items-center justify-center">
            {num}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Service Location", value: "Lahore" },
    { label: "Projects Completed", value: "950+" },
    { label: "Customer Satisfaction", value: "100%" },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{
                transform: isVisible ? "translateY(0px)" : "translateY(25px)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s, opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
              }}
            >
              <span className="text-xs sm:text-sm font-medium text-neutral-600 mb-2">
                {stat.label}
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-neutral-950 tracking-tight leading-none">
                <RollingNumber value={stat.value} isVisible={isVisible} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
