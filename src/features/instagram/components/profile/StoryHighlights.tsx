'use client';

import Image from 'next/image';
import { STORY_HIGHLIGHTS } from '../../constants/profileData';
import type { StoryHighlight } from '../../types/instagram';

interface StoryHighlightsProps {
  onHighlightClick: (highlight: StoryHighlight) => void;
}

export const StoryHighlights = ({ onHighlightClick }: StoryHighlightsProps) => {
  return (
    <div className="px-4 mt-4">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {STORY_HIGHLIGHTS.map((highlight) => (
          <button
            key={highlight.id}
            onClick={() => onHighlightClick(highlight)}
            className="flex flex-col items-center gap-1 flex-shrink-0"
          >
            {/* Story ring */}
            <div
              className="rounded-full p-[2px]"
              style={{
                background: 'var(--ig-border)',
              }}
            >
              <div className="rounded-full p-[2px] bg-white">
                <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                  <Image
                    src={highlight.coverImage}
                    alt={highlight.label}
                    width={58}
                    height={58}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Label */}
            <span
              className="text-xs max-w-[64px] truncate"
              style={{ color: 'var(--ig-text-primary)' }}
            >
              {highlight.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
