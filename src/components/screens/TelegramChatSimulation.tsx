import React from 'react';
import { ArrowLeft, Search, MoreVertical, Paperclip, Smile, Mic } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import telegramBg from 'figma:asset/6634050482f339907739d77fab002bda71c94ec5.png';
import darkPatternBg from 'figma:asset/420dece96c1ede4d349fa1cf364d298deab3756d.png';
import { getChristmasPhotos } from '../../constants/christmasPhotos';

interface TelegramChatSimulationProps {
  onBack: () => void;
  photoCount?: number;
  filterApplied?: string;
}

export function TelegramChatSimulation({ 
  onBack, 
  photoCount = 20,
  filterApplied = ''
}: TelegramChatSimulationProps) {
  // Christmas party photos (same as used in the app)
  const photos = getChristmasPhotos(6);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0B0B0C' }}>
      {/* iOS Status Bar */}
      <StatusBar />
      
      {/* Telegram Header - Dark Mode */}
      <div 
        className="flex items-center justify-between px-4 py-3"
        style={{ 
          background: '#111214',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}
      >
        <div className="flex items-center gap-3 flex-1">
          {/* Back Arrow */}
          <button
            onClick={onBack}
            className="flex items-center justify-center w-8 h-8"
          >
            <ArrowLeft className="w-6 h-6" style={{ color: '#5EA3FF', strokeWidth: 2 }} />
          </button>
          
          {/* Group Avatar */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#5B9BD5' }}
          >
            <span className="text-white text-sm">ET</span>
          </div>
          
          {/* Group Info */}
          <div className="flex-1 min-w-0">
            <div style={{ color: '#FFFFFF' }}>Event Team Channel</div>
            <div className="text-xs" style={{ color: '#9BA0A6' }}>12 members</div>
          </div>
        </div>
        
        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-6 h-6">
            <Search className="w-5 h-5" style={{ color: '#5EA3FF' }} />
          </button>
          <button className="flex items-center justify-center w-6 h-6">
            <MoreVertical className="w-5 h-5" style={{ color: '#5EA3FF' }} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{ 
          backgroundImage: `url(${darkPatternBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="space-y-3 max-w-md mx-auto">
          
          {/* Incoming Message - Alya */}
          <div className="flex items-start gap-2">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#FF6B9D' }}
            >
              <span className="text-white text-xs">A</span>
            </div>
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="text-xs" style={{ color: '#FF6B9D' }}>Alya</div>
              <div 
                className="px-3 py-2 rounded-2xl rounded-tl-md"
                style={{ background: '#2A2A2D' }}
              >
                <p className="text-sm" style={{ color: '#E6E7E9' }}>
                  Hey everyone, I just arrived at the venue!
                </p>
                <div className="text-xs mt-1" style={{ color: '#8A8B8F' }}>7:55</div>
              </div>
            </div>
          </div>

          {/* Incoming Message - Ben */}
          <div className="flex items-start gap-2">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#4CAF50' }}
            >
              <span className="text-white text-xs">B</span>
            </div>
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="text-xs" style={{ color: '#4CAF50' }}>Ben</div>
              <div 
                className="px-3 py-2 rounded-2xl rounded-tl-md"
                style={{ background: '#2A2A2D' }}
              >
                <p className="text-sm" style={{ color: '#E6E7E9' }}>
                  I'm coming now 😅 traffic was crazy.
                </p>
                <div className="text-xs mt-1" style={{ color: '#8A8B8F' }}>8:03</div>
              </div>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end">
            <div 
              className="px-3 py-2 rounded-2xl rounded-tr-md max-w-[70%]"
              style={{ background: '#2F70C8' }}
            >
              <p className="text-sm text-white">
                You guys will love the setup today.
              </p>
              <div className="text-xs mt-1 text-right" style={{ color: '#B0D4FF' }}>8:10</div>
            </div>
          </div>

          {/* Incoming Message - Kate */}
          <div className="flex items-start gap-2">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#FF9800' }}
            >
              <span className="text-white text-xs">K</span>
            </div>
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="text-xs" style={{ color: '#FF9800' }}>Kate</div>
              <div 
                className="px-3 py-2 rounded-2xl rounded-tl-md"
                style={{ background: '#2A2A2D' }}
              >
                <p className="text-sm" style={{ color: '#E6E7E9' }}>
                  Where's all the photos?
                </p>
                <div className="text-xs mt-1" style={{ color: '#8A8B8F' }}>10:29</div>
              </div>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end">
            <div 
              className="px-3 py-2 rounded-2xl rounded-tr-md max-w-[70%]"
              style={{ background: '#2F70C8' }}
            >
              <p className="text-sm text-white">
                Coming! I'm waiting for the AI filter.
              </p>
              <div className="text-xs mt-1 text-right" style={{ color: '#B0D4FF' }}>10:30</div>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end">
            <div 
              className="px-3 py-2 rounded-2xl rounded-tr-md max-w-[70%]"
              style={{ background: '#2F70C8' }}
            >
              <p className="text-sm text-white">
                Photos are uploading… Give me one sec 👀
              </p>
              <div className="text-xs mt-1 text-right" style={{ color: '#B0D4FF' }}>10:31</div>
            </div>
          </div>

          {/* System Bubble - Centered */}
          <div className="flex justify-center my-4">
            <div 
              className="px-4 py-2 rounded-full"
              style={{ background: 'rgba(255, 255, 255, 0.85)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <p className="text-xs" style={{ color: '#3C3C43' }}>
                You sent {photoCount} photos
              </p>
            </div>
          </div>

          {/* Outgoing Photo Bubble */}
          <div className="flex justify-end">
            <div 
              className="rounded-2xl rounded-tr-md overflow-hidden max-w-[80%]"
              style={{ background: '#2F70C8' }}
            >
              {/* Photo Grid - 2x3 */}
              <div className="grid grid-cols-2 gap-0.5 p-0.5">
                {photos.map((photo, index) => (
                  <div 
                    key={index}
                    className="aspect-square overflow-hidden relative"
                    style={{ 
                      borderRadius: index === 0 ? '12px 0 0 0' : 
                                    index === 1 ? '0 12px 0 0' : 
                                    index === 4 ? '0 0 0 12px' :
                                    index === 5 ? '0 0 12px 0' : '0'
                    }}
                  >
                    <ImageWithFallback
                      src={photo}
                      alt={`Event photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'sepia(0.4) contrast(1.1) brightness(0.95) saturate(0.8)',
                      }}
                    />
                    {/* Vintage film grain overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.15) 100%)',
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Caption */}
              <div className="px-3 py-2">
                <p className="text-sm text-white mb-1">
                  Shared via Camera Connect
                </p>
                <div className="text-xs text-right" style={{ color: '#B0D4FF' }}>10:32</div>
              </div>
            </div>
          </div>

          {/* Incoming Message - Ben Response */}
          <div className="flex items-start gap-2">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#4CAF50' }}
            >
              <span className="text-white text-xs">B</span>
            </div>
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="text-xs" style={{ color: '#4CAF50' }}>Ben</div>
              <div 
                className="px-3 py-2 rounded-2xl rounded-tl-md"
                style={{ background: '#2A2A2D' }}
              >
                <p className="text-sm" style={{ color: '#E6E7E9' }}>
                  OHH these look sooo good 🔥🔥
                </p>
                <div className="text-xs mt-1" style={{ color: '#8A8B8F' }}>10:32</div>
              </div>
            </div>
          </div>

          {/* Incoming Message - Kate Response */}
          <div className="flex items-start gap-2">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#FF9800' }}
            >
              <span className="text-white text-xs">K</span>
            </div>
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="text-xs" style={{ color: '#FF9800' }}>Kate</div>
              <div 
                className="px-3 py-2 rounded-2xl rounded-tl-md"
                style={{ background: '#2A2A2D' }}
              >
                <p className="text-sm" style={{ color: '#E6E7E9' }}>
                  Wow the filter is perfect — what did you use?
                </p>
                <div className="text-xs mt-1" style={{ color: '#8A8B8F' }}>10:33</div>
              </div>
            </div>
          </div>

          {/* Outgoing Message - Final */}
          <div className="flex justify-end">
            <div 
              className="px-3 py-2 rounded-2xl rounded-tr-md max-w-[70%]"
              style={{ background: '#2F70C8' }}
            >
              <p className="text-sm text-white">
                Just typed a simple prompt! I'll pin the photos in our chat.
              </p>
              <div className="text-xs mt-1 text-right" style={{ color: '#B0D4FF' }}>10:34</div>
            </div>
          </div>

        </div>
      </div>

      {/* Telegram Message Input Bar - Dark Mode */}
      <div 
        className="px-4 py-2"
        style={{ 
          background: '#1A1A1C',
          borderTop: 'none'
        }}
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Paperclip Icon */}
          <button 
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <Paperclip className="w-5 h-5" style={{ color: '#C4C5C8' }} />
          </button>
          
          {/* Input Field */}
          <div 
            className="flex-1 px-4 py-2 rounded-full flex items-center"
            style={{ 
              background: '#242427',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)'
            }}
          >
            <input
              type="text"
              placeholder="Message"
              className="w-full bg-transparent outline-none text-sm"
              style={{ color: '#FFFFFF' }}
            />
            <style>{`
              input::placeholder {
                color: #8C8D92;
              }
            `}</style>
          </div>
          
          {/* Emoji Icon */}
          <button 
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <Smile className="w-5 h-5" style={{ color: '#C4C5C8' }} />
          </button>
          
          {/* Microphone Icon */}
          <button 
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <Mic className="w-5 h-5" style={{ color: '#C4C5C8' }} />
          </button>
        </div>
      </div>
    </div>
  );
}