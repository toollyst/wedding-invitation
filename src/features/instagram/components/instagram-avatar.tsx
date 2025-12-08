'use client';

import { useEffect, useRef } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

type InstagramAvatarProps = {
  size: number; // Avatar 실제 사이즈
  padding?: number; // Avatar ↔ Ring 사이 간격
  ringWidth?: number; // Ring stroke width
  ring?: boolean; // Ring on/off
  src: string;
  onClick?: () => void;
};

export function InstagramAvatar({
  size,
  padding = 2,
  ringWidth = 2,
  ring = true,
  src,
  onClick,
}: InstagramAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 총 크기 = 아바타 + 패딩*2 + 링두께*2
  const outerSize = size + (padding + ringWidth) * 2;

  useEffect(() => {
    if (!ring || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const scale = window.devicePixelRatio || 1;

    canvas.width = outerSize * scale;
    canvas.height = outerSize * scale;
    canvas.style.width = `${outerSize}px`;
    canvas.style.height = `${outerSize}px`;
    ctx.scale(scale, scale);

    ctx.clearRect(0, 0, outerSize, outerSize);

    const center = outerSize / 2;
    const radius = center - ringWidth / 2;

    const gradient = ctx.createLinearGradient(0, 0, outerSize, outerSize);
    gradient.addColorStop(0, '#FEDA75');
    gradient.addColorStop(0.25, '#FA7E1E');
    gradient.addColorStop(0.5, '#D62976');
    gradient.addColorStop(0.75, '#962FBF');
    gradient.addColorStop(1, '#4F5BD5');

    ctx.beginPath();
    ctx.lineWidth = ringWidth;
    ctx.strokeStyle = gradient;
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();
  }, [size, padding, ring, ringWidth, outerSize]);

  return (
    <div
      style={{
        position: 'relative',
        width: outerSize,
        height: outerSize,
      }}
      onClick={onClick}
    >
      {ring && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      )}

      <Avatar
        style={{
          position: 'absolute',
          inset: padding + ringWidth, // Avatar offset = padding + ringWidth
          width: size,
          height: size,
        }}
        className="overflow-hidden rounded-full"
      >
        <AvatarImage src={src} className="h-full w-full object-cover" />
      </Avatar>
    </div>
  );
}
