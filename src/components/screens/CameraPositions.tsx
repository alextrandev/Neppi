import React from 'react';
import { GlassCard } from '../GlassCard';
import { GradientButton } from '../GradientButton';
import { StatusBar } from '../StatusBar';
import { MapPin, Camera, User, ArrowLeft } from 'lucide-react';

interface CameraPositionsProps {
  onBack: () => void;
}

export function CameraPositions({ onBack }: CameraPositionsProps) {
  const cameras = [
    { id: 1, x: 30, y: 25 },
    { id: 2, x: 70, y: 40 },
    { id: 3, x: 50, y: 70 },
    { id: 4, x: 20, y: 60 }
  ];

  const userPosition = { x: 50, y: 50 };

  return (
    <div className="space-y-6">
      <StatusBar />
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(164, 128, 255, 0.25)",
            color: "#4A3B6B",}}
    
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-[rgb(74,59,107)] text-[20px] font-[Inter] font-semibold">Camera Positions</h2>
          <p className="text-[rgb(130,107,154)] text-sm">Live location tracking</p>
        </div>
      </div>

      {/* Map Card */}
      <GlassCard>
        <div className="relative w-full aspect-square bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(30, 27, 75, 0.3) 70%)'
            }}
          />

          {/* User Position */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${userPosition.x}%`, top: `${userPosition.y}%` }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-ping" />
              <div className="relative w-12 h-12 bg-cyan-500/40 border-2 border-cyan-300 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="w-6 h-6 text-cyan-100" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-cyan-300 text-xs">You</span>
              </div>
            </div>
          </div>

          {/* Camera Positions */}
          {cameras.map((camera) => (
            <div 
              key={camera.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${camera.x}%`, top: `${camera.y}%` }}
            >
              <div className="relative">
                {/* Connection Line to User */}
                <svg 
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: `${Math.abs(camera.x - userPosition.x) * 4}px`,
                    height: `${Math.abs(camera.y - userPosition.y) * 4}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${((userPosition.x - camera.x) / Math.abs(camera.x - userPosition.x)) * 50 + 50}%`}
                    y2={`${((userPosition.y - camera.y) / Math.abs(camera.y - userPosition.y)) * 50 + 50}%`}
                    stroke="rgba(122, 224, 255, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>

                <div className="relative w-12 h-12 bg-purple-500/40 border-2 border-purple-300 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Camera className="w-6 h-6 text-purple-100" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs">
                  {camera.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-around text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full" />
            <span className="text-purple-200">You</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full" />
            <span className="text-purple-200">Cameras</span>
          </div>
        </div>
      </GlassCard>

      {/* Camera List */}
      <GlassCard>
        <h3 className="text-white mb-4">Connected Cameras</h3>
        <div className="space-y-3">
          {cameras.map((camera) => (
            <div 
              key={camera.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 border border-purple-400 rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <div className="text-white">Camera {camera.id}</div>
                  <div className="text-purple-200 text-xs">Active • {Math.floor(Math.random() * 50 + 10)}m away</div>
                </div>
              </div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Back Button */}
      <GradientButton onClick={onBack} variant="secondary" className="w-full">
        Back to Event
      </GradientButton>
    </div>
  );
}