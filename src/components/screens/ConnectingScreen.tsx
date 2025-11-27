import React, { useState, useEffect } from 'react';
import { GlassCard } from '../GlassCard';
import { CameraIcon } from '../CameraIcon';
import { GradientButton } from '../GradientButton';
import { StatusBar } from '../StatusBar';
import { CheckCircle2 } from 'lucide-react';

interface ConnectingScreenProps {
  onComplete: () => void;
}

export function ConnectingScreen({ onComplete }: ConnectingScreenProps) {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 4500)
    ];
    
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-6">
      <StatusBar />
      
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <GlassCard className="text-center">
          <div className="mb-6">
            <h2 className="text-white mb-2">
              {step < 3 ? 'Connecting Cameras...' : 'All Cameras Ready!'}
            </h2>
            <p className="text-purple-200 text-sm">
              {step < 3 ? 'Please wait while we establish connections' : 'You can start capturing now'}
            </p>
          </div>

          {/* Camera Icons Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {step >= 1 && (
              <CameraIcon 
                number={1} 
                state={step >= 3 ? 'connected' : 'connecting'}
              />
            )}
            {step >= 2 && (
              <CameraIcon 
                number={2} 
                state={step >= 3 ? 'connected' : 'connecting'}
              />
            )}
          </div>

          {/* Success Icon */}
          {step === 3 && (
            <div className="mb-6 animate-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-emerald-300" />
              </div>
            </div>
          )}

          {/* Loading Dots */}
          {step < 3 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )}

          {step === 3 && (
            <GradientButton onClick={onComplete} className="w-full mt-4">
              Continue
            </GradientButton>
          )}
        </GlassCard>
      </div>
    </div>
  );
}