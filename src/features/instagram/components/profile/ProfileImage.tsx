'use client';

import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  size?: number;
  onClick?: () => void;
  showStoryRing?: boolean;
}

export const ProfileImage = ({
  src,
  size = 86,
  onClick,
  showStoryRing = true,
}: ProfileImageProps) => {
  const imageSize = showStoryRing ? size - 8 : size;

  const imageElement = (
    <div
      className="rounded-full overflow-hidden bg-white"
      style={{
        width: imageSize,
        height: imageSize,
        padding: showStoryRing ? 2 : 0,
      }}
    >
      <Image
        src={src}
        alt="Profile"
        width={imageSize}
        height={imageSize}
        className="rounded-full object-cover"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );

  if (showStoryRing) {
    return (
      <button
        onClick={onClick}
        className="ig-story-ring cursor-pointer"
        style={{ width: size, height: size }}
        aria-label="View story"
      >
        {imageElement}
      </button>
    );
  }

  return onClick ? (
    <button onClick={onClick} className="cursor-pointer">
      {imageElement}
    </button>
  ) : (
    imageElement
  );
};
