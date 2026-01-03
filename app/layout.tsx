import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import { UserSync } from "@/components/auth/UserSync";
import { RoleCheck } from "@/components/auth/RoleCheck";
import { Navbar } from "@/components/home/navbar"; // Using the new Navbar
import { Footer } from "@/components/home/footer"; // Using the new Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant"
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Royal Plaza | Luxury Hotel & Resort",
  description: "Experience the pinnacle of luxury at Royal Plaza. Unforgettable stays, world-class dining, and timeless elegance await.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          {/* <link rel="icon" href="/dwell.png" /> */}
        </head>
        <body
           className={`${inter.variable} ${cormorant.variable} ${playfair.variable} antialiased bg-stone-50 text-stone-600`}
        >
          <div className="flex min-h-screen flex-col font-normal">
             <UserSync />
             <RoleCheck />
             {/* Navbar will be inside page or we use the new Navbar component everywhere?
                 The template has a fixed navbar. The original layout had Navbar and Footer.
                 I'll add the new Navbar and Footer here, but comment out the old ones if I'm replacing them.
                 However, the implementation plan said NEW components/home/navbar.tsx.
                 If I put it here, it will be on every page, which is likely desired for a hotel site.
             */}
             <Navbar />
             <main className="flex-1">{children}</main>
             <Footer />
             <Toaster />
          </div>
        </body>
      </html>
    </ConvexClientProvider>
  );
}
