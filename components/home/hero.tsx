"use client";

import { Calendar, Users, Bed, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/47/2a/dd/472add28786aa328599861a37a1371ab.jpg"
          alt="Luxury Interior"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-[20s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col justify-between">

        {/* Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
          {/* Left: Big Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center h-full">
            <div className="relative">
              <span className="block text-stone-300 text-xs tracking-[0.3em] uppercase mb-6 pl-1 animate-[fadeIn_1s_ease-out]">Paris, France</span>
              <h1 className="text-[5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.85] text-stone-100 tracking-tighter mix-blend-overlay">
                <span className="block font-playfair font-medium">BEYOND</span>
                <span className="block serif ml-12 md:ml-24 text-white opacity-90 font-playfair font-medium">EXPECTATION</span>
              </h1>
            </div>
          </div>

          {/* Right: Metadata */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-end h-full pb-32 items-end text-right">
            <div className="glass-panel p-6 rounded-2xl max-w-xs">
              <div className="flex items-center justify-end gap-3 mb-4 text-stone-300 border-b border-white/10 pb-4">
                 {/* CloudSun icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/></svg>
                <span className="text-sm font-medium">18°C</span>
                <span className="text-xs uppercase tracking-wider text-stone-500">Partly Cloudy</span>
              </div>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                An sanctuary of tranquility in the heart of the city. Where timeless heritage meets contemporary luxury.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Floating Booking Bar (Island Style) */}
        <div className="w-full flex justify-center pb-8">
          <div className="glass-panel p-1.5 rounded-full flex flex-col md:flex-row items-center gap-1 shadow-2xl shadow-black/20 w-full max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">

            {/* Location/Check In */}
            <div className="relative group px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer flex-1 w-full md:w-auto border-b md:border-b-0 border-white/5 md:border-r">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-400 mb-0.5 cursor-pointer">
                <Calendar className="w-3 h-3" /> Dates
              </label>
              <div className="text-sm text-stone-100 font-medium whitespace-nowrap">Oct 24 — Oct 28</div>
            </div>

            {/* Guests */}
            <div className="relative group px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer flex-1 w-full md:w-auto border-b md:border-b-0 border-white/5 md:border-r">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-400 mb-0.5 cursor-pointer">
                <Users className="w-3 h-3" /> Guests
              </label>
              <div className="text-sm text-stone-100 font-medium whitespace-nowrap">2 Adults, 0 Children</div>
            </div>

            {/* Room Type */}
            <div className="relative group px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer flex-1 w-full md:w-auto">
              <label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-400 mb-0.5 cursor-pointer">
                <Bed className="w-3 h-3" /> Suite
              </label>
              <div className="text-sm text-stone-100 font-medium whitespace-nowrap">Any Suite</div>
            </div>

            {/* Action */}
            <Button className="w-full md:w-auto bg-stone-100 text-stone-900 rounded-full pl-6 pr-6 py-6 md:py-6 flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] border-none">
              <span className="text-xs tracking-widest uppercase font-semibold">Search</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-stone-500 to-transparent"></div>
      </div>
    </header>
  );
}
