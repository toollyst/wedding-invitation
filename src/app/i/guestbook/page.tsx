'use client';

import Link from 'next/link';
import { GuestbookList } from '@/features/instagram/components/guestbook';

export default function GuestbookPage() {
  return (
    <div>
      {/* Header */}
      <header
        className="sticky top-0 bg-white z-20 flex items-center justify-center px-4"
        style={{
          height: 'var(--ig-header-height)',
          borderBottom: '1px solid var(--ig-border)',
        }}
      >
        <span
          className="font-semibold text-base"
          style={{ color: 'var(--ig-text-primary)' }}
        >
          축하 메시지 💐
        </span>
      </header>

      {/* Guestbook List */}
      <GuestbookList />

      {/* Floating Write Button */}
      <Link
        href="/i/guestbook/write"
        className="fixed bottom-20 right-4 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: 'var(--ig-blue)',
          maxWidth: 'calc((100vw - 430px) / 2 + 430px - 16px)',
        }}
        aria-label="메시지 작성하기"
      >
        <span className="text-white text-2xl">+</span>
      </Link>
    </div>
  );
}
