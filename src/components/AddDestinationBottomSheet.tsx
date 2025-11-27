import React, { useState } from "react";
import { X, Check, Cloud, MessageCircle, Send, Instagram, MessageSquare, Mail, Folder, Webhook } from "lucide-react";
import { GradientButton } from "./GradientButton";

interface Destination {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface AddDestinationBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const destinations: Destination[] = [
  {
    id: "google-drive",
    name: "Google Drive",
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: <Send className="w-5 h-5" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    id: "messenger",
    name: "Messenger",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: "imessage",
    name: "iMessage",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: "local-folder",
    name: "Local Folder",
    icon: <Folder className="w-5 h-5" />,
  },
  {
    id: "custom-webhook",
    name: "Custom Webhook",
    icon: <Webhook className="w-5 h-5" />,
  },
];

export function AddDestinationBottomSheet({
  isOpen,
  onClose,
}: AddDestinationBottomSheetProps) {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleDestination = (id: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(id)
        ? prev.filter((destId) => destId !== id)
        : [...prev, id]
    );
  };

  const handleConfirm = () => {
    setShowSuccess(true);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedDestinations([]);
      onClose();
    }, 3000);
  };

  const getSelectedNames = () => {
    return destinations
      .filter((dest) => selectedDestinations.includes(dest.id))
      .map((dest) => dest.name)
      .join(", ");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          animation: isOpen ? "fadeIn 0.3s ease-out" : "fadeOut 0.3s ease-out",
        }}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl overflow-hidden"
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #5830c3 0%, #9b56d2 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 -8px 32px rgba(88, 48, 195, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {!showSuccess ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-6 pt-16 pb-4 flex-shrink-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3
                    className="mb-1"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "21px",
                      fontWeight: "600",
                    }}
                  >
                    Choose destinations
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Where do you want your photos to sync?
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <X className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                </button>
              </div>
            </div>

            {/* Destination List */}
            <div className="flex-1 overflow-y-auto px-6 pb-4">
              <div className="space-y-2">
                {destinations.map((destination, index) => (
                  <React.Fragment key={destination.id}>
                    <button
                      onClick={() => toggleDestination(destination.id)}
                      className="w-full p-4 rounded-xl transition-all"
                      style={{
                        background: selectedDestinations.includes(destination.id)
                          ? "rgba(255, 255, 255, 0.25)"
                          : "rgba(255, 255, 255, 0.15)",
                        border: selectedDestinations.includes(destination.id)
                          ? "1px solid rgba(255, 255, 255, 0.4)"
                          : "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: selectedDestinations.includes(destination.id)
                          ? "inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1)"
                          : "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: "rgba(255, 255, 255, 0.2)",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              color: "#FFFFFF",
                            }}
                          >
                            {destination.icon}
                          </div>
                          <span
                            className="text-[15px]"
                            style={{ color: "#FFFFFF" }}
                          >
                            {destination.name}
                          </span>
                        </div>

                        {/* Toggle/Checkbox */}
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center transition-all"
                          style={{
                            background: selectedDestinations.includes(destination.id)
                              ? "#00ff88"
                              : "rgba(255, 255, 255, 0.2)",
                            border: selectedDestinations.includes(destination.id)
                              ? "2px solid #00ff88"
                              : "2px solid rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          {selectedDestinations.includes(destination.id) && (
                            <Check
                              className="w-4 h-4"
                              style={{ color: "#FFFFFF", strokeWidth: 3 }}
                            />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Divider after Local Folder (before Custom Webhook) */}
                    {index === destinations.length - 2 && (
                      <div
                        className="my-3 h-px"
                        style={{
                          background: "rgba(255, 255, 255, 0.2)",
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-6 pb-6 pt-4 flex-shrink-0">
              <GradientButton
                onClick={handleConfirm}
                disabled={selectedDestinations.length === 0}
                variant="secondary"
                className="w-full"
              >
                <span className="text-[16px]">
                  Confirm selections
                  {selectedDestinations.length > 0 &&
                    ` (${selectedDestinations.length})`}
                </span>
              </GradientButton>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="flex flex-col items-center justify-center h-full px-6 text-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
              style={{
                background: "#10b981",
                boxShadow:
                  "0 0 20px rgba(16, 185, 129, 0.8), 0 0 50px rgba(16, 185, 129, 0.4)",
                animation: "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>

            <h3
              className="mb-3"
              style={{
                color: "#FFFFFF",
                fontSize: "23px",
                fontWeight: "600",
                animation: "fadeIn 0.5s ease-out 0.2s both",
              }}
            >
              Successfully added destinations!
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                animation: "fadeIn 0.5s ease-out 0.3s both",
              }}
            >
              Your photos will sync to:{" "}
              <span style={{ fontWeight: "600" }}>{getSelectedNames()}</span>
            </p>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

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

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
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
      `}</style>
    </>
  );
}