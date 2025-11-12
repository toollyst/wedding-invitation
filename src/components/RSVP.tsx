'use client';

import { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ side, attendance, name, guestCount });
    // 여기에 폼 제출 로직 추가
  };

  return (
    <div className="flex flex-col items-center text-center mx-8 my-10 p-6 border-2 rounded-md" style={{ borderColor: 'var(--color-line)' }}>
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            style={{ borderColor: 'var(--color-line)', '--tw-ring-color': 'var(--color-secondary)' } as any}
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
                className="w-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                style={{ borderColor: 'var(--color-line)', '--tw-ring-color': 'var(--color-secondary)' } as any}
              />
              <span>명</span>
            </div>
          </div>
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md transition-colors font-medium"
          style={{
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--text-main)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
        >
          참석 여부 전달하기
        </button>
      </form>
    </div>
  );
};

export default RSVP;
