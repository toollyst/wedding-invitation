'use client';

import { STORY_HIGHLIGHTS } from '../constants/profileData';
import { InstagramAvatar } from './instagram-avatar';

export function Stories() {
  const handleStoryClick = () => {
    //
  };

  return (
    <div className="mt-4 px-4">
      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
        {STORY_HIGHLIGHTS.map((highlight) => (
          <button
            key={highlight.id}
            onClick={() => handleStoryClick()}
            className="flex flex-shrink-0 flex-col items-center gap-1"
          >
            <InstagramAvatar
              size={58}
              ringWidth={2.5}
              padding={3.5}
              src={highlight.coverImage}
            />
            <span className="truncate text-xs">{highlight.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
