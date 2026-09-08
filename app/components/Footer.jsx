"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#17120f] text-white border-t border-white/10 pt-20 sm:pt-28 pb-12">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-14 pb-16 sm:pb-20 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center mb-6 group">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[220px]"
              />
            </Link>

            <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              Crafting timeless architectural woodwork, bespoke furniture, and fine timber floors with generational expertise and sustainable heritage.
            </p>

            {/* Social Links with inline SVGs */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#7a3f1b] border border-white/10 flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#7a3f1b] border border-white/10 flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#7a3f1b] border border-white/10 flex items-center justify-center text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li><Link href="/" className="hover:text-[#d4a373] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#d4a373] transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-[#d4a373] transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-[#d4a373] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4a373] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services (2.5 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Specialties
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li><Link href="#services" className="hover:text-[#d4a373] transition-colors">Furniture Making</Link></li>
              <li><Link href="#services" className="hover:text-[#d4a373] transition-colors">Kitchen Cabinets</Link></li>
              <li><Link href="#services" className="hover:text-[#d4a373] transition-colors">Door and Wood Repair</Link></li>
              <li><Link href="#services" className="hover:text-[#d4a373] transition-colors">Custom Wood Work</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Stay Connected
            </h4>
            <p className="text-xs sm:text-sm text-white/65 mb-4">
              Receive updates on our latest woodwork collections and architectural insights.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-3 focus:outline-none focus:border-[#7a3f1b]"
              />
              <button
                type="submit"
                className="bg-[#7a3f1b] hover:bg-[#623113] text-white px-5 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="space-y-2 text-xs text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a373] mt-0.5 flex-shrink-0" />
                <span>Muhammad Hussain Road, Ameer Chowk Near The Trust School, Green Town, Lahore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4a373] flex-shrink-0" />
                <a href="tel:+923261455033" className="hover:text-white transition-colors">0326 1455033</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Rana Abdullah — Professional Carpenter. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
