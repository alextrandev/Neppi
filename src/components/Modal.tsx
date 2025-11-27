import React from 'react';
import { GlassCard } from './GlassCard';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export function Modal({ isOpen, onClose, children, showCloseButton = true }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full animate-in fade-in zoom-in duration-300">
        <GlassCard>
          {showCloseButton && (
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {children}
        </GlassCard>
      </div>
    </div>
  );
}
