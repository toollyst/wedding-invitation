'use client';

import { useState } from 'react';
import ScrollFadeIn from '@/components/ScrollFadeIn';

const title = '참석 여부 전달';
const message = `
저희 예식은 테이블별 지정석으로 진행됩니다.
식사 준비를 위해 참석 여부 입력을 부탁드립니다.
부득이 불참하셔도 따뜻한 마음만으로 깊이 감사드립니다.
`;

const RSVP = () => {
  const [side, setSide] = useState('');
  const [attendance, setAttendance] = useState('');
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ side, attendance, name, guestCount }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message });
        // 폼 초기화
        setSide('');
        setAttendance('');
        setName('');
        setGuestCount(1);
      } else {
        setSubmitMessage({ type: 'error', text: data.error });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: '제출 중 오류가 발생했습니다.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center mx-8 my-10 wedding-card">
      <ScrollFadeIn>
        <h3>{title}</h3>
      </ScrollFadeIn>
      <div className="whitespace-pre-line break-keep text-sm mb-6">
        {message}
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        {/* 신랑측/신부측 선택 */}
        <div className="text-left">
          <label className="block text-sm font-medium mb-2">측별 선택</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="side"
                value="groom"
                checked={side === 'groom'}
                onChange={(e) => setSide(e.target.value)}
                className="mr-2"
              />
              신랑측
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="side"
                value="bride"
                checked={side === 'bride'}
                onChange={(e) => setSide(e.target.value)}
                className="mr-2"
              />
              신부측
            </label>
          </div>
        </div>

        {/* 참석/불참/미정 선택 */}
        <div className="text-left">
          <label className="block text-sm font-medium mb-2">참석 여부</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="attendance"
                value="attend"
                checked={attendance === 'attend'}
                onChange={(e) => setAttendance(e.target.value)}
                className="mr-2"
              />
              참석
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="attendance"
                value="not-attend"
                checked={attendance === 'not-attend'}
                onChange={(e) => setAttendance(e.target.value)}
                className="mr-2"
              />
              불참
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="attendance"
                value="maybe"
                checked={attendance === 'maybe'}
                onChange={(e) => setAttendance(e.target.value)}
                className="mr-2"
              />
              미정
            </label>
          </div>
        </div>

        {/* 성함 입력 */}
        <div className="text-left">
          <label className="block text-sm font-medium mb-2">성함</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
            className="wedding-input"
            required
          />
        </div>

        {/* 본인 포함 인원수 (참석 선택 시에만 표시) */}
        {attendance === 'attend' && (
          <div className="text-left">
            <label className="block text-sm font-medium mb-2">본인 포함</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="10"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                className="wedding-input w-20"
              />
              <span>명</span>
            </div>
          </div>
        )}

        {/* 제출 메시지 */}
        {submitMessage && (
          <div
            className="p-3 rounded-md text-sm"
            style={{
              backgroundColor:
                submitMessage.type === 'success'
                  ? 'var(--color-green)'
                  : 'var(--color-red)',
              color: 'var(--text-white)',
            }}
          >
            {submitMessage.text}
          </div>
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="wedding-button"
          disabled={isSubmitting}
          style={{
            opacity: isSubmitting ? 0.6 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? '제출 중...' : '참석 여부 전달하기'}
        </button>
      </form>
    </div>
  );
};

export default RSVP;
