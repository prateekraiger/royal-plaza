"use client";

import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { isSignedIn } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-stone-900/90 backdrop-blur-md border-white/5 py-2"
          : "bg-transparent py-4 hover:bg-stone-900/90 hover:backdrop-blur-md hover:border-white/5"
      )}
    >
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link
            href="/"
            className="serif text-2xl tracking-tighter text-white relative z-10 mix-blend-difference font-playfair font-medium transition-all duration-100 ease-in-out"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ROYAL PLAZA
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-300">
            <Link
              href="/rooms"
              className="hover:text-white transition-colors hover:outline-2 hover:outline-offset-2"
            >
              Suites
            </Link>
            <Link
              href="/#dining"
              className="hover:text-white transition-colors"
            >
              Dining
            </Link>
            <Link
              href="/#offers"
              className="hover:text-white transition-colors"
            >
              Offers
            </Link>
            <Link
              href="/#gallery"
              className="hover:text-white transition-colors"
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          {!isSignedIn && (
            <Link
              href="/sign-in"
              className="flex items-center gap-2 text-xs tracking-wide text-white hover:text-stone-300 transition-colors"
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
              <span>Sign In</span>
            </Link>
          )}
          {isSignedIn && (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-xs tracking-wide text-white hover:text-stone-300 transition-colors"
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
              <span>Dashboard</span>
            </Link>
          )}
          <Button
            asChild
            className="bg-white text-stone-900 px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors font-medium rounded-none border-none"
          >
            <Link href="/rooms">Reserve</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-900 border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <Link
            href="/rooms"
            className="text-stone-300 hover:text-white text-sm uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Suites
          </Link>
          <Link
            href="/#dining"
            className="text-stone-300 hover:text-white text-sm uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dining
          </Link>
          <Link
            href="/#offers"
            className="text-stone-300 hover:text-white text-sm uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Offers
          </Link>
          <Link
            href="/#gallery"
            className="text-stone-300 hover:text-white text-sm uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <div className="h-px bg-white/10 my-1" />
           {!isSignedIn && (
            <Link
              href="/sign-in"
              className="flex items-center gap-2 text-stone-300 hover:text-white text-sm uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
              <span>Sign In</span>
            </Link>
          )}
          {isSignedIn && (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-stone-300 hover:text-white text-sm uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
              <span>Dashboard</span>
            </Link>
           )}
           <Button
            asChild
            className="bg-white text-stone-900 w-full py-6 text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors font-medium rounded-none border-none"
          >
            <Link href="/rooms" onClick={() => setIsMobileMenuOpen(false)}>Reserve Now</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
