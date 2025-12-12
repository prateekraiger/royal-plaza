"use client";

import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="max-w-xl mx-auto px-6 text-center">
            <span className="text-xs text-stone-500 uppercase tracking-widest mb-3 block">Stay Connected</span>
            <h2 className="text-3xl serif mb-6 text-stone-900 font-playfair font-medium">Unlock Exclusive Privileges</h2>
            <p className="text-sm text-stone-500 font-light mb-8">Subscribe to receive seasonal offers and news from Royal Plaza directly to your inbox.</p>

            <form className="flex flex-col sm:flex-row gap-0 sm:border-b border-stone-300 pb-1" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" className="bg-transparent py-3 px-2 w-full outline-none text-stone-900 placeholder-stone-400 text-sm border-b sm:border-0 border-stone-300 mb-4 sm:mb-0" />
                <Button type="submit" className="whitespace-nowrap py-3 px-6 text-xs uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors bg-transparent shadow-none border-none hover:bg-transparent">
                    Subscribe
                </Button>
            </form>
        </div>
    </section>
  );
}
