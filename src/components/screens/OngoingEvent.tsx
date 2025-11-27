import React, { useState } from "react";
import { GlassCard } from "../GlassCard";
import { GradientButton } from "../GradientButton";
import { StatusBar } from "../StatusBar";
import {
  Camera,
  MapPin,
  Sparkles,
  Send,
  Circle,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getChristmasPhotos } from "../../constants/christmasPhotos";
import { AddDestinationBottomSheet } from "../AddDestinationBottomSheet";

interface OngoingEventProps {
  onCheckPositions: () => void;
  onPromptFilter: () => void;
  onBack: () => void;
  onSendComplete?: () => void;
}

export function OngoingEvent({
  onCheckPositions,
  onPromptFilter,
  onBack,
  onSendComplete,
}: OngoingEventProps) {
  const [selectedImages, setSelectedImages] = useState<
    number[]
  >([]);
  const [showReadyToSend, setShowReadyToSend] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showAddDestination, setShowAddDestination] = useState(false);

  // Christmas party photos
  const photos = getChristmasPhotos(12).map((url, i) => ({
    id: i + 1,
    url,
  }));

  const toggleImageSelection = (id: number) => {
    setSelectedImages((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id],
    );
  };

  const handleSendOriginals = () => {
    setShowReadyToSend(true);
  };

  const handleConfirmSend = () => {
    setShowReadyToSend(false);
    setShowLoadingModal(true);
    setLoadingProgress(0);

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowLoadingModal(false);
            if (onSendComplete) {
              onSendComplete();
            }
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="space-y-6">
      <StatusBar />

      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(164, 128, 255, 0.25)",
            color: "#4A3B6B",
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 style={{ color: "#4A3B6B" }}>My Ongoing Event</h2>
          <p className="text-sm" style={{ color: "#7C6BA1" }}>
            Christmas Party 2025
          </p>
        </div>
      </div>

      {/* Status Card */}
      <GlassCard>
        <div className="flex items-center justify-between mb-4">
          <h3
            style={{
              color: "#FFFFFF",
              fontSize: "17px",
              fontWeight: "normal",
            }}
          >
            Connected Cameras
          </h3>
          <div
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full"
            style={{
              background: "rgba(0, 255, 136, 0.2)",
              border: "1px solid rgba(0, 255, 136, 0.4)",
              boxShadow: "0 0 12px rgba(0, 255, 136, 0.3)",
            }}
          >
            <Circle
              className="w-1.5 h-1.5 animate-pulse"
              style={{ color: "#00ff88", fill: "#00ff88" }}
            />
            <span
              className="text-xs"
              style={{ color: "#FFFFFF" }}
            >
              Live
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className="text-center p-2 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow:
                "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="text-xl mb-0.5"
              style={{ color: "#FFFFFF" }}
            >
              2
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "14px" }}
            >
              Cameras
            </div>
          </div>
          <div
            className="text-center p-2 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow:
                "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="text-xl mb-0.5"
              style={{ color: "#FFFFFF" }}
            >
              1:24:35
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "14px" }}
            >
              Duration
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className="text-center p-2 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow:
                "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="text-xl mb-0.5"
              style={{ color: "#FFFFFF" }}
            >
              20
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "14px" }}
            >
              Photos Captured
            </div>
          </div>
          <div
            className="text-center p-2 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow:
                "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              className="text-xl mb-0.5"
              style={{ color: "#FFFFFF" }}
            >
              10
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "14px" }}
            >
              Photos Left
            </div>
          </div>
        </div>

        <GradientButton
          onClick={onCheckPositions}
          variant="secondary"
          className="w-full mt-4"
        >
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-[16px]">
              Camera Positions
            </span>
          </div>
        </GradientButton>
      </GlassCard>

      {/* Live Photo Gallery */}
      <GlassCard>
        <div className="flex items-center justify-between mb-4">
          <h3
            style={{
              color: "#FFFFFF",
              fontWeight: "normal",
              fontSize: "18px",
            }}
          >
            Live Gallery
          </h3>
          {selectedImages.length > 0 && (
            <span
              className="text-sm"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              {selectedImages.length} selected
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => toggleImageSelection(photo.id)}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <ImageWithFallback
                src={photo.url}
                alt={`Christmas party photo ${photo.id}`}
                className="w-full h-full object-cover"
              />
              {selectedImages.includes(photo.id) && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: "rgba(164, 128, 255, 0.4)",
                    border: "2px solid #A480FF",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "#A480FF" }}
                  >
                    <span className="text-white text-xs">
                      ✓
                    </span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Action Buttons */}
      <div className="space-y-3">
        <GradientButton
          onClick={onPromptFilter}
          variant="glow"
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span style={{ fontSize: "17px" }}>Prompt AI Filter</span>
          </div>
        </GradientButton>

        <div className="grid grid-cols-2 gap-3">
          <GradientButton
            variant="secondary"
            className="w-full"
            onClick={() => setShowAddDestination(true)}
          >
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span style={{ fontSize: "17px" }}>Add Destination</span>
            </div>
          </GradientButton>
          <GradientButton
            variant="secondary"
            className="w-full"
            onClick={handleSendOriginals}
          >
            <div className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span style={{ fontSize: "17px" }}>Send Originals</span>
            </div>
          </GradientButton>
        </div>
      </div>

      {/* Add Destination Bottom Sheet */}
      <AddDestinationBottomSheet
        isOpen={showAddDestination}
        onClose={() => setShowAddDestination(false)}
      />

      {/* Ready to Send Modal */}
      {showReadyToSend && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <GlassCard className="max-w-sm w-full">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-white mb-3">
                  Ready to send?
                </h3>
                <p className="text-purple-200 text-sm">
                  This will send{" "}
                  <span className="text-white">
                    20 original photo(s)
                  </span>{" "}
                  to your selected destinations.
                </p>
              </div>

              <div className="space-y-3">
                <GradientButton
                  onClick={handleConfirmSend}
                  variant="glow"
                  className="w-full"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span style={{ fontSize: "17px" }}>Confirm</span>
                  </div>
                </GradientButton>

                <button
                  onClick={() => setShowReadyToSend(false)}
                  className="w-full px-6 py-3 backdrop-blur-xl rounded-xl transition-all"
                  style={{
                    background: "#e7deff",
                    border:
                      "1px solid rgba(164, 128, 255, 0.3)",
                    color: "#4a3b6b",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Sending Progress Modal */}
      {showLoadingModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <GlassCard className="max-w-sm w-full">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-white mb-3">
                  Sending now...
                </h3>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <div
                    className="h-3 rounded-full overflow-hidden"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border:
                        "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div
                      className="h-full transition-all duration-300 ease-out rounded-full"
                      style={{
                        width: `${loadingProgress}%`,
                        background:
                          "linear-gradient(90deg, #6C38FF 0%, #7AE0FF 100%)",
                        boxShadow:
                          "0 0 20px rgba(122, 224, 255, 0.5)",
                      }}
                    />
                  </div>
                </div>
                <p className="text-cyan-300">
                  {loadingProgress}%
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}