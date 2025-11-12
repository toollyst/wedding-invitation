'use client';

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

/**
 * ConfettiBackground
 * 모바일 및 반응형 청첩장 배경용 지속적인 꽃가루 애니메이션
 *
 * 특징:
 * - 반응형 width/height
 * - 낮은 density로 배경 자연스러운 효과
 * - 모바일에서 FPS 부담 완화
 * - 터치나 스크롤과 독립된 absolute layer
 */
const ConfettiBackground: React.FC = () => {
  const { width, height } = useWindowSize();
  const [isClientSide, setIsClientSide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  console.log(width, height);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClientSide(true);
    }
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!isClientSide) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={isMobile ? 20 : 40} // 훨씬 적게 (잔잔한 느낌)
        gravity={0.06} // 낙하속도 ↓
        wind={0.035} // 살짝 바람 흔들림
        opacity={0.75} // 은은하게
        initialVelocityY={1.5}
        tweenDuration={14000} // 천천히 움직이도록
        friction={0.99}
        drawShape={(ctx) => {
          // 부드러운 꽃잎 형태
          const petalWidth = 6 + Math.random() * 4;
          const petalHeight = petalWidth * 0.7;
          ctx.beginPath();
          ctx.ellipse(
            0,
            0,
            petalWidth,
            petalHeight,
            Math.random() * Math.PI,
            0,
            2 * Math.PI,
          );
          ctx.closePath();
          ctx.fill();
        }}
        colors={[
          '#FFF8F6', // bg-color
          '#FFEDEA', // bg-color-emphasis
          '#E6A19C', // color-primary
          '#EACBC7', // color-secondary
          '#FFFFFF', // bg-base
        ]}
      />
    </div>
  );
};

export default ConfettiBackground;
