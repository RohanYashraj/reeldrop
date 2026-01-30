import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="text-lg font-bold tracking-tighter">
            ReelDrop.
          </Link>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ReelDrop. AI video generation for modern brands.
          </p>
        </div>

        <div className="flex gap-12">
            <div className="flex flex-col gap-3">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Product</span>
                <Link href="#" className="text-sm hover:text-primary transition-colors">Features</Link>
                <Link href="#" className="text-sm hover:text-primary transition-colors">Pricing</Link>
                <Link href="#" className="text-sm hover:text-primary transition-colors">API</Link>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Company</span>
                <Link href="#" className="text-sm hover:text-primary transition-colors">About</Link>
                <Link href="#" className="text-sm hover:text-primary transition-colors">Blog</Link>
                <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};
