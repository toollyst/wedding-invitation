'use client';

import Image from 'next/image';
import { PROFILE_DATA } from '../../constants/profileData';

interface FeedPostProps {
  imageSrc: string;
  index: number;
}

export const FeedPost = ({ imageSrc, index }: FeedPostProps) => {
  return (
    <article className="border-b" style={{ borderColor: 'var(--ig-border)' }}>
      {/* Post Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/wedding10.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span
            className="font-semibold text-sm"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {PROFILE_DATA.username}
          </span>
        </div>
        <button className="p-2" aria-label="More options">
          <Image
            src="/Name=More, State=default, Dark=no.svg"
            alt="More"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square">
        <Image
          src={imageSrc}
          alt={`Wedding photo ${index + 1}`}
          fill
          sizes="(max-width: 430px) 100vw, 430px"
          className="object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-1" aria-label="Like">
              <Image
                src="/Name=Like, State=default, Dark=no.svg"
                alt="Like"
                width={24}
                height={24}
              />
            </button>
            <button className="p-1" aria-label="Comment">
              <Image
                src="/Name=Comment, State=default, Dark=no.svg"
                alt="Comment"
                width={24}
                height={24}
              />
            </button>
            <button className="p-1" aria-label="Share">
              <Image
                src="/Name=Share, State=default, Dark=no.svg"
                alt="Share"
                width={24}
                height={24}
              />
            </button>
          </div>
          <button className="p-1" aria-label="Bookmark">
            <Image
              src="/Name=Bookmark, State=default, Dark=no.svg"
              alt="Bookmark"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Likes */}
        <p
          className="mt-2 font-semibold text-sm text-left"
          style={{ color: 'var(--ig-text-primary)' }}
        >
          좋아요 {((index + 1) * 127) % 500 + 100}개
        </p>

        {/* Caption */}
        <p className="mt-1 text-sm text-left" style={{ color: 'var(--ig-text-primary)' }}>
          <span className="font-semibold">{PROFILE_DATA.username}</span>{' '}
          우리의 소중한 순간들 💕 #웨딩 #결혼 #행복
        </p>
      </div>
    </article>
  );
};
