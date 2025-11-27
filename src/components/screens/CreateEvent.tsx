import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { GradientButton } from '../GradientButton';
import { Modal } from '../Modal';
import { StatusBar } from '../StatusBar';
import { Calendar, MapPin, Sparkles, Camera, CheckCircle2, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

interface CreateEventProps {
  onSetupCamera: (eventData: {
    eventName: string;
    eventDate: string;
    destinations: string[];
    aiPrompt: string;
  }) => void;
  onBack: () => void;
}

export function CreateEvent({ onSetupCamera, onBack }: CreateEventProps) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [destination, setDestination] = useState<string[]>([]);
  const [aiPrompt, setAiPrompt] = useState('');
  const [showModal, setShowModal] = useState(false);

  const destinations = ['Google Drive', 'Telegram', 'WhatsApp'];

  const handleSetupCamera = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      onSetupCamera({ eventName, eventDate, destinations, aiPrompt });
    }, 2000);
  };

  const toggleDestination = (dest: string) => {
    setDestination(prev => 
      prev.includes(dest) 
        ? prev.filter(d => d !== dest)
        : [...prev, dest]
    );
  };

  return (
    <div className="space-y-6">
      <StatusBar />
      
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 backdrop-blur-xl rounded-full flex items-center justify-center transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(164, 128, 255, 0.25)',
            color: '#4A3B6B'
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 style={{ color: '#4A3B6B' }}>Create New Event</h2>
          <p className="text-sm" style={{ color: '#7C6BA1' }}>Set up your session</p>
        </div>
      </div>

      {/* Form Fields */}
      <GlassCard>
        <div className="space-y-5">
          {/* Event Name */}
          <div>
            <label className="text-sm mb-2 block" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Event Name</label>
            <div className="relative">
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Summer Wedding 2024"
                className="w-full px-4 py-3 backdrop-blur-xl rounded-xl focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                }}
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#E9CBE6' }} />
            </div>
          </div>

          {/* Event Date */}
          <div>
            <label className="text-sm mb-2 block" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Event Date</label>
            <div className="relative">
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 backdrop-blur-xl rounded-xl focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2)',
                  colorScheme: 'dark'
                }}
              />
            </div>
          </div>

          {/* Select Destinations */}
          <div>
            <label className="text-sm mb-2 block" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Select Destinations</label>
            <div className="space-y-2">
              {destinations.map((dest) => (
                <button
                  key={dest}
                  onClick={() => toggleDestination(dest)}
                  className={`w-full px-4 py-3 backdrop-blur-xl rounded-xl flex items-center justify-between transition-all`}
                  style={
                    destination.includes(dest)
                      ? {
                          background: 'linear-gradient(135deg, rgba(164, 128, 255, 0.4), rgba(122, 224, 255, 0.3))',
                          border: '2px solid rgba(122, 224, 255, 0.5)',
                          color: '#FFFFFF',
                          boxShadow: '0 0 20px rgba(122, 224, 255, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                        }
                      : {
                          background: 'rgba(255, 255, 255, 0.15)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          color: 'rgba(255, 255, 255, 0.85)',
                          boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.15)'
                        }
                  }
                >
                  <span>{dest}</span>
                  {destination.includes(dest) && (
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#7AE0FF' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* AI Prompt Optional */}
          <div>
            <label className="text-sm mb-2 block flex items-center gap-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              <Sparkles className="w-4 h-4" />
              AI Style Prompt (Optional)
            </label>
            <textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Vintage film aesthetic with warm tones..."
              className="w-full px-4 py-3 backdrop-blur-xl rounded-xl resize-none h-24 focus:outline-none"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2)'
              }}
            />
          </div>
        </div>
      </GlassCard>

      <GradientButton
        variant='glow'
        onClick={handleSetupCamera} 
        className="w-full"
        disabled={!eventName || !eventDate || destination.length === 0}
      >
        <div className="flex items-center justify-center gap-2">
          <Camera className="w-5 h-5" />
          <span style={{ fontSize: "17px" }}>Setup Camera</span>
        </div>
      </GradientButton>

      {/* Success Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} showCloseButton={false}>
        <div className="text-center py-6">
          <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4" />
          <h3 className="text-white mb-2">All Set!</h3>
          <p className="text-purple-200 text-sm">Preparing camera setup...</p>
        </div>
      </Modal>
    </div>
  );
}