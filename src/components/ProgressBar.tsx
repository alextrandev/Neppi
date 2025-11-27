import React from 'react';

interface ProgressBarProps {
  percentage: number;
  className?: string;
}

export function ProgressBar({ percentage, className = '' }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
        <div 
          className="h-full transition-all duration-500 ease-out rounded-full"
          style={{
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #6C38FF 0%, #7AE0FF 100%)',
            boxShadow: '0 0 10px rgba(122, 224, 255, 0.5)'
          }}
        />
      </div>
      <div className="text-center mt-2 text-cyan-300">{percentage}%</div>
    </div>
  );
}
