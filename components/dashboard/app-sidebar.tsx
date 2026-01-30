"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Film,
  Video,
  BookOpen,
  CreditCard,
  Settings,
  Plus,
  Rocket,
  User,
  Play,
} from "lucide-react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Film, label: "Series", href: "/dashboard/series" },
  { icon: Video, label: "Video", href: "/dashboard/videos" },
  { icon: BookOpen, label: "Guides", href: "/dashboard/guides" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
];

export function AppSidebar() {
  const { user } = useUser();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4 border-b border-border/50">
        <Link href="/" className="flex items-center gap-2 px-2 py-4 mb-2 hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold tracking-tighter truncate group-data-[collapsible=icon]:hidden">
            ReelDrop.
          </span>
        </Link>
        <Button className="w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center">

          <Plus className="h-4 w-4 shrink-0" />
          <span className="truncate group-data-[collapsible=icon]:hidden font-semibold">
            Create New Series
          </span>
        </Button>
      </SidebarHeader>

      <SidebarContent className="p-2 pt-6">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild tooltip={item.label} className="h-11 px-4 rounded-xl hover:bg-muted transition-all">
                <Link href={item.href} className="flex items-center gap-4">
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className="font-medium group-data-[collapsible=icon]:hidden">
                    {item.label}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto border-t border-border/50">
        <div className="flex flex-col gap-2">
          <SidebarMenuButton className="h-11 px-4 rounded-xl bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 transition-all">
            <Rocket className="h-5 w-5 shrink-0" />
            <span className="font-semibold group-data-[collapsible=icon]:hidden">
              Upgrade Plan
            </span>
          </SidebarMenuButton>
          <SidebarMenuButton className="h-11 px-4 rounded-xl hover:bg-muted transition-all">
            <User className="h-5 w-5 shrink-0" />
            <span className="font-medium group-data-[collapsible=icon]:hidden">
              Profile Settings
            </span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
