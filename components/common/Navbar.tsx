"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 relative">
        {/* Left: Logo */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">
              DWELL
            </span>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
        </nav>

        {/* Mobile Logo */}
        <div className="flex md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight">DWELL</span>
            </Link>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center justify-end space-x-4 flex-1 md:flex-none">
            <SignedOut>
              <Link href="/sign-in">
                <button className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-accent h-10 px-4 py-2">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Sign Up
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Toggle */}
            <button
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/70 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <div className="px-3 py-2 space-y-2">
                <SignedOut>
                    <Link href="/sign-in">
                        <button className="w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-accent h-10 px-4 py-2 border">
                            Sign In
                        </button>
                    </Link>
                    <Link href="/sign-up">
                        <button className="w-full items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Sign Up
                        </button>
                    </Link>
                </SignedOut>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}
