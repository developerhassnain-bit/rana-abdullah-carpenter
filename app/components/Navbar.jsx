"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Trigger smooth slide down animation from top on initial mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrolling down -> hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } 
      // Scrolling up -> reveal navbar immediately
      else if (currentScrollY < lastScrollY.current || currentScrollY <= 50) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "Our Services", href: "/services", hasDropdown: false },
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Gallery", href: "/gallery", hasDropdown: false },
    { name: "Contact Us", href: "/contact", hasDropdown: false },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLoaded && isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "pt-3 sm:pt-4 px-4 sm:px-8 lg:px-12"
          : "pt-5 sm:pt-7 px-4 sm:px-8 lg:px-12"
      }`}
    >
      <header className={`bg-white w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-12 h-18 sm:h-[80px] flex items-center justify-between pointer-events-auto transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-neutral-100" : "shadow-md"
      }`}>
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[180px] sm:max-w-[220px]"
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] lg:text-[15px] font-semibold text-neutral-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 hover:text-[#8c461d] transition-colors py-1 group"
            >
              <span>{link.name}</span>
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#8c461d] transition-transform duration-200" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right WhatsApp CTA Button (Brown Theme) */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/923261455033"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7a3f1b] hover:bg-[#623113] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 shadow hover:shadow-md cursor-pointer group rounded-none"
          >
            <svg
              className="w-4 h-4 fill-white flex-shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-800 hover:text-[#8c461d]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white max-w-[1680px] mx-auto mt-2 px-6 py-4 shadow-xl border-t border-neutral-100 pointer-events-auto">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-medium text-neutral-800 hover:text-[#8c461d]"
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href="https://wa.me/923261455033"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#7a3f1b] hover:bg-[#623113] text-white text-sm font-bold uppercase tracking-wider py-3 shadow transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
