"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Dining() {
  return (
    <section className="py-24 bg-white text-stone-900">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center mb-16">
                <span className="text-stone-400 text-xs tracking-widest uppercase mb-3">Gastronomy</span>
                <h2 className="text-4xl text-center tracking-tight mb-4 font-playfair font-medium">Culinary Excellence</h2>
                <div className="w-12 h-[1px] bg-stone-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Dining 1 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden aspect-[3/4] mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-medium serif tracking-tight mb-1 group-hover:text-amber-700 transition-colors">Le Jardin</h3>
                        <p className="text-xs text-stone-500 uppercase tracking-widest">French Gastronomy</p>
                    </div>
                </div>

                {/* Dining 2 */}
                <div className="group cursor-pointer mt-0 md:-mt-12">
                    <div className="overflow-hidden aspect-[3/4] mb-6 relative">
                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" alt="Cocktails" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-medium serif tracking-tight mb-1 group-hover:text-amber-700 transition-colors">The Azure Lounge</h3>
                        <p className="text-xs text-stone-500 uppercase tracking-widest">Cocktails & Jazz</p>
                    </div>
                </div>

                {/* Dining 3 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden aspect-[3/4] mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" alt="Sushi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-medium serif tracking-tight mb-1 group-hover:text-amber-700 transition-colors">Kintsugi</h3>
                        <p className="text-xs text-stone-500 uppercase tracking-widest">Omakase Experience</p>
                    </div>
                </div>

            </div>

            <div className="text-center mt-12">
                <Link href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
                    Explore All Venues
                    <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>
        </div>
    </section>
  );
}
