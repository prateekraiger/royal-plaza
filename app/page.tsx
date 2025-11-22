import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] bg-muted">
        <div className="absolute inset-0 overflow-hidden">
           {/* Placeholder for Hero Image - using a gradient for now */}
           <div className="w-full h-full bg-gradient-to-r from-slate-900 to-slate-700 opacity-90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Experience Luxury Like Never Before
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover a sanctuary of peace and elegance in the heart of the city. Your perfect getaway awaits at Dwell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Rooms
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dwell?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Premium Comfort", description: "Designed for your ultimate relaxation with top-tier amenities." },
                    { title: "Exquisite Dining", description: "Savor culinary masterpieces crafted by world-class chefs." },
                    { title: "Prime Location", description: "Located in the center of it all, yet a world away from the noise." }
                ].map((feature, index) => (
                    <div key={index} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
