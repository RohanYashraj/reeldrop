"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useRef } from "react";

export const SyncUser = () => {
  const { user } = useUser();
  const storeUser = useMutation(api.users.storeUser);
  const hasSynced = useRef(false);

  useEffect(() => {
    if (user && !hasSynced.current) {
      const syncUser = async () => {
        try {
          await storeUser({
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress || "",
            name: user.fullName || "",
            imageUrl: user.imageUrl,
          });
          hasSynced.current = true;
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      };
      syncUser();
    }
  }, [user, storeUser]);

  return null;
};
