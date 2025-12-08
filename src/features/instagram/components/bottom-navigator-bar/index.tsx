'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ProfileAvatar } from './profile-avatar';
import { usePathname } from 'next/navigation';

export function BottomNavigatorBar() {
  const pathname = usePathname();

  const isActive = (item: (typeof NAV_ITEMS)[number]): boolean => {
    if (item.id === 'profile') {
      return pathname === '/i';
    }
    return pathname.startsWith(item.path);
  };

  return (
    <div className="flex h-12 min-h-12 w-full items-center justify-between px-2">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.id} className="p-2" href={item.path}>
            {item.path === '/i' ? (
              <ProfileAvatar className="size-6" selected={isActive(item)} />
            ) : (
              <Image
                src={item.defaultIcon}
                alt={'navigator-image'}
                width={24}
                height={24}
                className="h-full w-full object-cover"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

const NAV_ITEMS = [
  {
    id: 'home',
    path: '/i/feed',
    defaultIcon: '/Name=Home, State=default, Dark=no.svg',
    selectedIcon: '/Name=Home, State=selected, Dark=no.svg',
    label: 'Home',
  },
  {
    id: 'search',
    path: '/i/guestbook',
    defaultIcon: '/Name=Search, State=default, Dark=no.svg',
    selectedIcon: '/Name=Search, State=selected, Dark=no.svg',
    label: 'Search',
  },
  {
    id: 'add',
    path: '/i/guestbook/write',
    defaultIcon: '/Name=Add, State=default, Dark=no.svg',
    selectedIcon: '/Name=Add, State=default, Dark=no.svg', // Add doesn't have selected state
    label: 'Add',
  },
  {
    id: 'reels',
    path: '/i/video',
    defaultIcon: '/Name=Reels, State=default, Dark=no.svg',
    selectedIcon: '/Name=Reels, State=selected, Dark=no.svg',
    label: 'Reels',
  },
  {
    id: 'profile',
    path: '/i',
    defaultIcon: '/images/wedding10.jpg', // Will use avatar image
    selectedIcon: '/images/wedding10.jpg',
    label: 'Profile',
    isProfile: true,
  },
] as const;
