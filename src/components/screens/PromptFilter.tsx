import React, { useState } from "react";
import { GlassCard } from "../GlassCard";
import { GradientButton } from "../GradientButton";
import { ProgressBar } from "../ProgressBar";
import { StatusBar } from "../StatusBar";
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  Home,
  Send,
  Wand2,
  Image,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getChristmasPhotos } from "../../constants/christmasPhotos";

interface PromptFilterProps {
  onContinue: () => void;
  onBackToHome: () => void;
  onBack: () => void;
  onSendComplete: (filterApplied: string) => void;
  photoCount?: number;
  destination?: string;
  destinationPlatform?: string;
}

export function PromptFilter({
  onContinue,
  onBackToHome,
  onBack,
  onSendComplete,
  photoCount = 27,
  destination = "Event Team Channel",
  destinationPlatform = "Telegram",
}: PromptFilterProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<
    string | null
  >(null);
  const [showReadyToSend, setShowReadyToSend] = useState(false);
  const [showLoadingModal, setShowLoadingModal] =
    useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showFilterProcessing, setShowFilterProcessing] = useState(false);
  const [filterProcessingComplete, setFilterProcessingComplete] = useState(false);

  const presets = [
    { id: "vintage", label: "Vintage Film", emoji: "📷" },
    { id: "moody", label: "Moody Dark", emoji: "🌙" },
    { id: "bright", label: "Bright & Airy", emoji: "☀️" },
  ];

  const handlePresetClick = (preset: string) => {
    setSelectedPreset(preset);
    const presetTexts: { [key: string]: string } = {
      vintage:
        "Warm tones, film grain, nostalgic vintage aesthetic with soft focus",
      moody:
        "Dark and moody atmosphere, deep shadows, cinematic contrast",
      bright:
        "Bright and airy feel, soft pastels, ethereal light",
    };
    setPrompt(presetTexts[preset] || "");
    
    // Trigger filter processing animation
    handleSendPromptToAI();
  };

  const handleSendPromptToAI = () => {
    if (prompt.trim()) {
      setShowFilterProcessing(true);
      setFilterProcessingComplete(false);

      // Simulate AI processing
      setTimeout(() => {
        setFilterProcessingComplete(true);
        
        // Auto-close after showing success
        setTimeout(() => {
          setShowFilterProcessing(false);
          setFilterProcessingComplete(false);
        }, 2000);
      }, 2000); // 2 seconds processing time
    }
  };

  const handleSend = () => {
    if (prompt.trim()) {
      setShowReadyToSend(true);
    }
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
            onSendComplete(prompt);
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="space-y-6">
      {/* Status Bar */}
      <StatusBar />

      {/* Top Navigation */}
      <div className="flex items-center justify-center relative">
        <button
          onClick={onBack}
          className="absolute left-0 w-10 h-10 backdrop-blur-xl rounded-full flex items-center justify-center transition-all shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(164, 128, 255, 0.25)",
            color: "#4A3B6B",
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2
          className="bolder text-xl"
          style={{ color: "#4A3B6B" }}
        >
          Prompt A Filter
        </h2>
      
      </div>

      {/* AI Styling Guide Card */}
      <GlassCard>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(164, 128, 255, 0.25), rgba(122, 224, 255, 0.25))",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow:
                  "0 4px 12px rgba(122, 224, 255, 0.2)",
              }}
            >
              <Wand2
                className="w-6 h-6"
                style={{ color: "#7AE0FF" }}
              />
            </div>
            <div>
              <h3 className="mb-1" style={{ color: "#FFFFFF" }}>
                AI Styling Guide
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                Describe your vision for perfect photos
              </p>
            </div>
          </div>

          <div className="space-y-2 pl-2">
            <div className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: "#7AE0FF" }}
              />
              <p
                className="text-sm"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                Be specific about colors, mood, and lighting
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: "#7AE0FF" }}
              />
              <p
                className="text-sm"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                Reference artistic styles or photography genres
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: "#7AE0FF" }}
              />
              <p
                className="text-sm"
                style={{ color: "rgba(255, 255, 255, 0.85)" }}
              >
                Try our preset suggestions below
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Your Style Prompt Section */}
      <div className="space-y-3">
        <h3 style={{ color: "#4A3B6B" }}>Your Style Prompt</h3>

        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your desired photo style..."
            className="w-full h-32 px-4 py-3 backdrop-blur-xl rounded-2xl resize-none focus:outline-none transition-all"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#4A3B6B",
              boxShadow:
                "0 4px 12px rgba(86, 49, 190, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>

        <GradientButton
          onClick={handleSendPromptToAI}
          variant="glow"
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            <span style={{ fontSize: "17px" }}>Send Prompt to AI</span>
          </div>
        </GradientButton>
      </div>

      {/* Preset Chips */}
      <div className="space-y-3">
        <p style={{ color: "#4A3B6B", fontSize: "17px" }}>
          Quick Presets
        </p>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handlePresetClick(preset.id)}
              className={`px-4 py-2 backdrop-blur-xl rounded-full text-sm transition-all`}
              style={
                selectedPreset === preset.id
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(164, 128, 255, 0.4), rgba(122, 224, 255, 0.3))",
                      border:
                        "2px solid rgba(122, 224, 255, 0.5)",
                      color: "#4A3B6B",
                      boxShadow:
                        "0 0 20px rgba(122, 224, 255, 0.3)",
                    }
                  : {
                      background: "rgba(255, 255, 255, 0.25)",
                      border:
                        "1px solid rgba(255, 255, 255, 0.3)",
                      color: "#7C6BA1",
                      boxShadow:
                        "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                    }
              }
            >
              <span className="mr-2">{preset.emoji}</span>
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Row */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[rgb(74,59,107)]">Preview</p>
          <button className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium hover:from-purple-300 hover:to-cyan-300 transition-all">
            Apply Style
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {getChristmasPhotos(3).map((photo, i) => (
            <div
              key={i}
              className="aspect-square backdrop-blur-xl bg-purple-900/30 border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <ImageWithFallback
                src={photo}
                alt={`Preview ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation / Status Card */}
      <GlassCard className="bg-purple-900/40 border-white/20 shadow-2xl shadow-purple-500/20">
        <div className="space-y-5">
          {/* Status Row */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-500/20 border-2 border-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
              <CheckCircle2 className="w-7 h-7 text-emerald-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-1">
                Photos are done
              </h3>
              <p className="text-[rgba(255,255,255,0.68)] text-sm leading-relaxed">
                Are you ready to send them now to your selected
                destinations?
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="space-y-3 pt-2">
            <GradientButton
              onClick={handleSend}
              variant="glow"
              className="w-full "
            >
              <div className="flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                <span style={{ fontSize: "17px" }}>Yes, Send</span>
              </div>
            </GradientButton>

            <button
              onClick={() => onContinue()}
              className="w-full px-6 py-3.5 backdrop-blur-xl rounded-xl transition-all shadow-md"
              style={{
                background: "#e7deff",
                border: "1px solid rgba(164, 128, 255, 0.3)",
                color: "#4a3b6b",
              }}
            >
              Continue Editing
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Ready to Send Confirmation Modal */}
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
                    {photoCount} photo(s)
                  </span>{" "}
                  to{" "}
                  <span className="text-white">
                    {destination}
                  </span>{" "}
                  on{" "}
                  <span className="text-white">
                    {destinationPlatform}
                  </span>
                  .
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

      {/* Filter Processing Modal */}
      {showFilterProcessing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <GlassCard className="max-w-sm w-full">
            <div className="text-center space-y-6">
              {!filterProcessingComplete ? (
                <>
                  {/* Processing State */}
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
                    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-white">
                      Processing filter...
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  {/* Success State */}
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full"
                    style={{
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "2px solid rgba(16, 185, 129, 0.6)",
                      boxShadow:
                        "0 4px 20px rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <CheckCircle2
                      className="w-10 h-10"
                      style={{ color: "#10B981" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">
                      Successfully applied!
                    </h3>
                    <p className="text-purple-200 text-sm">
                      Check the preview
                    </p>
                  </div>
                </>
              )}
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}