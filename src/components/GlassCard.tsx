import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  noShadow?: boolean;
}

export function GlassCard({ children, className = '', noShadow }: GlassCardProps) {
  return (
    <div 
      className={`backdrop-blur-xl rounded-3xl p-6 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(87, 48, 193) 0%, rgba(155, 86, 210, 0.75) 100%)',
        border: '1px solid rgba(155, 86, 210, 0.4)',
        boxShadow: noShadow ? 'none' : '0 8px 32px 0 rgba(88, 48, 195, 0.3), 0 2px 8px 0 rgba(155, 86, 210, 0.2), inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), inset 0 -2px 4px 0 rgba(88, 48, 195, 0.2)',
        position: 'relative'
      }}
    >
      {/* Subtle noise texture for premium depth */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      {/* Soft highlight at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 rounded-t-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}