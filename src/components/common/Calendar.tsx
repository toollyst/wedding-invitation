import Image from 'next/image';

interface CalendarProps {
  date: Date;
  className?: string;
}

export const Calendar = ({ date, className = '' }: CalendarProps) => {
  // Date 객체에서 년, 월, 일 추출
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()는 0-11이므로 +1
  const highlightDay = date.getDate();

  // 해당 월의 첫날과 마지막 날 계산
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0 = 일요일
  const daysInMonth = new Date(year, month, 0).getDate();

  // 요일 배열
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  // 달력 날짜 배열 생성
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null); // 빈 칸
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ${className}`}
      style={{
        backgroundColor: 'var(--bg-base)',
        boxShadow: '0 4px 12px var(--shadow-color)',
      }}
    >
      {/* 월 표시 */}
      <div
        className="text-2xl font-medium mb-4 text-center"
        style={{ color: 'var(--text-main)' }}
      >
        {month}월
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day, index) => (
          <div
            key={day}
            className="text-center text-sm font-medium w-10 h-10 flex items-center justify-center"
            style={{
              color:
                index === 0
                  ? 'var(--color-red)'
                  : index === 6
                    ? 'var(--color-primary)'
                    : 'var(--text-main)',
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, index) => {
          const dayOfWeek = index % 7;
          const isHighlighted = day === highlightDay;

          return (
            <div
              key={index}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              {day && (
                <>
                  {isHighlighted ? (
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <Image
                        src="/heart_pink.svg"
                        alt="wedding day"
                        width={40}
                        height={40}
                        className="absolute"
                      />
                      <span
                        className="relative z-10 text-sm font-semibold"
                        style={{ color: 'var(--text-white)' }}
                      >
                        {day}
                      </span>
                    </div>
                  ) : (
                    <div
                      className="text-sm"
                      style={{
                        color:
                          dayOfWeek === 0
                            ? 'var(--color-red)'
                            : dayOfWeek === 6
                              ? 'var(--color-primary)'
                              : 'var(--text-main)',
                      }}
                    >
                      {day}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
