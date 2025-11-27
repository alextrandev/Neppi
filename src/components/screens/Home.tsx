import React from "react";
import { EventCard } from "../EventCard";
import { GradientButton } from "../GradientButton";
import { GlassCard } from "../GlassCard";
import { StatusBar } from "../StatusBar";
import { ShareSheetQR } from "../ShareSheetQR";
import {
  Share2,
  Plus,
  Calendar,
  Clock,
  Camera,
  X,
} from "lucide-react";
import { Users } from "lucide-react";

interface HomeProps {
  onCreateEvent: () => void;
  onMyEvents: () => void;
  onShareQR: () => void;
  onStartCameraFlow: () => void;
}

export function Home({
  onCreateEvent,
  onMyEvents,
  onShareQR,
  onStartCameraFlow,
}: HomeProps) {
  const [showConnectModal, setShowConnectModal] =
    React.useState(false);
  const [showShareSheet, setShowShareSheet] =
    React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowConnectModal(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleStartConnecting = () => {
    setShowConnectModal(false);
    onStartCameraFlow(); // Navigate to camera connection flow
  };

  return (
    <div className="space-y-10">
      {/* Status Bar */}
      <StatusBar />

      {/* Header */}
      <div className="text-center">
        <h1
          className="mb-2"
          style={{
            color: "#4A3B6B",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          NOSTIQ 200
        </h1>
        <p
          style={{
            color: "#7C6BA1",
            fontSize: "16px",
            marginTop: "-5px",
          }}
        >
          Make every moment count.
        </p>
      </div>

      {/* Current Event Card */}
      <GlassCard>
        <div className="text-center space-y-2">
          <div>
            <h2
              className="mb-2"
              style={{
                color: "#FFFFFF",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              Christmas Party 2025
            </h2>
            <div
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-[16px]">
                December 15, 2025
              </span>
            </div>
          </div>

          <div
            className="flex items-center justify-center gap-2"
            style={{ color: "#FFFFFF" }}
          >
            <Users className="w-5 h-5" />
            <span className="text-[16px]">
              2 cameras connected
            </span>
          </div>

          <div className="flex items-center justify-center p-6 bg-white rounded-xl">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <div className="w-44 h-44 bg-white rounded-md grid grid-cols-8 gap-1 p-2">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"} rounded-sm`}
                  />
                ))}
              </div>
            </div>
          </div>

          <GradientButton
            onClick={() => setShowShareSheet(true)}
            variant="glow"
            className="w-full"
          >
            <div className="flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              <span style={{ fontSize: "17px" }}>
                Share QR Code
              </span>
            </div>
          </GradientButton>
        </div>
      </GlassCard>

      {/* Action Buttons */}
      <div className="space-y-3">
        <GradientButton
          onClick={onCreateEvent}
          variant="secondary"
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            <span style={{ fontSize: "17px" }}>
              Create New Event
            </span>
          </div>
        </GradientButton>

        <GradientButton
          onClick={onMyEvents}
          variant="secondary"
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            <span style={{ fontSize: "17px" }}>
              My Ongoing Events
            </span>
          </div>
        </GradientButton>
      </div>

      {/* Start Connecting Cameras Modal */}
      {showConnectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <GlassCard className="max-w-sm w-full relative animate-in zoom-in duration-300">
            <button
              onClick={() => setShowConnectModal(false)}
              className="absolute top-1 right-1 w-8 h-8 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(164, 128, 255, 0.2)",
                color: "#4A3B6B",
              }}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-6 pt-2">
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(164, 128, 255, 0.2), rgba(122, 224, 255, 0.2))",
                  border: "2px solid rgba(122, 224, 255, 0.4)",
                  boxShadow:
                    "0 4px 20px rgba(122, 224, 255, 0.3)",
                }}
              >
                <Camera
                  className="w-10 h-10"
                  style={{ color: "#7AE0FF" }}
                />
              </div>

              <div>
                <h3
                  className="mb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Start connecting cameras now?
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                >
                  Connect your devices to start capturing
                  amazing moments for your event
                </p>
              </div>

              <div className="space-y-3">
                <GradientButton
                  onClick={handleStartConnecting}
                  variant="glow"
                  className="w-full"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Camera className="w-5 h-5" />
                    <span style={{ fontSize: "17px" }}>
                      Yes, Start Now
                    </span>
                  </div>
                </GradientButton>

                <button
                  onClick={() => setShowConnectModal(false)}
                  className="w-full px-6 py-3 backdrop-blur-xl rounded-2xl transition-all"
                  style={{
                    background: "#e7deff",
                    border:
                      "1px solid rgba(164, 128, 255, 0.2)",
                    color: "#4a3b6b",
                  }}
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Share Sheet QR Modal */}
      <ShareSheetQR
        isOpen={showShareSheet}
        onClose={() => setShowShareSheet(false)}
        eventName="Christmas Party 2025"
      />
    </div>
  );
}