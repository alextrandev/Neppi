import React from 'react';
import { GlassCard } from './GlassCard';
import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  eventName: string;
  eventDate: string;
  countdown?: string;
  qrCode?: boolean;
  className?: string;
}

export function EventCard({ eventName, eventDate, countdown, qrCode = false, className = '' }: EventCardProps) {
  return (
    <GlassCard className={className}>
      <div className="space-y-4">
        <div>
          <h2 className="text-white mb-2">{eventName}</h2>
          <div className="flex items-center gap-2 text-purple-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{eventDate}</span>
          </div>
        </div>
        
        {countdown && (
          <div className="flex items-center gap-2 text-cyan-300">
            <Clock className="w-5 h-5" />
            <span>{countdown}</span>
          </div>
        )}
        
        {qrCode && (
          <div className="flex items-center justify-center p-6 bg-white rounded-xl">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <div className="w-44 h-44 bg-white rounded-md grid grid-cols-8 gap-1 p-2">
                {[...Array(64)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-sm`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
