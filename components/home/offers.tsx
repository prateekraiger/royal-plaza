"use client";

import { ArrowRight, Sparkles, ArrowUpRight, Gem, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Offers() {
  return (
    <section className="bg-white pt-24 pb-32 overflow-hidden" id="offers">
        <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-stone-900 animate-pulse"></div>
                        <span className="text-stone-500 text-xs tracking-widest uppercase">Seasonal Curations</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl text-stone-900 tracking-tighter leading-[0.9] font-playfair font-medium">
                        Exclusive <span className="serif text-stone-400 font-playfair font-medium">Experiences</span>
                    </h2>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-stone-500 text-xs max-w-xs text-right hidden md:block leading-relaxed">
                        Immerse yourself in carefully crafted packages designed to elevate your stay beyond the ordinary.
                    </p>
                    <Link href="#" className="group flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 hover:bg-stone-900 hover:border-stone-900 transition-all duration-300">
                        <ArrowRight className="text-stone-900 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 transform duration-300 w-[18px]" />
                    </Link>
                </div>
            </div>

            {/* Asymmetrical Modern Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[600px]">

                {/* Main Feature (Vertical) */}
                <div className="lg:col-span-1 relative group rounded-2xl overflow-hidden cursor-pointer h-[500px] lg:h-full">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Spa Wellness" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6 glass-badge px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Sparkles className="text-white w-3 h-3" />
                        <span className="text-[10px] font-medium tracking-widest uppercase text-white">Most Popular</span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl text-white mb-2 leading-tight font-playfair font-medium">The Royal <span className="serif font-playfair font-medium">Sanctuary</span></h3>
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                            <p className="text-stone-300 text-sm font-light leading-relaxed mb-6 pt-2 border-t border-white/20">
                                Rejuvenate with a daily 60-minute massage, private yoga session, and organic breakfast in bed.
                            </p>
                            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity">
                                Book This Offer <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Secondary Grid (Stacked) */}
                <div className="lg:col-span-2 grid grid-rows-2 gap-4 h-[500px] lg:h-full">

                    {/* Top Wide Item */}
                    <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Dining" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/50 transition-colors"></div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-center items-start">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 border border-white/20 px-2 py-1 mb-4 rounded backdrop-blur-md">Gastronomy</span>
                            <h3 className="text-3xl md:text-4xl text-white tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500 font-playfair font-medium">Taste of <span className="serif font-playfair font-medium">Gold</span></h3>
                            <p className="text-stone-200 text-sm font-light max-w-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                Experience a five-course tasting menu at The Azure Lounge with curated wine pairings.
                            </p>
                        </div>

                        {/* Corner Arrow */}
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                            <ArrowUpRight className="text-white w-3.5 h-3.5" />
                        </div>
                    </div>

                    {/* Bottom Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Box 1 */}
                        <div className="relative group rounded-2xl overflow-hidden bg-stone-100 cursor-pointer">
                            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="text-5xl text-stone-200 serif group-hover:text-stone-300 transition-colors font-playfair font-medium">03</span>
                                    <Gem className="text-stone-400 group-hover:text-stone-900 transition-colors w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl text-stone-900 font-medium mb-1">Suite Dreams</h4>
                                    <p className="text-xs text-stone-500 leading-relaxed mb-4">Stay 3 nights, pay for 2 in any of our Signature Suites.</p>
                                    <span className="text-[10px] uppercase tracking-wider text-stone-900 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Check Availability <ChevronRight className="w-2.5 h-2.5" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl from-stone-200 to-transparent rounded-tl-full opacity-50"></div>
                        </div>

                        {/* Box 2 (Image) */}
                        <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="City View" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-badge p-3 rounded-xl flex items-center justify-between group-hover:bg-white group-hover:text-stone-900 transition-colors duration-300">
                                    <span className="text-xs font-medium text-white group-hover:text-stone-900">Parisian Weekend</span>
                                    <ArrowRight className="text-white group-hover:text-stone-900 w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Ticker Bottom */}
            <div className="mt-4 overflow-hidden py-2 border-t border-stone-100">
                 <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span> Limited Time Offer: Complimetary Champagne on Arrival
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span> Member Exclusive: Double Points on Weekends
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span> Early Bird: 15% Off for Summer Bookings
                    </span>
                     <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span> Limited Time Offer: Complimetary Champagne on Arrival
                    </span>
                </div>
            </div>
        </div>
    </section>
  );
}
