'use client';

import { useState } from 'react';
import { BottomSheet } from './BottomSheet';

interface RSVPSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPSheet = ({ isOpen, onClose }: RSVPSheetProps) => {
  const [attendance, setAttendance] = useState<'attend' | 'not-attend' | null>(null);
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!attendance || !name.trim()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: 실제 API 연동 시 /api/rsvp 엔드포인트 사용
      // Mock submission - 2초 후 성공
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        // Reset form
        setAttendance(null);
        setName('');
        setGuestCount(1);
        setSubmitStatus('idle');
      }, 1500);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="참석 의사를 알려주세요">
      <div className="space-y-6">
        {/* Attendance Toggle */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setAttendance('attend')}
            className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-colors ${
              attendance === 'attend'
                ? 'bg-[var(--ig-blue)] text-white'
                : 'bg-[#efefef] text-[var(--ig-text-primary)]'
            }`}
          >
            참석
          </button>
          <button
            type="button"
            onClick={() => setAttendance('not-attend')}
            className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-colors ${
              attendance === 'not-attend'
                ? 'bg-[var(--ig-blue)] text-white'
                : 'bg-[#efefef] text-[var(--ig-text-primary)]'
            }`}
          >
            불참석
          </button>
        </div>

        {/* Name Input */}
        <div>
          <label
            htmlFor="rsvp-name"
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            이름
          </label>
          <input
            id="rsvp-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
            className="w-full px-4 py-3 rounded-lg border text-sm"
            style={{
              borderColor: 'var(--ig-border)',
              color: 'var(--ig-text-primary)',
            }}
          />
        </div>

        {/* Guest Count (only shown when attending) */}
        {attendance === 'attend' && (
          <div>
            <label
              htmlFor="rsvp-count"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--ig-text-primary)' }}
            >
              본인 포함
            </label>
            <div className="flex items-center gap-2">
              <input
                id="rsvp-count"
                type="number"
                min={1}
                max={10}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-20 px-4 py-3 rounded-lg border text-sm text-center"
                style={{
                  borderColor: 'var(--ig-border)',
                  color: 'var(--ig-text-primary)',
                }}
              />
              <span
                className="text-sm"
                style={{ color: 'var(--ig-text-secondary)' }}
              >
                명
              </span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || !attendance || !name.trim()}
          className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
            submitStatus === 'success'
              ? 'bg-green-500 text-white'
              : submitStatus === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-[var(--ig-blue)] text-white disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
        >
          {isSubmitting
            ? '전송 중...'
            : submitStatus === 'success'
            ? '전송 완료!'
            : submitStatus === 'error'
            ? '다시 시도해주세요'
            : '전송하기'}
        </button>
      </div>
    </BottomSheet>
  );
};
