import React from "react";
import { Wifi, Battery } from "lucide-react";

export function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="flex items-center justify-between text-white text-sm mb-6 h-4"></div>
  );
}