import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const upsertUser = mutation({
  args: {
    externalId: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("byExternalId", (q) => q.eq("externalId", args.externalId))
      .unique();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        name: args.name,
        email: args.email,
      });
      return existingUser._id;
    }

    return await ctx.db.insert("users", {
      externalId: args.externalId,
      name: args.name,
      email: args.email,
      role: "guest",
    });
  },
});
