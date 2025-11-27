import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareSheetProps {
  isOpen: boolean;
  onClose: () => void;
  eventName?: string;
  eventSubtitle?: string;
}

export function ShareSheet({ 
  isOpen, 
  onClose, 
  eventName = "Christmas Party",
  eventSubtitle = "Share event details with your team or guests"
}: ShareSheetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Custom destinations (replacing People row)
  const customDestinations = [
    {
      name: 'Telegram',
      group: 'Event Team Channel',
      icon: '📱',
      color: '#2AABEE'
    },
    {
      name: 'WhatsApp',
      group: 'Friends Group Chat',
      icon: '💬',
      color: '#25D366'
    },
    {
      name: 'Messenger',
      group: 'Media Crew',
      icon: '💙',
      color: '#0084FF'
    },
    {
      name: 'Google Drive',
      group: 'NYE Party 2025',
      icon: '📂',
      color: '#4285F4'
    }
  ];

  // Standard iOS apps
  const standardApps = [
    { name: 'AirDrop', icon: '📡', color: '#007AFF' },
    { name: 'Messages', icon: '💬', color: '#34C759' },
    { name: 'Mail', icon: '✉️', color: '#007AFF' },
    { name: 'Notes', icon: '📝', color: '#FFD60A' },
    { name: 'Reminders', icon: '✓', color: '#FF3B30' },
    { name: 'More', icon: '•••', color: '#8E8E93' }
  ];

  // Action items
  const actions = [
    'Copy',
    'Add to Favorites',
    'Add Bookmark',
    'Add to Home Screen',
    'Markup',
    'More'
  ];

  return (
    <AnimatePresence>
      {isOpen && mounted && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
            onClick={onClose}
          />

          {/* Share Sheet Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed bottom-0 left-0 right-0 z-50"
            style={{
              maxHeight: '90vh',
              overflow: 'hidden'
            }}
          >
            <div
              className="rounded-t-3xl overflow-hidden"
              style={{
                background: 'rgba(17, 18, 20, 0.92)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Scrollable Content */}
              <div className="overflow-y-auto" style={{ maxHeight: '90vh' }}>
                {/* Handle Bar */}
                <div className="flex justify-center pt-3 pb-2">
                  <div
                    className="w-10 h-1 rounded-full"
                    style={{ background: 'rgba(255, 255, 255, 0.3)' }}
                  />
                </div>

                {/* Top Header Tile */}
                <div className="px-4 pt-2 pb-4">
                  <div
                    className="rounded-2xl p-4 flex items-center gap-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Event Thumbnail */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #6C38FF 0%, #7AE0FF 100%)'
                      }}
                    >
                      <span className="text-2xl">🎄</span>
                    </div>

                    {/* Event Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-white" style={{ fontFamily: '-apple-system, SF Pro Text, sans-serif' }}>
                        {eventName}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontFamily: '-apple-system, SF Pro Text, sans-serif'
                        }}
                      >
                        {eventSubtitle}
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      <X className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                    </button>
                  </div>
                </div>

                {/* Custom Destinations Row */}
                <div className="px-4 pb-4">
                  <div className="overflow-x-auto -mx-4 px-4">
                    <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                      {customDestinations.map((dest, index) => (
                        <button
                          key={index}
                          className="flex flex-col items-center gap-2"
                          style={{ width: '80px' }}
                        >
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center"
                            style={{
                              background: dest.color,
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                            }}
                          >
                            <span className="text-2xl">{dest.icon}</span>
                          </div>
                          <div className="text-center">
                            <div
                              className="text-xs leading-tight"
                              style={{
                                color: '#FFFFFF',
                                fontFamily: '-apple-system, SF Pro Text, sans-serif'
                              }}
                            >
                              {dest.name}
                            </div>
                            <div
                              className="text-xs leading-tight mt-0.5"
                              style={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontFamily: '-apple-system, SF Pro Text, sans-serif'
                              }}
                            >
                              {dest.group}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mx-4" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />

                {/* Standard iOS Apps Row */}
                <div className="px-4 py-4">
                  <div className="overflow-x-auto -mx-4 px-4">
                    <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                      {standardApps.map((app, index) => (
                        <button
                          key={index}
                          className="flex flex-col items-center gap-2"
                          style={{ width: '70px' }}
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{
                              background: app.color,
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                            }}
                          >
                            <span className="text-xl">{app.icon}</span>
                          </div>
                          <div
                            className="text-xs text-center"
                            style={{
                              color: '#FFFFFF',
                              fontFamily: '-apple-system, SF Pro Text, sans-serif'
                            }}
                          >
                            {app.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-2" style={{ background: 'rgba(0, 0, 0, 0.2)' }} />

                {/* Action List */}
                <div className="px-4">
                  {actions.map((action, index) => (
                    <React.Fragment key={index}>
                      <button
                        className="w-full py-4 flex items-center justify-between"
                        style={{
                          borderBottom: index < actions.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                        }}
                      >
                        <span
                          style={{
                            color: '#FFFFFF',
                            fontFamily: '-apple-system, SF Pro Text, sans-serif'
                          }}
                        >
                          {action}
                        </span>
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          style={{ opacity: 0.4 }}
                        >
                          <path
                            d="M1 1L6 6L1 11"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </React.Fragment>
                  ))}
                </div>

                {/* Bottom Safe Area */}
                <div className="h-8" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
