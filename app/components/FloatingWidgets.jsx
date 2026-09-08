"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-[#231710] hover:bg-[#7a3f1b] text-white flex items-center justify-center shadow-xl border border-white/10 transition-all duration-300 hover:scale-105 cursor-pointer rounded-sm"
      title="Back to top"
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
