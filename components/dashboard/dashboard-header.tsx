"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        <h1 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <UserButton 
            afterSignOutUrl="/"
            appearance={{
                elements: {
                    userButtonAvatarBox: "h-9 w-9 border border-border/50"
                }
            }}
        />
      </div>
    </header>
  );
}
