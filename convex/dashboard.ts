import { query } from "./_generated/server";

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return {
        totalHotels: 0,
        totalBookings: 0,
        totalGuests: 0,
        totalRevenue: 0,
      };
    }

    const user = await ctx.db
      .query("users")
      .withIndex("byExternalId", (q) => q.eq("externalId", identity.subject))
      .unique();

    if (!user || (user.role !== "owner" && user.role !== "admin")) {
      return {
        totalHotels: 0,
        totalBookings: 0,
        totalGuests: 0,
        totalRevenue: 0,
      };
    }

    const rooms = await ctx.db
      .query("rooms")
      .withIndex("by_ownerId", (q) => q.eq("ownerId", user._id))
      .collect();

    const roomPrices = new Map(rooms.map((r) => [r._id, r.pricePerNight]));

    let totalBookings = 0;
    let totalRevenue = 0;

    for (const room of rooms) {
      const bookings = await ctx.db
        .query("bookings")
        .withIndex("by_roomId", (q) => q.eq("roomId", room._id))
        .filter((q) => q.eq(q.field("status"), "confirmed"))
        .collect();

      totalBookings += bookings.length;

      for (const booking of bookings) {
        const nights = Math.ceil(
          (booking.checkOut - booking.checkIn) / (1000 * 60 * 60 * 24)
        );
        const price = roomPrices.get(booking.roomId) || 0;
        totalRevenue += price * Math.max(1, nights);
      }
    }

    return {
      totalHotels: rooms.length,
      totalBookings,
      totalGuests: totalBookings, // Using bookings count as proxy for check-ins
      totalRevenue,
    };
  },
});
