'use client';

import { MenuIcon, SquarePlusIcon } from 'lucide-react';
import { PROFILE_DATA } from '../constants/profileData';
import { Button } from '@/components/ui/button';

export function InstagramHeader() {
  const handleShareClick = () => {
    //
  };

  const handleMenuClick = () => {
    //
  };

  return (
    <header className="flex h-12 min-h-12 w-full px-4">
      <div className="flex w-full items-center gap-x-2">
        <span className="font-semibold">{PROFILE_DATA.username}</span>
        <Button
          className="ml-auto"
          size={'icon-sm'}
          variant={'ghost'}
          onClick={handleShareClick}
        >
          <SquarePlusIcon className="size-6" />
        </Button>
        <Button size={'icon-sm'} variant={'ghost'} onClick={handleMenuClick}>
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </header>
  );
}
