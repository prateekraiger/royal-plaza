"use client";

import { useState } from "react";
import { Building2, User } from "lucide-react";

interface RoleSelectionModalProps {
  onSelectRole: (role: "guest" | "owner") => void;
}

export function RoleSelectionModal({ onSelectRole }: RoleSelectionModalProps) {
  const [loading, setLoading] = useState(false);

  function handleSelect(role: "guest" | "owner") {
    setLoading(true);
    onSelectRole(role);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Welcome to Dwell</h2>
        <p className="mb-8 text-gray-600">How would you like to use Dwell today?</p>

        <div className="grid gap-4">
          <button
            className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 text-left transition-all hover:border-blue-500 hover:bg-blue-50"
            onClick={() => handleSelect("guest")}
            disabled={loading}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">I'm looking for a room</h3>
                <p className="text-sm text-gray-500">Browse and book unique stays</p>
              </div>
            </div>
          </button>

          <button
            className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 text-left transition-all hover:border-purple-500 hover:bg-purple-50"
            onClick={() => handleSelect("owner")}
            disabled={loading}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-100 p-3 text-purple-600 group-hover:bg-purple-600 group-hover:text-white">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">I want to list my hotel</h3>
                <p className="text-sm text-gray-500">Manage properties and bookings</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
