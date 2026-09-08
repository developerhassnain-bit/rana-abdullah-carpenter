"use client";

import React, { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Wood Joinery & Slats",
    imgSrc: "/img1.jpg",
    fallbackGradient: "from-[#8B5A2B] via-[#5C3A21] to-[#3B2219]",
    tag: "Custom Craft",
  },
  {
    id: 2,
    title: "Pergola & Timber Structure",
    imgSrc: "/img2.jpg",
    fallbackGradient: "from-[#4A5568] via-[#2D3748] to-[#1A202C]",
    tag: "Outdoor Living",
  },
  {
    id: 3,
    title: "Timber Interior & Dining",
    imgSrc: "/img3.jpg",
    fallbackGradient: "from-[#C19A6B] via-[#9E7B4F] to-[#6E4F32]",
    tag: "Residential",
  },
  {
    id: 4,
    title: "Vertical Timber Cladding",
    imgSrc: "/img4.jpg",
    fallbackGradient: "from-[#6B4423] via-[#4A2E18] to-[#2E1C0F]",
    tag: "Modern Facade",
  },
  {
    id: 5,
    title: "Handcrafted Architectural Timber",
    imgSrc: "/img5.jpg",
    fallbackGradient: "from-[#7C4A21] via-[#4E2D13] to-[#261508]",
    tag: "Artisanal",
  },
];

function SliderCard({ item }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative group flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] aspect-[3/4] overflow-hidden bg-neutral-100 select-none">
      {/* Real Image from public folder */}
      {!error && (
        <img
          src={item.imgSrc}
          alt={item.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={() => setError(true)}
        />
      )}

      {/* Elegant Fallback if image file is being uploaded */}
      {error && (
        <div
          className={`w-full h-full bg-gradient-to-br ${item.fallbackGradient} p-6 flex flex-col justify-between text-white relative`}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded">
              {item.tag}
            </span>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-white/70">
              Place <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-300 font-mono">{item.imgSrc}</code> in public/
            </p>
          </div>
        </div>
      )}

      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default function ShowcaseGallery() {
  // We duplicate items to create a seamless, infinite loop marquee
  const infiniteList = [...galleryItems, ...galleryItems];

  return (
    <section id="gallery" className="w-full bg-white pb-0 overflow-hidden">
      
      {/* Continuous Auto-Scrolling Infinite Slider */}
      <div className="w-full overflow-hidden relative">
        {/* Subtle side fade gradients for premium feel */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-infinite-slider flex gap-4 sm:gap-6 py-2">
          {infiniteList.map((item, index) => (
            <SliderCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
}
