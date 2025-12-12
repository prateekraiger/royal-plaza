"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl text-stone-900 tracking-tight font-playfair font-medium">Visual Journey</h2>
                <div className="flex gap-2">
                    <button className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Minimal Masonry-ish Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px]">
                <div className="col-span-2 row-span-2 relative overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Pool" />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
                </div>
                <div className="col-span-1 row-span-1 relative overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Detail" />
                </div>
                <div className="col-span-1 row-span-2 relative overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hallway" />
                </div>
                <div className="col-span-1 row-span-1 relative overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Champagne" />
                </div>
            </div>
        </div>
    </section>
  );
}
