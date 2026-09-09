"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 pt-3 sm:pt-4">
      <div
        className={`max-w-[1600px] mx-auto rounded-2xl transition-all duration-300 border flex items-center justify-between px-6 sm:px-8 py-3.5 sm:py-4 ${
          isScrolled
            ? "bg-white/92 backdrop-blur-xl border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-md border-neutral-200/50 shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Rana Woodwork"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs lg:text-[13px] uppercase tracking-[0.14em] font-semibold transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#7a3f1b]"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7a3f1b] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Contact & CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+923261455033"
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#7a3f1b]" />
            <span>0326 1455033</span>
          </a>

          <a
            href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20woodwork%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#231710] hover:bg-[#7a3f1b] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>Get Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-[#7a3f1b] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-[1600px] mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-neutral-200/80 rounded-2xl p-5 shadow-xl transition-all">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider font-semibold transition-colors ${
                    isActive
                      ? "bg-[#7a3f1b]/10 text-[#7a3f1b]"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#7a3f1b]" />}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href="https://wa.me/923261455033?text=Assalam%20o%20Alaikum%20Rana%20Abdullah%20Sahib,%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20woodwork%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#7a3f1b] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl"
              >
                <span>WhatsApp: 0326 1455033</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
