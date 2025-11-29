'use client';

import { VideoPlayer } from '@/features/instagram/components/video';

export default function VideoPage() {
  return (
    <div className="bg-black">
      {/* TODO: 실제 영상 URL로 교체 */}
      <VideoPlayer />
    </div>
  );
}
