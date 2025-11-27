import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from '../GlassCard';
import { GradientButton } from '../GradientButton';
import { StatusBar } from '../StatusBar';
import { Camera } from 'lucide-react';

interface SetPictureCountProps {
  onNext: (count: number) => void;
}

export function SetPictureCount({ onNext }: SetPictureCountProps) {
  const [selectedCount, setSelectedCount] = useState(50);
  const scrollRef = useRef<HTMLDivElement>(null);
  const counts = Array.from({ length: 91 }, (_, i) => i + 10); // 10-100

  useEffect(() => {
    // Center the selected item on mount
    if (scrollRef.current) {
      const selectedIndex = counts.indexOf(selectedCount);
      const itemHeight = 48; // py-3 = 12px * 2 + text height
      scrollRef.current.scrollTop = selectedIndex * itemHeight - scrollRef.current.clientHeight / 2 + itemHeight / 2;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const scrollTop = scrollRef.current.scrollTop;
    const itemHeight = 48;
    const containerHeight = scrollRef.current.clientHeight;
    const centerOffset = containerHeight / 2;
    const scrollCenter = scrollTop + centerOffset;
    const centerIndex = Math.round(scrollCenter / itemHeight);
    const clampedIndex = Math.max(0, Math.min(counts.length - 1, centerIndex));
    
    setSelectedCount(counts[clampedIndex]);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemHeight = 48;
    const targetScroll = index * itemHeight - scrollRef.current.clientHeight / 2 + itemHeight / 2;
    scrollRef.current.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <StatusBar />
      
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <GlassCard className="text-center w-full max-w-md">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 border border-purple-400 rounded-2xl mb-4">
              <Camera className="w-8 h-8 text-purple-300" />
            </div>
            <h2 className="text-white mb-2" style={{ fontSize: "22px" }}>Set Number of Pictures</h2>
            <p className="text-purple-200 text-sm" style={{ fontSize: "16px" }}>How many photos do you want to capture?</p>
          </div>

          {/* Scrollable Wheel Picker */}
          <div className="relative h-64 overflow-hidden mb-8">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to bottom, rgba(108, 56, 255, 0.3) 0%, transparent 40%, transparent 60%, rgba(108, 56, 255, 0.3) 100%)'
              }}
            />
            
            {/* Selection Indicator */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 border-y-2 border-cyan-400/50 pointer-events-none z-10" />
            
            {/* Scrollable Container */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="h-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Top Padding */}
              <div style={{ height: 'calc(50% - 24px)' }} />
              
              {/* Numbers */}
              {counts.map((count, index) => {
                const isSelected = count === selectedCount;
                const distance = Math.abs(counts.indexOf(selectedCount) - index);
                const opacity = Math.max(0.3, 1 - distance * 0.15);
                const scale = Math.max(0.6, 1 - distance * 0.1);
                
                return (
                  <button
                    key={count}
                    onClick={() => {
                      setSelectedCount(count);
                      scrollToIndex(index);
                    }}
                    className={`w-full py-3 transition-all duration-200 snap-center ${
                      isSelected ? 'text-white' : 'text-purple-300'
                    }`}
                    style={{
                      opacity,
                      transform: `scale(${scale})`,
                      fontSize: isSelected ? '34px' : '26px',
                      fontWeight: isSelected ? '600' : '400'
                    }}
                  >
                    {count}
                  </button>
                );
              })}
              
              {/* Bottom Padding */}
              <div style={{ height: 'calc(50% - 24px)' }} />
            </div>
          </div>

          <GradientButton variant='glow' onClick={() => onNext(selectedCount)} className="w-full">
            <span style={{ fontSize: "18px" }}>Next</span>
          </GradientButton>
        </GlassCard>
      </div>
    </div>
  );
}