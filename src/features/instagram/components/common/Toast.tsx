'use client';

import { useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';

const TOAST_DURATION = 3000;

export const Toast = () => {
  const { toast, hideToast } = useToast();

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, TOAST_DURATION);

      return () => clearTimeout(timer);
    }
  }, [toast.isVisible, hideToast]);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 ease-out ${
        toast.isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        bottom: '80px',
      }}
      role="alert"
      aria-live="polite"
    >
      <div
        className="px-6 py-3 rounded-lg text-sm font-medium text-white shadow-lg"
        style={{
          backgroundColor:
            toast.type === 'success'
              ? 'rgba(34, 197, 94, 0.95)'
              : 'rgba(239, 68, 68, 0.95)',
        }}
      >
        {toast.message}
      </div>
    </div>
  );
};
