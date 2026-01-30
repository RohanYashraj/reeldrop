"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-xs font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          Powered by Advanced AI Video Generation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
        >
          AI Video Generation, <br className="hidden md:block" />
          <span className="text-primary">Autoscheduled.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Generate viral Shorts, Reels, and TikToks in seconds. 
          Schedule across YouTube, Instagram, TikTok, and Email with one click.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full h-12 px-8 text-base font-semibold bg-primary hover:scale-105 transition-transform">
            Start Generating Free
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-semibold border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all">
            <Play className="mr-2 w-4 h-4 fill-current" />
            Watch Product Demo
          </Button>
        </motion.div>

        {/* Hero Visual Block */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl aspect-video max-w-4xl mx-auto overflow-hidden shadow-2xl shadow-blue-500/10"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-muted-foreground flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Play className="w-6 h-6 text-primary fill-current" />
                    </div>
                    <span className="text-sm font-medium">ReelDrop AI Editor Preview</span>
                </div>
            </div>
            {/* Animated gradients inside the preview */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};
