import React from 'react';
import { Camera, Check } from 'lucide-react';

interface CameraIconProps {
  number: number;
  state?: 'idle' | 'connecting' | 'connected';
  className?: string;
}

export function CameraIcon({ number, state = 'idle', className = '' }: CameraIconProps) {
  const getStateStyles = () => {
    switch (state) {
      case 'connected':
        return 'bg-emerald-500/30 border-emerald-400 shadow-emerald-500/50';
      case 'connecting':
        return 'bg-cyan-500/30 border-cyan-400 shadow-cyan-500/50 animate-pulse';
      default:
        return 'bg-white/10 border-white/30 shadow-white/20';
    }
  };

  return (
    <div 
      className={`relative w-16 h-16 backdrop-blur-xl border-2 rounded-2xl flex items-center justify-center ${getStateStyles()} ${className}`}
      style={{
        boxShadow: '0 0 20px currentColor'
      }}
    >
      {state === 'connected' ? (
        <Check className="w-8 h-8 text-emerald-300" />
      ) : (
        <Camera className="w-8 h-8 text-white" />
      )}
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs">
        {number}
      </div>
    </div>
  );
}
