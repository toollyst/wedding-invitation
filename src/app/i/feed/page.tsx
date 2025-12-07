'use client';

import Image from 'next/image';
import { PROFILE_DATA } from '@/features/instagram/constants/profileData';
import { GALLERY_IMAGES } from '@/features/instagram/constants/profileData';
import { FeedPost } from '@/features/instagram/components/feed';

export default function FeedPage() {
  return (
    <div>
      {/* Feed Header */}
      <header
        className="sticky top-0 bg-white z-20 flex items-center justify-between px-4"
        style={{
          height: 'var(--ig-header-height)',
        }}
      >
        <Image
          src="/IG logo.svg"
          alt="Logo"
          width={103}
          height={29}
          className="h-[29px] w-auto"
        />
        <div className="flex items-center gap-3">
          <button className="p-1" aria-label="Like">
            <Image
              src="/Name=Like, State=default, Dark=no.svg"
              alt="Notifications"
              width={24}
              height={24}
            />
          </button>
          <button className="p-1" aria-label="Messages">
            <Image
              src="/Name=Messenger, State=default, Dark=no.svg"
              alt="Messages"
              width={24}
              height={24}
            />
          </button>
        </div>
      </header>

      {/* Stories Row */}
      <div
        className="px-2 py-3 overflow-x-auto scrollbar-hide border-b"
        style={{ borderColor: 'var(--ig-border)' }}
      >
        <div className="flex gap-4">
          {/* Your Story */}
          <div className="flex flex-col items-center gap-1">
            <div className="relative w-16 h-16">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src="/images/wedding10.jpg"
                  alt="Your story"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                style={{ background: 'var(--ig-blue)' }}
              >
                +
              </div>
            </div>
            <span
              className="text-xs"
              style={{ color: 'var(--ig-text-primary)' }}
            >
              내 스토리
            </span>
          </div>

          {/* Other Stories */}
          {GALLERY_IMAGES.slice(0, 5).map((img, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="ig-story-ring w-[66px] h-[66px]">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={img}
                      alt={`Story ${index + 1}`}
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <span
                className="text-xs max-w-[64px] truncate"
                style={{ color: 'var(--ig-text-primary)' }}
              >
                {PROFILE_DATA.username.split('.')[index % 2]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Posts */}
      <div>
        {GALLERY_IMAGES.map((image, index) => (
          <FeedPost key={index} imageSrc={image} index={index} />
        ))}
      </div>
    </div>
  );
}
