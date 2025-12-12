"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Wifi, Maximize, Coffee, Bath, Users, GlassWater, ConciergeBell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedRooms() {
  const rooms = useQuery(api.rooms.get, {});

  // Decide what to show. If data is loading or empty, we'll show static mockups to match the request "change static things ... all rooms".
  // Actually, request says "u can use this below template code ... turn them into a react proper page with current functionality like login sign in sign up and all rooms".
  // So I should ideally show real rooms if available.

  const showStatic = !rooms || rooms.length === 0;

  return (
    <section id="rooms" className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-stone-500 text-xs tracking-widest uppercase block mb-3">Accommodation</span>
                <h2 className="text-4xl md:text-5xl text-stone-900 tracking-tight mb-6 font-playfair font-medium">Sanctuaries of Serenity</h2>
                <p className="text-stone-500 text-sm font-light leading-relaxed">Designed with an emphasis on comfort and refined aesthetics, our rooms and suites offer a peaceful retreat from the vibrant city energy.</p>
            </div>

            <div className="space-y-24">
                {/* Room 1 - Static or Dynamic */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={showStatic ? "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" : rooms?.[0]?.photos?.[0] || "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"} alt="Deluxe Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="lg:pl-10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-stone-900 text-2xl serif font-playfair font-medium">01</span>
                            <div className="h-[1px] w-12 bg-stone-300"></div>
                        </div>
                        <h3 className="text-3xl text-stone-900 mb-4 font-playfair font-medium">{showStatic ? "Grand Deluxe Room" : rooms?.[0]?.title}</h3>
                        <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
                            {showStatic ? "A spacious 45sqm haven featuring floor-to-ceiling windows with panoramic city views, a king-sized bed wrapped in 400-thread-count linens, and a marble bathroom." : rooms?.[0]?.description}
                        </p>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                            <div className="flex items-center gap-3 text-stone-600">
                                <Wifi className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">High-Speed Wifi</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <Maximize className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">45 SQM</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <Coffee className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">Espresso Machine</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <Bath className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">Rain Shower</span>
                            </div>
                        </div>
                        <Button variant="outline" className="text-xs tracking-widest uppercase text-stone-900 border-stone-200 px-6 py-6 hover:bg-stone-900 hover:text-white transition-colors rounded-none">
                            View Details
                        </Button>
                    </div>
                </div>

                {/* Room 2 (Reversed) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2 relative aspect-[4/3] overflow-hidden">
                        <img src={showStatic ? "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" : rooms?.[1]?.photos?.[0] || "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"} alt="Royal Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="lg:order-1 lg:pr-10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-stone-900 text-2xl serif font-playfair font-medium">02</span>
                            <div className="h-[1px] w-12 bg-stone-300"></div>
                        </div>
                        <h3 className="text-3xl text-stone-900 mb-4 font-playfair font-medium">{showStatic ? "The Royal Plaza Suite" : rooms?.[1]?.title || "The Royal Plaza Suite"}</h3>
                        <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
                             {showStatic ? "Our signature suite defines luxury living. Featuring a separate living area, private dining room, and butler service, it is the ultimate expression of the Royal Plaza experience." : rooms?.[1]?.description || "Experience luxury."}
                        </p>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                            <div className="flex items-center gap-3 text-stone-600">
                                <Users className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">Up to 4 Guests</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <Maximize className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">120 SQM</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <GlassWater className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">Private Bar</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <ConciergeBell className="w-4 h-4" strokeWidth={1.5} />
                                <span className="text-xs tracking-wide uppercase">Butler Service</span>
                            </div>
                        </div>
                        <Button variant="outline" className="text-xs tracking-widest uppercase text-stone-900 border-stone-200 px-6 py-6 hover:bg-stone-900 hover:text-white transition-colors rounded-none">
                            View Details
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
