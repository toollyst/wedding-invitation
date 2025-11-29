'use client';

import { MOCK_GUESTBOOK_ENTRIES } from '../../constants/profileData';
import type { GuestbookEntry } from '../../types/instagram';

// Helper function to format relative time
const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return `${diffMins}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else {
    return `${diffDays}일 전`;
  }
};

interface GuestbookItemProps {
  entry: GuestbookEntry;
}

const GuestbookItem = ({ entry }: GuestbookItemProps) => {
  // Generate avatar with initials
  const initial = entry.name.charAt(0);

  return (
    <div
      className="flex gap-3 px-4 py-3 border-b"
      style={{ borderColor: 'var(--ig-border)' }}
    >
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <span className="text-white font-semibold text-sm">{initial}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span
            className="font-semibold text-sm"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {entry.name}
          </span>
          <span
            className="text-xs"
            style={{ color: 'var(--ig-text-secondary)' }}
          >
            {formatRelativeTime(entry.createdAt)}
          </span>
        </div>
        <p
          className="text-sm mt-1 text-left"
          style={{ color: 'var(--ig-text-primary)' }}
        >
          {entry.message}
        </p>
      </div>
    </div>
  );
};

export const GuestbookList = () => {
  // TODO: 실제 API에서 데이터 fetch하도록 변경
  const entries = MOCK_GUESTBOOK_ENTRIES;

  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p
          className="text-sm"
          style={{ color: 'var(--ig-text-secondary)' }}
        >
          아직 작성된 축하 메시지가 없습니다.
        </p>
        <p
          className="text-sm mt-1"
          style={{ color: 'var(--ig-text-secondary)' }}
        >
          첫 번째 메시지를 남겨주세요!
        </p>
      </div>
    );
  }

  return (
    <div>
      {entries.map((entry) => (
        <GuestbookItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
};
