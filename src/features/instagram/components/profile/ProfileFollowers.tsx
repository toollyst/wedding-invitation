import Image from 'next/image';

export const ProfileFollowers = () => {
  return (
    <div className="px-4 mt-3 flex items-center">
      {/* Overlapping profile thumbnails */}
      <div className="flex -space-x-2">
        <div
          className="w-5 h-5 rounded-full overflow-hidden border border-white"
          style={{ zIndex: 2 }}
        >
          <Image
            src="/images/wedding1.jpg"
            alt="Follower"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
        <div
          className="w-5 h-5 rounded-full overflow-hidden border border-white"
          style={{ zIndex: 1 }}
        >
          <Image
            src="/images/wedding2.jpg"
            alt="Follower"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
      </div>

      {/* Follower text */}
      <p
        className="text-xs ml-2"
        style={{ color: 'var(--ig-text-secondary)' }}
      >
        <span style={{ color: 'var(--ig-text-primary)' }}>rachel_yh.kim</span>님,{' '}
        <span style={{ color: 'var(--ig-text-primary)' }}>shim_sangwon</span>님 외{' '}
        <span style={{ color: 'var(--ig-text-primary)' }}>100명</span>이 팔로우합니다
      </p>
    </div>
  );
};
