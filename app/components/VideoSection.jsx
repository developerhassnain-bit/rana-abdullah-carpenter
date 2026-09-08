"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full bg-[#1c1816] relative overflow-hidden">
      
      {/* Full-width Video Container */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[420px] md:min-h-[560px] lg:min-h-[640px] flex items-center justify-center bg-black">
        
        {!hasError ? (
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4d2d18] via-[#2a170b] to-[#0f0703] flex flex-col items-center justify-center p-8 text-center text-white relative">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative z-10 max-w-lg">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-300 px-3 py-1 bg-black/40 rounded inline-block mb-3">
                Cinematic Woodworking Video
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Craftsmanship In Motion
              </h3>
              <p className="text-sm text-white/70">
                Place <code className="bg-black/60 px-2 py-0.5 rounded text-amber-300 font-mono">/video.mp4</code> in the <code className="text-amber-200">public/</code> directory to display your video.
              </p>
            </div>
          </div>
        )}

        {/* Subtle Dark Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Interactive Controls Overlay */}
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 z-20 flex items-center gap-3">
          {/* Mute Toggle Button */}
          <button
            onClick={toggleMute}
            className="w-11 h-11 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 transition-all duration-200 cursor-pointer"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 stroke-[2]" />
            ) : (
              <Volume2 className="w-5 h-5 stroke-[2]" />
            )}
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={togglePlay}
            className="w-11 h-11 sm:w-12 sm:h-12 bg-[#7a3f1b] hover:bg-[#623113] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-white stroke-none" />
            ) : (
              <Play className="w-5 h-5 fill-white stroke-none ml-0.5" />
            )}
          </button>
        </div>

      </div>

    </section>
  );
}
