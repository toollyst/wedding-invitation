import type { StoryHighlight, ProfileStats, GuestbookEntry } from '../types/instagram';

export const PROFILE_DATA = {
  username: 'SangWon.Yehyun',
  displayName: '심상원 & 김예현',
  bio: `We are getting married!
2026/09/05 (SAT) AM 11:30`,
  stats: {
    posts: 20,
    followers: 2026, // Easter egg: Wedding year
    following: 905, // Easter egg: Wedding date (9/05)
  } as ProfileStats,
};

export const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    id: 'bride',
    label: '신부소개',
    coverImage: '/images/wedding1.jpg',
    content: [
      {
        type: 'text',
        image: '/images/wedding1.jpg',
        title: '신부 김예현',
        description: '항상 웃음 가득한 사람\n당신과 함께라면 어디든 행복해요',
      },
    ],
  },
  {
    id: 'groom',
    label: '신랑소개',
    coverImage: '/images/wedding2.jpg',
    content: [
      {
        type: 'text',
        image: '/images/wedding2.jpg',
        title: '신랑 심상원',
        description: '당신을 만나 세상이 더 아름다워졌습니다\n평생 곁에서 함께하겠습니다',
      },
    ],
  },
  {
    id: 'family',
    label: '신부가족소개',
    coverImage: '/images/wedding3.jpg',
    content: [
      {
        type: 'text',
        image: '/images/wedding3.jpg',
        title: '양가 부모님',
        description: '두 사람의 사랑을 축복해주시는\n소중한 양가 부모님',
      },
    ],
  },
];

export const GALLERY_IMAGES = [
  '/images/wedding1.jpg',
  '/images/wedding2.jpg',
  '/images/wedding3.jpg',
  '/images/wedding4.jpg',
  '/images/wedding5.jpg',
  '/images/wedding6.jpg',
  '/images/wedding7.jpg',
  '/images/wedding8.jpg',
  '/images/wedding9.jpg',
  '/images/wedding10.jpg',
  '/images/wedding11.jpg',
  '/images/wedding12.jpg',
  '/images/wedding13.jpg',
];

// Mock guestbook data for UI development
export const MOCK_GUESTBOOK_ENTRIES: GuestbookEntry[] = [
  {
    id: '1',
    name: '홍길동',
    message: '결혼 축하해요! 행복하게 살아요 ❤️',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: '2',
    name: '김철수',
    message: '축하축하!! 🎉 두 분의 앞날에 행복만 가득하길 바랍니다.',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: '3',
    name: '이영희',
    message: '드디어 결혼하는구나! 정말 축하해 💕 행복하게 잘 살아~',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
];
