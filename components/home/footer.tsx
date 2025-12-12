"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 text-sm font-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="serif text-2xl text-stone-100 tracking-tighter mb-6 font-playfair font-medium">ROYAL PLAZA</h3>
            <p className="leading-relaxed mb-6">
              128 Rue du Faubourg<br />
              75008 Paris, France
            </p>
            <div className="flex flex-col gap-1">
              <a href="tel:+33140000000" className="hover:text-stone-200 transition-colors">+33 1 40 00 00 00</a>
              <a href="mailto:concierge@royalplaza.com" className="hover:text-stone-200 transition-colors">concierge@royalplaza.com</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-stone-100 uppercase text-[10px] tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/rooms" className="hover:text-stone-200 transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/#dining" className="hover:text-stone-200 transition-colors">Dining</Link></li>
              <li><Link href="#" className="hover:text-stone-200 transition-colors">Wellness & Spa</Link></li>
              <li><Link href="#" className="hover:text-stone-200 transition-colors">Meetings & Events</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-stone-100 uppercase text-[10px] tracking-widest mb-6">Information</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-stone-200 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-stone-200 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-stone-200 transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-stone-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div>
            <h4 className="text-stone-100 uppercase text-[10px] tracking-widest mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <Link href="#" className="hover:text-stone-200 transition-colors"><Instagram className="w-[18px]" /></Link>
              <Link href="#" className="hover:text-stone-200 transition-colors"><Facebook className="w-[18px]" /></Link>
              <Link href="#" className="hover:text-stone-200 transition-colors"><Twitter className="w-[18px]" /></Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2023 Royal Plaza Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-stone-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
