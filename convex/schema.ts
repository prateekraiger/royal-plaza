import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    externalId: v.string(),
    name: v.string(),
    email: v.string(),
    role: v.union(v.literal("guest"), v.literal("owner"), v.literal("admin"), v.literal("pending")),
  }).index("byExternalId", ["externalId"]),
});
