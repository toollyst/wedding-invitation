'use client';

import Image from 'next/image';
import type { ProfileTabType } from '../../types/instagram';

interface ProfileTabsProps {
  activeTab: ProfileTabType;
  onTabChange: (tab: ProfileTabType) => void;
}

export const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  const tabs: { id: ProfileTabType; icon: string; label: string }[] = [
    {
      id: 'grid',
      icon: '/Name=Grid, State=default, Dark=no.svg',
      label: 'Posts',
    },
    {
      id: 'location',
      // TODO: Location 아이콘 없음 - Shop 아이콘으로 임시 대체
      icon: '/Name=Shop, State=default, Dark=no.svg',
      label: 'Location',
    },
  ];

  return (
    <div
      className="flex border-t mt-4"
      style={{ borderColor: 'var(--ig-border)' }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="flex-1 flex items-center justify-center py-3 relative"
          aria-label={tab.label}
          aria-pressed={activeTab === tab.id}
        >
          <Image
            src={tab.icon}
            alt={tab.label}
            width={24}
            height={24}
            style={{
              opacity: activeTab === tab.id ? 1 : 0.5,
            }}
          />
          {/* Active indicator */}
          {activeTab === tab.id && (
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{ background: 'var(--ig-text-primary)' }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
