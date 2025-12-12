"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Fetch user data from Convex to check role
  const userData = useQuery(
    api.users.getUser,
    user ? { externalId: user.id } : "skip"
  );

  useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (isLoaded && !user) {
      router.push("/sign-in");
      return;
    }

    // Redirect to rooms if user doesn't have owner or admin role
    if (userData !== undefined && userData?.role !== "owner" && userData?.role !== "admin") {
      router.push("/rooms");
    }
  }, [isLoaded, user, userData, router]);

  // Show loading state while checking authentication and role
  if (!isLoaded || !user || userData === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if user is not owner or admin
  if (!userData || (userData.role !== "owner" && userData.role !== "admin")) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-[calc(100vh-8rem)] pt-24">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="sticky top-16 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-lg font-semibold">Owner Dashboard</h1>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
