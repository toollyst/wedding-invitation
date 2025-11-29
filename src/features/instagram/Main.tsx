'use client';

import { useState } from 'react';
import { Header } from './components/layout';
import {
  ProfileImage,
  ProfileStats,
  ProfileBio,
  ProfileFollowers,
  ProfileActions,
  StoryHighlights,
  ProfileTabs,
} from './components/profile';
import { ImageGrid } from './components/gallery';
import { LocationTab } from './components/location';
import { StoryViewer } from './components/story';
import { RSVPSheet, BankAccountSheet } from './components/bottomsheet';
import { PROFILE_DATA } from './constants/profileData';
import type { ProfileTabType, StoryHighlight } from './types/instagram';

export const InstagramMain = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabType>('grid');
  const [activeSheet, setActiveSheet] = useState<'rsvp' | 'bank' | null>(null);
  const [activeStory, setActiveStory] = useState<StoryHighlight | null>(null);

  const handleVenueClick = () => {
    setActiveTab('location');
  };

  return (
    <>
      <Header
        onAddClick={() => {
          window.location.href = '/i/guestbook/write';
        }}
      />

      {/* Profile Section */}
      <div className="py-4">
        {/* Profile Image and Stats Row */}
        <div className="flex items-center px-4 gap-6">
          <ProfileImage
            src="/images/wedding10.jpg"
            onClick={() => {
              // Could open first story highlight
            }}
          />
          <ProfileStats stats={PROFILE_DATA.stats} />
        </div>

        {/* Bio */}
        <ProfileBio onVenueClick={handleVenueClick} />

        {/* Followers */}
        <ProfileFollowers />

        {/* Action Buttons */}
        <ProfileActions
          onRSVPClick={() => setActiveSheet('rsvp')}
          onBankClick={() => setActiveSheet('bank')}
        />

        {/* Story Highlights */}
        <StoryHighlights onHighlightClick={setActiveStory} />
      </div>

      {/* Profile Tabs */}
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div>
        {activeTab === 'grid' && <ImageGrid />}
        {activeTab === 'location' && <LocationTab />}
      </div>

      {/* Bottom Sheets */}
      <RSVPSheet
        isOpen={activeSheet === 'rsvp'}
        onClose={() => setActiveSheet(null)}
      />
      <BankAccountSheet
        isOpen={activeSheet === 'bank'}
        onClose={() => setActiveSheet(null)}
      />

      {/* Story Viewer */}
      {activeStory && (
        <StoryViewer
          highlight={activeStory}
          onClose={() => setActiveStory(null)}
        />
      )}
    </>
  );
};
