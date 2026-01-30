import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Platforms } from "@/components/Platforms";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Platforms />
        {/* Scheduling detail section - can be expanded later */}
        <section id="scheduling" className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center border border-primary/20 bg-primary/5 rounded-3xl p-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Autoschedule like a pro.</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    ReelDrop's AI analyzes the best times to post for your specific audience. 
                    Just upload or generate, and we'll handle the timing.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-6 py-3 bg-background rounded-full border border-border/50 font-medium">Daily AI Generation</div>
                    <div className="px-6 py-3 bg-background rounded-full border border-border/50 font-medium">Auto-Captions</div>
                    <div className="px-6 py-3 bg-background rounded-full border border-border/50 font-medium">Viral Analytics</div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
