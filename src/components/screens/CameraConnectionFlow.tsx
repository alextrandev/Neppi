import React, { useState, useEffect } from 'react';
import { Camera, Check } from 'lucide-react';
import { StatusBar } from '../StatusBar';

interface CameraConnectionFlowProps {
  onComplete: () => void;
}

export function CameraConnectionFlow({ onComplete }: CameraConnectionFlowProps) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    // State 1 (empty) → State 2 (camera icons appear) - 2s
    const timer1 = setTimeout(() => setStep(2), 2000);
    
    // State 2 → State 3 (pending indicators appear) - 2s
    const timer2 = setTimeout(() => setStep(3), 4000);
    
    // State 3 → State 4 (checkmarks appear, ready!) - 3s
    const timer3 = setTimeout(() => setStep(4), 7000);
    
    // State 4 → State 5 (confirmation screen) - 1.5s
    const timer4 = setTimeout(() => setStep(5), 8500);
    
    // State 5 → Complete and navigate - 1.5s
    const timer5 = setTimeout(() => onComplete(), 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* State 5: Large Confirmation Screen */}
        {step === 5 ? (
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              animation: 'fadeIn 0.8s ease-out'
            }}
          >
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center mb-8"
              style={{
                background: '#10b981',
                boxShadow: '0 0 60px rgba(16, 185, 129, 0.8), 0 0 100px rgba(16, 185, 129, 0.4)',
                animation: 'scaleIn 0.8s ease-out'
              }}
            >
              <Check className="w-20 h-20 text-white" strokeWidth={3} />
            </div>
            
            <h1 
              className="text-center"
              style={{
                animation: 'fadeIn 1s ease-out 0.3s both',
                color: '#4a3b6b',
                fontSize: '21px'
              }}
            >
              All cameras connected successfully!
            </h1>
          </div>
        ) : (
          <>
            {/* Main Title - States 1-4 */}
            <h1 className="text-[rgb(74,59,107)] text-center mb-16 text-[20px]">
              {step < 4 ? 'Connecting...' : 'Ready!'}
            </h1>

            {/* Camera Icons Container - Steps 2, 3, 4 */}
            {step >= 2 && (
              <div 
                className="flex items-start justify-center gap-12 mb-12"
                style={{
                  animation: step === 2 ? 'fadeIn 0.8s ease-out' : 'none'
                }}
              >
                {/* Camera 1 */}
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    {/* Camera Icon */}
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center relative"
                      style={{
                        background: 'linear-gradient(135deg, #6C38FF 0%, #7AE0FF 100%)',
                        boxShadow: '0 0 40px rgba(122, 224, 255, 0.5), 0 0 80px rgba(108, 56, 255, 0.3)'
                      }}
                    >
                      <Camera className="w-12 h-12 text-white" strokeWidth={2} />
                      
                      {/* Numbered Badge */}
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #7AE0FF 0%, #6C38FF 100%)',
                          border: '2px solid white',
                          boxShadow: '0 0 20px rgba(122, 224, 255, 0.6)'
                        }}
                      >
                        <span className="text-white text-sm">1</span>
                      </div>
                    </div>
                  </div>

                  {/* Pending/Check Indicator */}
                  {step >= 3 && (
                    <div
                      style={{
                        animation: step === 3 ? 'fadeIn 0.5s ease-out' : step === 4 ? 'bounceIn 0.6s ease-out' : 'none'
                      }}
                    >
                      {step === 3 ? (
                        // Pending State
                        <div
                          className="w-12 h-12 rounded-full border-4 border-cyan-400/30"
                          style={{
                            borderTopColor: '#7AE0FF',
                            animation: 'spin 1.5s linear infinite'
                          }}
                        />
                      ) : (
                        // Check State
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: '#10b981',
                            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)'
                          }}
                        >
                          <Check className="w-7 h-7 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Camera 2 */}
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    {/* Camera Icon */}
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center relative"
                      style={{
                        background: 'linear-gradient(135deg, #6C38FF 0%, #7AE0FF 100%)',
                        boxShadow: '0 0 40px rgba(122, 224, 255, 0.5), 0 0 80px rgba(108, 56, 255, 0.3)'
                      }}
                    >
                      <Camera className="w-12 h-12 text-white" strokeWidth={2} />
                      
                      {/* Numbered Badge */}
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #7AE0FF 0%, #6C38FF 100%)',
                          border: '2px solid white',
                          boxShadow: '0 0 20px rgba(122, 224, 255, 0.6)'
                        }}
                      >
                        <span className="text-white text-sm">2</span>
                      </div>
                    </div>
                  </div>

                  {/* Pending/Check Indicator */}
                  {step >= 3 && (
                    <div
                      style={{
                        animation: step === 3 ? 'fadeIn 0.5s ease-out 0.2s both' : step === 4 ? 'bounceIn 0.6s ease-out 0.3s both' : 'none'
                      }}
                    >
                      {step === 3 ? (
                        // Pending State
                        <div
                          className="w-12 h-12 rounded-full border-4 border-cyan-400/30"
                          style={{
                            borderTopColor: '#7AE0FF',
                            animation: 'spin 1.5s linear infinite'
                          }}
                        />
                      ) : (
                        // Check State
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: '#10b981',
                            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)'
                          }}
                        >
                          <Check className="w-7 h-7 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
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

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}