'use client';

import Image from 'next/image';

interface ProfileActionsProps {
  onRSVPClick: () => void;
  onBankClick: () => void;
}

export const ProfileActions = ({ onRSVPClick, onBankClick }: ProfileActionsProps) => {
  return (
    <div className="px-4 mt-4 flex gap-2">
      <button
        onClick={onRSVPClick}
        className="ig-button-secondary flex-1 flex items-center justify-center gap-1"
      >
        <span>참석의사 전달하기</span>
        <Image
          src="/Name=Arrow Down, State=default, Dark=no.svg"
          alt=""
          width={12}
          height={12}
        />
      </button>
      <button
        onClick={onBankClick}
        className="ig-button-secondary flex-1"
      >
        마음 전하실 곳
      </button>
    </div>
  );
};
