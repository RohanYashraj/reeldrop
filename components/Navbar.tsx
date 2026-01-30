"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70 border-b border-border/40"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          ReelDrop.
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <Link href="#features" className="hover:text-foreground transition-colors">
          Features
        </Link>
        <Link href="#platforms" className="hover:text-foreground transition-colors">
          Platforms
        </Link>
        <Link href="#scheduling" className="hover:text-foreground transition-colors">
          Scheduling
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium hover:text-foreground transition-colors hidden sm:block"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
};
