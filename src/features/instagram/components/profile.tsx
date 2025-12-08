'use client';

import { cn } from '@/lib/utils';
import { PROFILE_DATA } from '../constants/profileData';
import { InstagramAvatar } from './instagram-avatar';
import { VENUE_INFO } from '@/constants/weddingInfo';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';

type ProfileProps = {
  className?: string;
};

export function Profile({ className }: ProfileProps) {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className={cn('flex gap-8', className)}>
        <InstagramAvatar
          size={80}
          padding={4}
          ringWidth={4}
          src={PROFILE_DATA.imageUrl}
        />
        <ProfileStats />
      </div>
      <ProfileBio />
      <ProfileFollowers />
      <ProfileActions />
    </div>
  );
}

const ProfileStats = () => {
  const statItems = [
    { value: PROFILE_DATA.stats.posts, label: '게시물' },
    { value: PROFILE_DATA.stats.followers, label: '팔로워' },
    { value: PROFILE_DATA.stats.following, label: '팔로잉' },
  ];

  return (
    <div className="flex flex-1 flex-col justify-center gap-0.5">
      <span>{PROFILE_DATA.displayName}</span>
      <div className={cn('flex w-full items-center')}>
        {statItems.map((item) => (
          <div
            key={item.label}
            className={cn('flex flex-1 flex-col items-start tabular-nums')}
          >
            <span className="font-semibold">{item.value}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

type ProfileBioProps = {
  className?: string;
};

const ProfileBio = ({ className }: ProfileBioProps) => {
  const handleVenueClick = () => {
    //
  };

  return (
    <div className={className}>
      <p className="text-left text-sm font-semibold">
        {PROFILE_DATA.displayName}
      </p>
      <p className="mt-1 text-left text-sm whitespace-pre-line">
        {PROFILE_DATA.bio}
      </p>
      <button
        className="mt-0.5 text-left text-sm font-medium"
        onClick={handleVenueClick}
      >
        {VENUE_INFO.venueName}
      </button>
    </div>
  );
};

const ProfileFollowers = () => {
  return (
    <div className="flex items-center">
      {/* Overlapping profile thumbnails */}
      <div className="flex -space-x-2">
        <div
          className="h-5 w-5 overflow-hidden rounded-full border border-white"
          style={{ zIndex: 2 }}
        >
          <Image
            src="/images/wedding1.jpg"
            alt="Follower"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
        <div
          className="h-5 w-5 overflow-hidden rounded-full border border-white"
          style={{ zIndex: 1 }}
        >
          <Image
            src="/images/wedding2.jpg"
            alt="Follower"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
      </div>

      {/* Follower text */}
      <p className="ml-2 text-xs" style={{ color: 'var(--ig-text-secondary)' }}>
        <span style={{ color: 'var(--ig-text-primary)' }}>rachel_yh.kim</span>
        님,{' '}
        <span style={{ color: 'var(--ig-text-primary)' }}>shim_sangwon</span>님
        외 <span style={{ color: 'var(--ig-text-primary)' }}>100명</span>이
        팔로우합니다
      </p>
    </div>
  );
};

const ProfileActions = () => {
  const handleRSVPClick = () => {
    //
  };

  const handleBankClick = () => {
    //
  };

  return (
    <div className="flex gap-2">
      <Button className="flex-1" variant={'secondary'}>
        <span className="font-semibold">참석의사 전달하기</span>
        <ChevronDownIcon />
      </Button>
      <Button
        className="flex-1"
        variant={'secondary'}
        onClick={handleBankClick}
      >
        <span className="font-semibold">마음 전하실 곳</span>
      </Button>
    </div>
  );
};
