// Instagram feature type definitions

export interface StoryHighlight {
  id: string;
  label: string;
  coverImage: string;
  content?: StoryContent[];
}

export interface StoryContent {
  type: 'image' | 'text';
  image?: string;
  title?: string;
  description?: string;
}

export interface ProfileStats {
  posts: number;
  followers: number;
  following: number;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
  avatar?: string;
}

export interface RSVPFormData {
  attendance: 'attend' | 'not-attend' | null;
  name: string;
  guestCount: number;
}

export type BottomSheetType = 'rsvp' | 'bank' | null;

export type ProfileTabType = 'grid' | 'location';

export type NavTabType = 'home' | 'search' | 'add' | 'reels' | 'profile';
