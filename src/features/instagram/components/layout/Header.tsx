'use client';

import Image from 'next/image';
import { PROFILE_DATA } from '../../constants/profileData';

interface HeaderProps {
  onAddClick?: () => void;
}

export const Header = ({ onAddClick }: HeaderProps) => {
  // TODO: 카카오톡 공유 기능 추가 예정
  // 현재는 Web Share API fallback 사용
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${PROFILE_DATA.displayName} 결혼합니다`,
          text: `${PROFILE_DATA.bio}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
        console.log('Share cancelled');
      }
    } else {
      // Fallback: Copy URL to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  return (
    <header
      className="sticky top-0 bg-white z-20 flex items-center justify-between px-4"
      style={{
        height: 'var(--ig-header-height)',
        borderBottom: '1px solid var(--ig-border)',
      }}
    >
      {/* Username with badge */}
      <div className="flex items-center">
        <span
          className="font-semibold text-base"
          style={{ color: 'var(--ig-text-primary)' }}
        >
          {PROFILE_DATA.username}
        </span>
        <span className="ig-badge-verified">10+</span>
        <Image
          src="/Name=Arrow Down, State=default, Dark=no.svg"
          alt="Dropdown"
          width={12}
          height={12}
          className="ml-1"
        />
      </div>

      {/* Action icons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onAddClick}
          className="p-1"
          aria-label="Add new post"
        >
          <Image
            src="/Name=Add, State=default, Dark=no.svg"
            alt="Add"
            width={24}
            height={24}
          />
        </button>
        <button
          onClick={handleShare}
          className="p-1"
          aria-label="Share"
        >
          {/* TODO: 적절한 공유 아이콘으로 교체 필요 */}
          <Image
            src="/Name=Messenger, State=default, Dark=no.svg"
            alt="Share"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
};
