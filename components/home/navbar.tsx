"use client";

import Link from "next/link";
import { User, Calendar } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-stone-900/0 hover:bg-stone-900/80 hover:backdrop-blur-md group">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="serif text-2xl tracking-tighter text-white relative z-10 mix-blend-difference font-playfair font-medium transition-all duration-100 ease-in-out">
            ROYAL PLAZA
          </Link>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-300">
            <Link href="/rooms" className="hover:text-white transition-colors hover:outline-2 hover:outline-offset-2">Suites</Link>
            <Link href="/#dining" className="hover:text-white transition-colors">Dining</Link>
            <Link href="/#offers" className="hover:text-white transition-colors">Offers</Link>
            <Link href="/#gallery" className="hover:text-white transition-colors">Gallery</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {!isSignedIn && (
             <Link href="/sign-in" className="hidden md:flex items-center gap-2 text-xs tracking-wide text-white hover:text-stone-300 transition-colors">
               <User className="w-4 h-4" strokeWidth={1.5} />
               <span>Sign In</span>
             </Link>
          )}
           {isSignedIn && (
             <Link href="/dashboard" className="hidden md:flex items-center gap-2 text-xs tracking-wide text-white hover:text-stone-300 transition-colors">
               <User className="w-4 h-4" strokeWidth={1.5} />
               <span>Dashboard</span>
             </Link>
          )}
          <Button asChild className="bg-white text-stone-900 px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors font-medium rounded-none border-none">
             <Link href="/rooms">Reserve</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
