import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const storeUser = mutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        imageUrl: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique();

        if (existingUser) {
            // Update existing user info
            await ctx.db.patch(existingUser._id, {
                email: args.email,
                name: args.name,
                imageUrl: args.imageUrl,
            });
            return existingUser._id;
        }

        // Create new user
        return await ctx.db.insert("users", {
            clerkId: args.clerkId,
            email: args.email,
            name: args.name,
            imageUrl: args.imageUrl,
        });
    },
});
