'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import type { StoryHighlight, StoryContent } from '../../types/instagram';

interface StoryViewerProps {
  highlight: StoryHighlight;
  onClose: () => void;
}

export const StoryViewer = ({ highlight, onClose }: StoryViewerProps) => {
  const contents = highlight.content || [
    {
      type: 'text' as const,
      image: highlight.coverImage,
      title: highlight.label,
      description: '내용이 준비 중입니다.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const STORY_DURATION = 5000; // 5 seconds per story

  const handleNext = useCallback(() => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, contents.length, onClose]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (STORY_DURATION / 100));
        if (newProgress >= 100) {
          handleNext();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  // Handle touch areas
  const handleTouch = (e: React.MouseEvent | React.TouchEvent) => {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const width = rect.width;

    if (x < width / 3) {
      handlePrev();
    } else if (x > (width * 2) / 3) {
      handleNext();
    }
  };

  const currentContent: StoryContent = contents[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Progress bars */}
      <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
        {contents.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width:
                  index < currentIndex
                    ? '100%'
                    : index === currentIndex
                    ? `${progress}%`
                    : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-6 left-4 right-4 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/images/wedding10.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-white text-sm font-semibold">
            {highlight.label}
          </span>
        </div>
        <button onClick={onClose} className="p-1" aria-label="Close">
          <Image
            src="/Name=Exit, State=default, Dark=yes.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Story content */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        onClick={handleTouch}
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Background image */}
        <Image
          src={currentContent.image || highlight.coverImage}
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Text content */}
        {currentContent.type === 'text' && (
          <div className="absolute bottom-20 left-4 right-4 text-white text-center">
            {currentContent.title && (
              <h2 className="text-2xl font-bold mb-2">{currentContent.title}</h2>
            )}
            {currentContent.description && (
              <p className="text-sm whitespace-pre-line opacity-90">
                {currentContent.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
