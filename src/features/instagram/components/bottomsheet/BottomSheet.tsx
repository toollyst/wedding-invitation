'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  title,
}: BottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOpen, setIsAnimatingOpen] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const currentY = useRef(0);

  // Handle open/close animation
  useEffect(() => {
    if (isOpen) {
      // Mount first, then animate
      setIsVisible(true);
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingOpen(true);
        });
      });
    } else {
      // Animate out first
      setIsAnimatingOpen(false);
      // Then unmount after animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  // Common drag handlers
  const startDrag = useCallback((clientY: number) => {
    setIsDragging(true);
    dragStartY.current = clientY;
    currentY.current = 0;
  }, []);

  const moveDrag = useCallback(
    (clientY: number) => {
      if (!isDragging) return;
      const diff = clientY - dragStartY.current;
      if (diff > 0) {
        currentY.current = diff;
        setTranslateY(diff);
      }
    },
    [isDragging]
  );

  const endDrag = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (currentY.current > 100) {
      onClose();
    }
    setTranslateY(0);
  }, [isDragging, onClose]);

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      startDrag(e.touches[0].clientY);
    },
    [startDrag]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      moveDrag(e.touches[0].clientY);
    },
    [moveDrag]
  );

  const handleTouchEnd = useCallback(() => {
    endDrag();
  }, [endDrag]);

  // Mouse event handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      startDrag(e.clientY);
    },
    [startDrag]
  );

  // Global mouse move/up handlers (attached to document when dragging)
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      moveDrag(e.clientY);
    };

    const handleMouseUp = () => {
      endDrag();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, moveDrag, endDrag]);

  if (!isVisible) return null;

  const sheetClassName = [
    'ig-bottom-sheet',
    isAnimatingOpen && !isDragging ? 'open' : '',
    isDragging ? 'dragging' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Backdrop */}
      <div
        className={`ig-backdrop ${isAnimatingOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={sheetClassName}
        style={
          isDragging
            ? { transform: `translateX(-50%) translateY(${translateY}px)` }
            : undefined
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'bottom-sheet-title' : undefined}
      >
        {/* Drag handle */}
        <div
          className="pt-2 pb-2 cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <div className="ig-bottom-sheet-handle" />
        </div>

        {/* Title */}
        {title && (
          <h2
            id="bottom-sheet-title"
            className="text-center font-semibold text-base pb-4"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="px-4 pb-8 max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </>
  );
};
