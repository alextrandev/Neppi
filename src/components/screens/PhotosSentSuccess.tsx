import React from "react";
import { Check, ExternalLink, Home, Send } from "lucide-react";
import { StatusBar } from "../StatusBar";
import { GlassCard } from "../GlassCard";
import { GradientButton } from "../GradientButton";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getChristmasPhotos } from "../../constants/christmasPhotos";

interface PhotosSentSuccessProps {
  filterApplied: string;
  photoCount?: number;
  destinations?: Array<{ platform: string; name: string }>;
  onViewPhotos: () => void;
  onBackToEvent: () => void;
  onSendMore: () => void;
}

export function PhotosSentSuccess({
  filterApplied,
  photoCount = 20,
  destinations = [
    { platform: "Telegram", name: "Event Team Channel" },
    { platform: "WhatsApp", name: "Friends Group" },
    { platform: "Google Drive", name: "NYE Party 2025 Album" },
  ],
  onViewPhotos,
  onBackToEvent,
  onSendMore,
}: PhotosSentSuccessProps) {
  // Christmas party photos for preview carousel
  const mockPhotos = getChristmasPhotos(5);

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />

      <div className="flex-1 flex flex-col items-center justify-start px-6 py-8 overflow-y-auto">
        {/* Success Header Section */}
        <div
          className="flex flex-col items-center justify-center mb-8"
          style={{
            animation: "fadeIn 0.8s ease-out",
          }}
        >
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center mb-6"
            style={{
              background: "#10b981",
              boxShadow:
                "0 0 20px rgba(16, 185, 129, 0.8), 0 0 50px rgba(16, 185, 129, 0.4)",
              animation: "scaleIn 0.8s ease-out",
            }}
          >
            <Check
              className="w-16 h-16 text-white"
              strokeWidth={3}
            />
          </div>

          <h1
            className="text-center mb-3"
            style={{
              animation: "fadeIn 1s ease-out 0.3s both",
              color: "#4a3b6b",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Photos Successfully Sent!
          </h1>

          <p
            className="text-center"
            style={{
              animation: "fadeIn 1s ease-out 0.5s both",
              color: "#4a3b6b",
            }}
          >
            Your photos have been sent to the selected
            destinations.
          </p>
        </div>

        {/* Summary Card */}
        <GlassCard className="w-full max-w-md mb-6">
          <div className="space-y-5">
            {/* Destinations */}
            <div>
              <p className="text-purple-200 text-sm mb-3">
                Delivered to
              </p>
              <div className="space-y-2">
                {destinations.map((dest, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{
                      background: "rgba(122, 224, 255, 0.05)",
                      border:
                        "1px solid rgba(122, 224, 255, 0.2)",
                    }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white text-sm">
                        <span className="text-cyan-300">
                          {dest.platform}
                        </span>{" "}
                        → {dest.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Photos */}
            <div
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{
                background: "rgba(122, 224, 255, 0.05)",
                border: "1px solid rgba(122, 224, 255, 0.2)",
              }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
              <div>
                <p className="text-cyan-300 text-sm">
                  Total Photos
                </p>
                <p className="text-white">
                  {photoCount} photos
                </p>
              </div>
            </div>

            {/* Filter Applied */}
            {filterApplied && (
              <div
                className="flex items-start gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(122, 224, 255, 0.05)",
                  border: "1px solid rgba(122, 224, 255, 0.2)",
                }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-cyan-300 text-sm mb-1">
                    Filter Applied
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {filterApplied}
                  </p>
                </div>
              </div>
            )}
          </div>
        </GlassCard>

        {/* Mini Photo Carousel */}
        <div
          className="w-full max-w-md mb-8"
          style={{
            animation: "fadeIn 1s ease-out 0.9s both",
          }}
        >
          <p className="text-[rgb(74,59,107)] text-sm mb-3 px-1 text-[15px]">
            Preview
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {mockPhotos.map((photo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="w-full max-w-md space-y-3 mb-6"
          style={{
            animation: "fadeIn 1s ease-out 1.1s both",
          }}
        >
          {/* Primary Button */}
          <GradientButton
            onClick={onViewPhotos}
            className="w-full"
            variant="glow"
          >
            <div className="flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              <span style={{ fontSize: "17px" }}>View in {destinations[0]?.platform}</span>
            </div>
          </GradientButton>

          {/* Secondary Button */}
          <button
            onClick={onBackToEvent}
            className="w-full px-6 py-3 rounded-2xl transition-all"
            style={{
              background: "#e7deff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(164, 128, 255, 0.3)",
              color: "#4a3b6b",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              <span style={{ fontSize: "17px" }}>Back to Home</span>
            </div>
          </button>
        </div>

        {/* Extra Link */}
        <button
          onClick={onSendMore}
          className="text-sm transition-colors"
          style={{
            animation: "fadeIn 1s ease-out 1.3s both",
            color: "#4a3b6b",
          }}
        >
          Send to more destinations
        </button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}