'use client';

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { CONFETTI_COLORS } from '@/constants/colors';

/**
 * ConfettiBackground
 * 모바일 및 반응형 청첩장 배경용 지속적인 꽃가루 애니메이션
 *
 * 특징:
 * - 반응형 width/height
 * - 낮은 density로 배경 자연스러운 효과
 * - 모바일에서 FPS 부담 완화
 * - 터치나 스크롤과 독립된 absolute layer
 * - 15초 후 페이드아웃 및 중지
 */
const ConfettiBackground: React.FC = () => {
  const { width, height } = useWindowSize();
  const [isClientSide, setIsClientSide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClientSide(true);
    }
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // 15초 후 페이드아웃 효과
  useEffect(() => {
    // 10초 후 페이드 시작
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 10000);

    // 15초 후 완전히 제거
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isClientSide || !isVisible) {
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
        opacity: opacity,
        transition: 'opacity 5s ease-out',
      }}
    >
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={isMobile ? 20 : 40}
        gravity={0.06}
        wind={0.035}
        opacity={0.75}
        initialVelocityY={1.5}
        tweenDuration={14000}
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
        colors={CONFETTI_COLORS}
      />
    </div>
  );
};

export default ConfettiBackground;
