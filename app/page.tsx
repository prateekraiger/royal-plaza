import { Hero } from "@/components/home/hero";
import { Offers } from "@/components/home/offers";
import { FeaturedRooms } from "@/components/home/featured-rooms";
import { Dining } from "@/components/home/dining";
import { Testimonial } from "@/components/home/testimonial";
import { Gallery } from "@/components/home/gallery";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Offers />
      <FeaturedRooms />
      <Dining />
      <Testimonial />
      <Gallery />
      <Newsletter />
    </div>
  );
}
