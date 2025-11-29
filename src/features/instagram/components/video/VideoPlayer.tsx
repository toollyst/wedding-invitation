'use client';

import Image from 'next/image';
import { PROFILE_DATA } from '../../constants/profileData';

interface VideoPlayerProps {
  // TODO: 영상 URL 추가 시 사용
  videoSrc?: string;
}

export const VideoPlayer = ({ videoSrc }: VideoPlayerProps) => {
  // Placeholder state - 실제 영상 추가 시 제거
  const isPlaceholder = !videoSrc;

  return (
    <div className="relative h-[calc(100dvh-var(--ig-nav-height))] bg-black flex flex-col">
      {/* Video Area */}
      <div className="flex-1 relative flex items-center justify-center">
        {isPlaceholder ? (
          // Placeholder UI
          <div className="text-center text-white px-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <Image
                src="/Name=Reels, State=default, Dark=yes.svg"
                alt="Video"
                width={48}
                height={48}
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">웨딩 영상</h2>
            <p className="text-white/70 text-sm">
              아름다운 웨딩 영상이 곧 공개됩니다.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Coming Soon
            </p>
          </div>
        ) : (
          // TODO: 실제 영상 플레이어 구현
          <video
            src={videoSrc}
            className="w-full h-full object-contain"
            controls
            playsInline
            autoPlay
            muted
          />
        )}

        {/* Gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Side Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
        <button className="flex flex-col items-center gap-1" aria-label="Like">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/Name=Like, State=default, Dark=yes.svg"
              alt="Like"
              width={28}
              height={28}
            />
          </div>
          <span className="text-white text-xs">2.6K</span>
        </button>
        <button className="flex flex-col items-center gap-1" aria-label="Comment">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/Name=Comment, State=default, Dark=yes.svg"
              alt="Comment"
              width={28}
              height={28}
            />
          </div>
          <span className="text-white text-xs">128</span>
        </button>
        <button className="flex flex-col items-center gap-1" aria-label="Share">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/Name=Share, State=default, Dark=yes.svg"
              alt="Share"
              width={28}
              height={28}
            />
          </div>
          <span className="text-white text-xs">공유</span>
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 left-4 right-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/wedding10.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-white font-semibold text-sm">
            {PROFILE_DATA.username}
          </span>
        </div>
        <p className="text-white text-sm">
          Our Wedding Film 💒
        </p>
      </div>
    </div>
  );
};
