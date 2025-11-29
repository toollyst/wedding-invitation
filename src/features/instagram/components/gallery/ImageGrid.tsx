'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GALLERY_IMAGES } from '../../constants/profileData';
import { ImageModal } from './ImageModal';

export const ImageGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="ig-grid">
        {GALLERY_IMAGES.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src={src}
              alt={`Wedding photo ${index + 1}`}
              fill
              sizes="(max-width: 430px) 33vw, 143px"
              className="object-cover hover:opacity-90 transition-opacity"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <ImageModal
          images={GALLERY_IMAGES}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
};
