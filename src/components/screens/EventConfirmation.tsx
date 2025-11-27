import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Camera,
  Timer,
  Share2,
  Home,
} from "lucide-react";
import { StatusBar } from "../StatusBar";
import { GlassCard } from "../GlassCard";
import { GradientButton } from "../GradientButton";
import { ShareSheet } from "../ShareSheet";

interface EventConfirmationProps {
  eventName: string;
  eventDate: string;
  destinations: string[];
  aiPrompt?: string;
  pictureCount: number;
  countdownSeconds: number;
  onShareEvent: () => void;
  onBackToHome: () => void;
}

export function EventConfirmation({
  eventName,
  eventDate,
  destinations,
  aiPrompt,
  pictureCount,
  countdownSeconds,
  onShareEvent,
  onBackToHome,
}: EventConfirmationProps) {
  const [showShareSheet, setShowShareSheet] = useState(false);

  // Convert countdown seconds to hours and minutes
  const hours = Math.floor(countdownSeconds / 3600);
  const minutes = Math.floor((countdownSeconds % 3600) / 60);
  const countdownText =
    hours > 0
      ? `${hours} hours ${minutes.toString().padStart(2, "0")} minutes`
      : `${minutes} minutes`;

  // Format date
  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const allDestinations = [
    { name: "Google Drive", icon: "📁" },
    { name: "Telegram", icon: "✈️" },
    { name: "WhatsApp", icon: "💬" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />

      <div className="flex-1 flex flex-col px-2 py-6 overflow-y-auto">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(74, 222, 128, 0.2))",
              border: "2px solid rgba(34, 197, 94, 0.4)",
            }}
          >
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-[rgb(74,59,107)] mb-2 text-[20px] font-normal">Event Created!</h2>
          <p className="text-[rgb(74,59,107)] text-sm text-[16px]">
            Your event is ready to go
          </p>
        </div>

        {/* Event Summary Card */}
        <GlassCard className="w-full mb-6" noShadow>
          <div className="space-y-5">
            {/* Event Name */}
            <div>
              <h3 className="text-white">{eventName}</h3>
            </div>

            {/* Event Date + Time */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(122, 224, 255, 0.1)",
                  border: "1px solid rgba(122, 224, 255, 0.3)",
                }}
              >
                <Calendar className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-purple-200 text-sm">
                  Event Date
                </p>
                <p className="text-white">{formattedDate}</p>
              </div>
            </div>

            {/* Selected Destinations */}
            <div>
              <p className="text-purple-200 text-sm mb-3">
                Selected Destinations
              </p>
              <div className="grid grid-cols-2 gap-2">
                {allDestinations.map((dest) => {
                  const isSelected = destinations.includes(
                    dest.name,
                  );
                  return (
                    <div
                      key={dest.name}
                      className={`px-2 py-2.5 rounded-xl flex flex-col items-center gap-1.5 transition-all ${
                        isSelected
                          ? "bg-cyan-500/20 border-2 border-cyan-400"
                          : "bg-white/5 border border-white/10 opacity-40"
                      }`}
                      style={
                        isSelected
                          ? {
                              boxShadow:
                                "0 0 20px rgba(122, 224, 255, 0.3)",
                            }
                          : {}
                      }
                    >
                      <span className="text-xl">
                        {dest.icon}
                      </span>
                      <span
                        className={`text-xs ${isSelected ? "text-white" : "text-purple-200"} truncate w-full text-center`}
                      >
                        {dest.name.split(" ")[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Filter / Prompt */}
            {aiPrompt && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <p className="text-purple-200 text-sm">
                    AI Filter / Prompt
                  </p>
                </div>
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(108, 56, 255, 0.1)",
                    border: "1px solid rgba(108, 56, 255, 0.3)",
                  }}
                >
                  <p className="text-white text-sm leading-relaxed">
                    {aiPrompt}
                  </p>
                </div>
              </div>
            )}

            {/* Number of Pictures */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(168, 85, 247, 0.1)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                }}
              >
                <Camera className="w-5 h-5 text-purple-400" />
              </div>
              <div className="min-w-0">
                <p className="text-purple-200 text-sm">
                  Number of Pictures
                </p>
                <p className="text-white">
                  {pictureCount} photos
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(251, 191, 36, 0.1)",
                  border: "1px solid rgba(251, 191, 36, 0.3)",
                }}
              >
                <Timer className="w-5 h-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <p className="text-purple-200 text-sm">
                  Countdown Timer
                </p>
                <p className="text-white">{countdownText}</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Action Buttons */}
        <div className="w-full space-y-3 mt-auto pt-4">
          {/* Share Event - Primary Button */}
          <GradientButton
            onClick={() => setShowShareSheet(true)}
            className="w-full"
            variant="glow"
          >
            <div className="flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              <span style={{ fontSize: "17px" }}>Share Event</span>
            </div>
          </GradientButton>

          {/* Back to Homepage - Secondary Button */}
          <GradientButton
          onClick={onBackToHome}
          variant="secondary"
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Home className="w-5 h-5" />
              <span style={{ fontSize: "17px" }}>Back to Home</span>
          </div>
        </GradientButton>
        </div>
      </div>

      {/* Share Sheet */}
      <ShareSheet
        isOpen={showShareSheet}
        onClose={() => setShowShareSheet(false)}
        eventName={eventName}
        eventSubtitle="Share event details with your team or guests"
      />
    </div>
  );
}