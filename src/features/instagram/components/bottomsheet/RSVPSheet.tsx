'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BottomSheet } from './BottomSheet';
import { useToast } from '../../contexts/ToastContext';

interface RSVPSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RSVPFormData {
  side: 'groom' | 'bride' | '';
  attendance: 'attend' | 'not-attend' | '';
  name: string;
  guestCount: number;
}

export const RSVPSheet = ({ isOpen, onClose }: RSVPSheetProps) => {
  const { showToast } = useToast();
  const [isSideDropdownOpen, setIsSideDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] = useState(false);
  const sideDropdownRef = useRef<HTMLDivElement>(null);
  const attendanceDropdownRef = useRef<HTMLDivElement>(null);

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    defaultValues: {
      side: '',
      attendance: '',
      name: '',
      guestCount: 1,
    },
  });

  const attendance = watch('attendance');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideDropdownRef.current &&
        !sideDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSideDropdownOpen(false);
      }
      if (
        attendanceDropdownRef.current &&
        !attendanceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAttendanceDropdownOpen(false);
      }
    };

    if (isSideDropdownOpen || isAttendanceDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSideDropdownOpen, isAttendanceDropdownOpen]);

  // Reset form when sheet closes
  useEffect(() => {
    if (!isOpen) {
      setIsSideDropdownOpen(false);
      setIsAttendanceDropdownOpen(false);
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: RSVPFormData) => {
    try {
      // TODO: 실제 API 연동 시 /api/rsvp 엔드포인트 사용
      // Mock submission - 1초 후 성공
      console.log('RSVP Data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showToast('전송되었습니다', 'success');
      onClose();
    } catch {
      showToast('전송에 실패했습니다. 잠시 후 다시 시도해주세요.', 'error');
    }
  };

  const getSideLabel = (value: string) => {
    if (value === 'groom') return '신랑측';
    if (value === 'bride') return '신부측';
    return '신랑측/신부측을 선택해주세요';
  };

  const getAttendanceLabel = (value: string) => {
    if (value === 'attend') return '참석';
    if (value === 'not-attend') return '불참석';
    return '참석여부를 선택해주세요';
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title="참석 의사를 알려주세요"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Side Dropdown */}
        <Controller
          name="side"
          control={control}
          rules={{ required: '신랑측/신부측을 선택해주세요' }}
          render={({ field }) => (
            <div ref={sideDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsSideDropdownOpen(!isSideDropdownOpen)}
                className="w-full rounded-lg flex justify-between items-center text-sm"
                style={{
                  padding: '16px',
                  border: '1px solid rgb(219, 219, 219)',
                  backgroundColor: 'white',
                  color: field.value
                    ? 'var(--ig-text-primary)'
                    : 'var(--ig-text-secondary)',
                }}
              >
                <span>{getSideLabel(field.value || '')}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    transform: isSideDropdownOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown Options */}
              {isSideDropdownOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg overflow-hidden z-10"
                  style={{
                    border: '1px solid rgb(219, 219, 219)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange('groom');
                      setIsSideDropdownOpen(false);
                    }}
                    className="w-full flex justify-between items-center text-sm hover:bg-gray-50"
                    style={{
                      padding: '16px',
                      color: 'var(--ig-text-primary)',
                      borderBottom: '1px solid rgb(219, 219, 219)',
                    }}
                  >
                    <span>신랑측</span>
                    {field.value === 'groom' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12L11 15L16 9"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange('bride');
                      setIsSideDropdownOpen(false);
                    }}
                    className="w-full flex justify-between items-center text-sm hover:bg-gray-50"
                    style={{
                      padding: '16px',
                      color: 'var(--ig-text-primary)',
                    }}
                  >
                    <span>신부측</span>
                    {field.value === 'bride' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12L11 15L16 9"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              )}

              {/* Error Message */}
              {errors.side && (
                <p
                  className="text-sm mt-2"
                  style={{ color: 'var(--ig-red, #ed4956)' }}
                >
                  {errors.side.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Attendance Dropdown */}
        <Controller
          name="attendance"
          control={control}
          rules={{ required: '참석여부를 선택해주세요' }}
          render={({ field }) => (
            <div ref={attendanceDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsAttendanceDropdownOpen(!isAttendanceDropdownOpen)}
                className="w-full rounded-lg flex justify-between items-center text-sm"
                style={{
                  padding: '16px',
                  border: '1px solid rgb(219, 219, 219)',
                  backgroundColor: 'white',
                  color: field.value
                    ? 'var(--ig-text-primary)'
                    : 'var(--ig-text-secondary)',
                }}
              >
                <span>{getAttendanceLabel(field.value || '')}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    transform: isAttendanceDropdownOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown Options */}
              {isAttendanceDropdownOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg overflow-hidden z-10"
                  style={{
                    border: '1px solid rgb(219, 219, 219)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange('attend');
                      setIsAttendanceDropdownOpen(false);
                    }}
                    className="w-full flex justify-between items-center text-sm hover:bg-gray-50"
                    style={{
                      padding: '16px',
                      color: 'var(--ig-text-primary)',
                      borderBottom: '1px solid rgb(219, 219, 219)',
                    }}
                  >
                    <span>참석</span>
                    {field.value === 'attend' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12L11 15L16 9"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange('not-attend');
                      setIsAttendanceDropdownOpen(false);
                    }}
                    className="w-full flex justify-between items-center text-sm hover:bg-gray-50"
                    style={{
                      padding: '16px',
                      color: 'var(--ig-text-primary)',
                    }}
                  >
                    <span>불참석</span>
                    {field.value === 'not-attend' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12L11 15L16 9"
                          stroke="var(--ig-text-primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              )}

              {/* Error Message */}
              {errors.attendance && (
                <p
                  className="text-sm mt-2"
                  style={{ color: 'var(--ig-red, #ed4956)' }}
                >
                  {errors.attendance.message}
                </p>
              )}
            </div>
          )}
        />

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
            placeholder="이름을 입력해주세요"
            className="w-full rounded-lg text-sm focus:outline-none"
            style={{
              padding: '16px',
              border: '1px solid rgb(219, 219, 219)',
              color: 'var(--ig-text-primary)',
            }}
            {...register('name', { required: '이름을 입력해주세요' })}
            onFocus={(e) => {
              e.target.style.border = '1px solid rgb(18, 16, 29)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgb(219, 219, 219)';
            }}
          />
          {errors.name && (
            <p
              className="text-sm mt-2"
              style={{ color: 'var(--ig-red, #ed4956)' }}
            >
              {errors.name.message}
            </p>
          )}
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
                className="w-20 rounded-lg text-sm text-center focus:outline-none"
                style={{
                  padding: '16px',
                  border: '1px solid rgb(219, 219, 219)',
                  color: 'var(--ig-text-primary)',
                }}
                {...register('guestCount', {
                  valueAsNumber: true,
                  min: { value: 1, message: '최소 1명 이상' },
                  max: { value: 10, message: '최대 10명까지' },
                })}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgb(18, 16, 29)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgb(219, 219, 219)';
                }}
              />
              <span
                className="text-sm"
                style={{ color: 'var(--ig-text-secondary)' }}
              >
                명
              </span>
            </div>
            {errors.guestCount && (
              <p
                className="text-sm mt-2"
                style={{ color: 'var(--ig-red, #ed4956)' }}
              >
                {errors.guestCount.message}
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-colors bg-[var(--ig-button-primary)] text-white disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>전송 중...</span>
            </>
          ) : (
            '전송하기'
          )}
        </button>
      </form>
    </BottomSheet>
  );
};
