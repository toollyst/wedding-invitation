'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavTabType } from '../../types/instagram';

interface NavItem {
  id: NavTabType;
  path: string;
  defaultIcon: string;
  selectedIcon: string;
  label: string;
  isProfile?: boolean;
}

const NAV_ITEMS: NavItem[] = [
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
    defaultIcon: '', // Will use avatar image
    selectedIcon: '',
    label: 'Profile',
    isProfile: true,
  },
];

export const BottomNavigation = () => {
  const pathname = usePathname();

  const isActive = (item: NavItem): boolean => {
    if (item.id === 'profile') {
      return pathname === '/i';
    }
    return pathname.startsWith(item.path);
  };

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white z-30"
      style={{
        maxWidth: 'var(--ig-max-width)',
        height: 'var(--ig-nav-height)',
        paddingBottom: 'var(--ig-safe-area-bottom)',
        borderTop: '1px solid var(--ig-border)',
      }}
    >
      <div className="flex items-center justify-around h-full">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item);

          if (item.isProfile) {
            return (
              <Link
                key={item.id}
                href={item.path}
                className="flex items-center justify-center p-2"
                aria-label={item.label}
              >
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    width: 24,
                    height: 24,
                    border: active ? '2px solid var(--ig-text-primary)' : '1px solid var(--ig-border)',
                  }}
                >
                  <Image
                    src="/images/wedding10.jpg"
                    alt="Profile"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.path}
              className="flex items-center justify-center p-2"
              aria-label={item.label}
            >
              <Image
                src={active ? item.selectedIcon : item.defaultIcon}
                alt={item.label}
                width={24}
                height={24}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
