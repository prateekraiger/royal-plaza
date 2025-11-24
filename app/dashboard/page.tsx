"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, IndianRupee, Users } from "lucide-react";
import { BookingsCard } from "@/components/dashboard/bookings-card";

export default function DashboardPage() {
  const stats = useQuery(api.dashboard.getStats);

  const statCards = [
    {
      title: "Total Hotels",
      value: stats?.totalHotels ?? 0,
      icon: Building2,
      description: "Active properties listed",
    },
    {
      title: "Total Bookings",
      value: stats?.totalBookings ?? 0,
      icon: Calendar,
      description: "Confirmed bookings",
    },
    {
      title: "Total Guests",
      value: stats?.totalGuests ?? 0,
      icon: Users,
      description: "Total check-ins",
    },
    {
      title: "Total Revenue",
      value: `₹${stats?.totalRevenue?.toLocaleString() ?? 0}`,
      icon: IndianRupee,
      description: "Total earnings",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Welcome to your dashboard. Here you can manage your hotels and bookings.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <BookingsCard />
    </div>
  );
}
