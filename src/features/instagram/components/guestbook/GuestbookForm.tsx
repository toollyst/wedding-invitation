'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const GuestbookForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('이름과 메시지를 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: 실제 API 연동 시 /api/guestbook 엔드포인트 사용
      // Mock submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to guestbook list
      router.push('/i/guestbook');
    } catch {
      alert('메시지 등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="guestbook-name"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--ig-text-primary)' }}
        >
          이름
        </label>
        <input
          id="guestbook-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
          maxLength={20}
          className="w-full px-4 py-3 rounded-lg border text-sm"
          style={{
            borderColor: 'var(--ig-border)',
            color: 'var(--ig-text-primary)',
            background: 'var(--ig-bg-secondary)',
          }}
        />
        <p
          className="text-xs mt-1 text-right"
          style={{ color: 'var(--ig-text-secondary)' }}
        >
          {name.length}/20
        </p>
      </div>

      {/* Message Input */}
      <div>
        <label
          htmlFor="guestbook-message"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--ig-text-primary)' }}
        >
          메시지
        </label>
        <textarea
          id="guestbook-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="축하 메시지를 남겨주세요"
          maxLength={500}
          rows={6}
          className="w-full px-4 py-3 rounded-lg border text-sm resize-none"
          style={{
            borderColor: 'var(--ig-border)',
            color: 'var(--ig-text-primary)',
            background: 'var(--ig-bg-secondary)',
          }}
        />
        <p
          className="text-xs mt-1 text-right"
          style={{ color: 'var(--ig-text-secondary)' }}
        >
          {message.length}/500
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !name.trim() || !message.trim()}
        className="w-full py-3 rounded-lg font-semibold text-sm transition-colors bg-[var(--ig-blue)] text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '등록 중...' : '등록하기'}
      </button>
    </form>
  );
};

// Header component for the write page
export const GuestbookWriteHeader = () => {
  const router = useRouter();

  return (
    <header
      className="sticky top-0 bg-white z-20 flex items-center justify-between px-4"
      style={{
        height: 'var(--ig-header-height)',
        borderBottom: '1px solid var(--ig-border)',
      }}
    >
      <button
        onClick={() => router.back()}
        className="p-1"
        aria-label="Back"
      >
        <Image
          src="/Name=Arrow Left, State=default, Dark=no.svg"
          alt="Back"
          width={24}
          height={24}
        />
      </button>
      <span
        className="font-semibold text-base"
        style={{ color: 'var(--ig-text-primary)' }}
      >
        축하 메시지 남기기
      </span>
      <div className="w-6" /> {/* Spacer for centering */}
    </header>
  );
};
