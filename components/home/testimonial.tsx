"use client";

import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Quote className="text-stone-700 mb-8 mx-auto w-8 h-8" />
            <h2 className="text-3xl md:text-5xl serif leading-snug tracking-tight mb-8 font-playfair font-medium">
                "An unforgettable stay where every detail was meticulously crafted. The service at Royal Plaza is not just attentive, it is intuitive."
            </h2>
            <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-stone-700 mb-4"></div>
                <span className="text-sm font-medium tracking-wide">Victoria H.</span>
                <span className="text-xs text-stone-500 mt-1 uppercase tracking-widest">London, UK</span>
            </div>
        </div>
    </section>
  );
}
