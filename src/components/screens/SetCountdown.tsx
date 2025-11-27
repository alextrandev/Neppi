import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { GradientButton } from '../GradientButton';
import { StatusBar } from '../StatusBar';
import { Clock, CheckCircle2 } from 'lucide-react';

interface SetCountdownProps {
  onConfirm: (seconds: number) => void;
  onBackToHome: () => void;
  onMyEvents: () => void;
}

export function SetCountdown({ onConfirm, onBackToHome, onMyEvents }: SetCountdownProps) {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleConfirm = () => {
    onConfirm(minutes * 60 + seconds);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="space-y-6">
        <StatusBar />
        
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <GlassCard className="text-center w-full max-w-md">
            <div className="mb-8 animate-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-500/20 border-2 border-emerald-400 rounded-full mb-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-300" />
              </div>
              <h2 className="text-white mb-2" style={{ fontSize: "22px" }}>Setup Complete!</h2>
              <p className="text-purple-200 text-sm" style={{ fontSize: "16px" }}>Your event is ready to go</p>
            </div>

            <div className="space-y-3">
              <GradientButton onClick={onMyEvents} className="w-full">
                <span style={{ fontSize: "18px" }}>My Ongoing Event</span>
              </GradientButton>
              <GradientButton onClick={onBackToHome} variant="secondary" className="w-full">
                <span style={{ fontSize: "18px" }}>Back to Homepage</span>
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StatusBar />
      
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <GlassCard className="text-center w-full max-w-md">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 border border-cyan-400 rounded-2xl mb-4">
              <Clock className="w-8 h-8 text-cyan-300" />
            </div>
            <h2 className="text-white mb-2" style={{ fontSize: "22px" }}>Set Countdown Timer</h2>
            <p className="text-purple-200 text-sm" style={{ fontSize: "16px" }}>Time between each photo capture</p>
          </div>

          {/* Time Picker */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                className="w-24 h-24 bg-white/10 border-2 border-cyan-400/50 rounded-2xl text-center text-white text-3xl backdrop-blur-xl focus:border-cyan-400 focus:outline-none"
              />
              <span className="text-purple-200 text-sm mt-2" style={{ fontSize: "16px" }}>Minutes</span>
            </div>
            
            <span className="text-white text-3xl">:</span>
            
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="0"
                max="59"
                value={seconds.toString().padStart(2, '0')}
                onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                className="w-24 h-24 bg-white/10 border-2 border-cyan-400/50 rounded-2xl text-center text-white text-3xl backdrop-blur-xl focus:border-cyan-400 focus:outline-none"
              />
              <span className="text-purple-200 text-sm mt-2" style={{ fontSize: "16px" }}>Seconds</span>
            </div>
          </div>

          <GradientButton variant='glow' onClick={handleConfirm} className="w-full">
            <span style={{ fontSize: "18px" }}>Confirm</span>
          </GradientButton>
        </GlassCard>
      </div>
    </div>
  );
}