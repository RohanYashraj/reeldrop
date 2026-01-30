"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Music2, Mail, Share2 } from "lucide-react";

const platforms = [
  { name: "YouTube Shorts", icon: <Youtube className="w-8 h-8 text-[#FF0000]" />, color: "hover:bg-[#FF0000]/10" },
  { name: "Instagram Reels", icon: <Instagram className="w-8 h-8 text-[#E4405F]" />, color: "hover:bg-[#E4405F]/10" },
  { name: "TikTok", icon: <Music2 className="w-8 h-8 text-foreground" />, color: "hover:bg-foreground/10" },
  { name: "Email Marketing", icon: <Mail className="w-8 h-8 text-blue-500" />, color: "hover:bg-blue-500/10" },
];

export const Platforms = () => {
  return (
    <section id="platforms" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6"
             >
                <Share2 className="w-3 h-3" /> 多平台
             </motion.div>
             <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
             >
                One Video, <br className="hidden md:block" /> Every Platform.
             </motion.h2>
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-lg mb-8"
             >
                Scale your presence across YouTube, Instagram, TikTok, and even Email campaigns without breaking a sweat.
             </motion.p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border border-border/50 bg-background flex flex-col items-center justify-center gap-4 transition-all ${platform.color} cursor-pointer group`}
              >
                <div className="group-hover:scale-110 transition-transform">
                    {platform.icon}
                </div>
                <span className="text-sm font-bold">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
