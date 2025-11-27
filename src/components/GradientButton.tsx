import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "glow";
  className?: string;
  disabled?: boolean;
}

export function GradientButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: GradientButtonProps) {
  if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 rounded-2xl backdrop-blur-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        style={{
          background: "#e7deff",
          border: "1px solid rgba(164, 128, 255, 0.3)",
          color: "#4a3b6b",
          boxShadow:
            "0 4px 12px rgba(164, 128, 255, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.5)",
        }}
      >
        {children}
      </button>
    );
  }
  if (variant === "glow") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        style={{
          background:
            "linear-gradient(135deg, #6C38FF 0%, #7AE0FF 100%)",
          color: "#FFFFFF",
        }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-2xl transition-all bg-cyan-500/20 duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        color: "#FFFFFF",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow:
          "inset 0 1px 3px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(88, 88, 247, 0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      {children}
    </button>
  );
}