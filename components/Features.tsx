"use client";

import { motion } from "framer-motion";
import { Zap, Calendar, Rocket, Layout, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "AI Video Generation",
    description: "Convert text or long videos into viral-ready shorts using advanced AI models.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "Instant Autoscheduling",
    description: "Set your posting schedule once and let ReelDrop handle the rest across all platforms.",
  },
  {
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    title: "Smart Layouts",
    description: "Auto-captioning and smart cropping ensuring your content looks perfect on mobile.",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    title: "Multi-Platform Sync",
    description: "One-click deployment to YouTube Shorts, Instagram Reels, TikTok, and more.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Everything you need for viral growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Stop spending hours editing and scheduling. ReelDrop automates the entire process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/20 transition-all group"
            >
              <div className="mb-4 bg-background/50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
