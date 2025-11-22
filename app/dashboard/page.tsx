"use client";

import { useState, useEffect } from "react";
import { Building2, Calendar, Home, LayoutDashboard, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Building2, label: "My Hotels", active: false },
  { icon: Calendar, label: "Bookings", active: false },
  { icon: Users, label: "Guests", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("Overview");
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user) {
    return null;
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white hidden md:block">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Owner Dashboard</h2>
        </div>
        <nav className="space-y-1 px-3">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeItem === item.label
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{activeItem}</h1>
          <p className="text-gray-500">Welcome back to your dashboard.</p>
        </div>

        {/* Dummy Content */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Properties</p>
                <h3 className="text-2xl font-bold text-gray-900">3</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-100 p-3 text-green-600">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Bookings</p>
                <h3 className="text-2xl font-bold text-gray-900">12</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Guests</p>
                <h3 className="text-2xl font-bold text-gray-900">1,248</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100" />
                  <div>
                    <p className="font-medium text-gray-900">New booking received</p>
                    <p className="text-sm text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600">+$350.00</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
