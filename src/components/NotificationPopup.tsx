import React from 'react';
import { Modal } from './Modal';
import { GradientButton } from './GradientButton';
import { Camera } from 'lucide-react';

interface NotificationPopupProps {
  isOpen: boolean;
  onYes: () => void;
  onLater: () => void;
  title: string;
  message: string;
}

export function NotificationPopup({ isOpen, onYes, onLater, title, message }: NotificationPopupProps) {
  return (
    <Modal isOpen={isOpen} onClose={onLater} showCloseButton={false}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 border border-cyan-400 rounded-2xl mb-4">
          <Camera className="w-8 h-8 text-cyan-300" />
        </div>
        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-purple-200 text-sm mb-6">{message}</p>
        
        <div className="space-y-3">
          <GradientButton onClick={onYes} className="w-full">
            Yes
          </GradientButton>
          <GradientButton onClick={onLater} variant="secondary" className="w-full">
            Later
          </GradientButton>
        </div>
      </div>
    </Modal>
  );
}
