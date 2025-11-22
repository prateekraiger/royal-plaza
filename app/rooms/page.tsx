import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Deluxe King Suite",
    description: "Spacious suite with a king-sized bed and city views.",
    price: "$299/night",
    features: ["King Bed", "City View", "Free Wi-Fi", "Breakfast Included"],
  },
  {
    id: 2,
    name: "Ocean View Twin",
    description: "Twin beds with a breathtaking view of the ocean.",
    price: "$249/night",
    features: ["2 Twin Beds", "Ocean View", "Balcony", "Mini Bar"],
  },
  {
    id: 3,
    name: "Presidential Penthouse",
    description: "The ultimate luxury experience on the top floor.",
    price: "$899/night",
    features: ["Master Bedroom", "Private Pool", "Butler Service", "Panoramic View"],
  },
  {
    id: 4,
    name: "Standard Queen",
    description: "Comfortable and cozy room for a perfect stay.",
    price: "$199/night",
    features: ["Queen Bed", "Garden View", "Smart TV", "Work Desk"],
  },
];

export default function RoomsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Rooms & Suites</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our collection of elegantly designed rooms, each offering a unique blend of comfort and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full bg-muted relative overflow-hidden">
                {/* Placeholder for room image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                    Image Placeholder
                </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.features.map((feature, index) => (
                    <span key={index} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {feature}
                    </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-primary">{room.price}</span>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
