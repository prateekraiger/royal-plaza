export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
          Have a question or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground">
              123 Luxury Lane<br />
              Metropolis, NY 10012<br />
              United States
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground">
              +1 (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground">
              concierge@dwell-hotel.com
            </p>
          </div>
          <div className="pt-8">
             <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Map Placeholder
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Message
              </label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
