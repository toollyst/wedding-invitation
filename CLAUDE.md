# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15-based wedding invitation website built with React 19, TypeScript, and Tailwind CSS 4. The project features **two distinct experiences**:

1. **Basic Feature** (`/`) - Traditional scrollable wedding invitation with sections
2. **Instagram Feature** (`/i`) - Mobile-first Instagram-style interactive experience

## Development Commands

```bash
# Development server with Turbopack (fast refresh)
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

The dev server runs on http://localhost:3000 by default.

---

## Architecture

### Feature-Based Structure

The project uses a feature-based architecture with two main features:

```
src/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Basic feature entry point
│   ├── layout.tsx            # Root layout with fonts
│   ├── globals.css           # Global styles + CSS variables
│   ├── api/rsvp/route.ts     # RSVP API endpoint
│   └── i/                    # Instagram feature routes
│       ├── layout.tsx        # Instagram layout with BottomNavigation
│       ├── page.tsx          # Profile page
│       ├── feed/page.tsx     # Feed page
│       ├── video/page.tsx    # Video page
│       ├── guestbook/page.tsx        # Guestbook list
│       └── guestbook/write/page.tsx  # Guestbook write form
├── features/                 # Feature-based components
│   ├── basic/sections/       # Traditional wedding sections
│   └── instagram/            # Instagram-style components
├── components/               # Shared components
└── constants/                # Shared constants
```

### Routing

| Route                | Feature   | Description                               |
| -------------------- | --------- | ----------------------------------------- |
| `/`                  | Basic     | Traditional scrollable wedding invitation |
| `/api/rsvp`          | Basic     | RSVP submission endpoint                  |
| `/i`                 | Instagram | Profile page with grid/location tabs      |
| `/i/feed`            | Instagram | Feed with stories and posts               |
| `/i/guestbook`       | Instagram | Guestbook message list                    |
| `/i/guestbook/write` | Instagram | Write guestbook message                   |
| `/i/video`           | Instagram | Wedding video (placeholder)               |

---

## Basic Feature (`/`)

Traditional scrollable wedding invitation with 15 sections rendered in order:

1. **ConfettiBackground** - Falling petal animation (15s fadeout)
2. **Hero** - Full-screen opening with background image
3. **InvitationMessage** - Welcome message with couple and parent names
4. **Divider** - Section separator
5. **DateInfo** - Wedding date, venue, calendar widget, countdown
6. **Divider**
7. **Map** - Kakao map with transportation accordion (Car/Metro/Bus)
8. **Divider**
9. **RSVP** - Attendance form with API integration
10. **Divider**
11. **Gallery** - Photo gallery with LightGallery lightbox
12. **Divider**
13. **Contact** - Contact cards with phone/SMS links
14. **Divider**
15. **Bank** - Bank accounts with clipboard copy
16. **Footer** - Closing section

### Basic Feature Files

```
src/features/basic/sections/
├── Hero.tsx              # Server Component
├── InvitationMessage.tsx # Server Component
├── DateInfo.tsx          # Server Component
├── Map.tsx               # Client Component (accordion)
├── RSVP.tsx              # Client Component (API integration)
├── Gallery.tsx           # Client Component (LightGallery)
├── Contact.tsx           # Client Component (tel/sms links)
├── Bank.tsx              # Client Component (accordion + clipboard)
├── Footer.tsx            # Server Component
└── ConfettiBackground.tsx # Client Component (auto-fadeout)
```

---

## Instagram Feature (`/i`)

Mobile-first Instagram-style wedding invitation with bottom navigation.

### Instagram Components

```
src/features/instagram/
├── Main.tsx                  # Entry point, manages state
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Username, verified badge, share
│   │   └── BottomNavigation.tsx  # 5-tab navigation
│   ├── profile/
│   │   ├── ProfileImage.tsx      # Avatar with story ring
│   │   ├── ProfileStats.tsx      # Posts/followers/following
│   │   ├── ProfileBio.tsx        # Name, bio, venue link
│   │   ├── ProfileFollowers.tsx  # Followers info
│   │   ├── ProfileActions.tsx    # RSVP & bank account buttons
│   │   ├── StoryHighlights.tsx   # Story circles
│   │   └── ProfileTabs.tsx       # Grid/Location tabs
│   ├── gallery/
│   │   ├── ImageGrid.tsx         # 3-column photo grid
│   │   └── ImageModal.tsx        # Full-screen viewer with swipe
│   ├── bottomsheet/
│   │   ├── BottomSheet.tsx       # Draggable sheet with backdrop
│   │   ├── RSVPSheet.tsx         # RSVP form (react-hook-form)
│   │   └── BankAccountSheet.tsx  # Bank accounts with copy
│   ├── common/
│   │   └── Toast.tsx             # Toast notification component
│   ├── story/
│   │   └── StoryViewer.tsx       # Full-screen story with auto-advance
│   ├── feed/
│   │   └── FeedPost.tsx          # Instagram-style post
│   ├── guestbook/
│   │   ├── GuestbookList.tsx     # Message list with avatars
│   │   ├── GuestbookForm.tsx     # Write form with char limits
│   │   └── GuestbookWriteHeader.tsx  # Header with back button
│   ├── location/
│   │   └── LocationTab.tsx       # Map, address, transport info
│   └── video/
│       └── VideoPlayer.tsx       # Placeholder video player
├── contexts/
│   └── ToastContext.tsx          # Global toast state management
├── types/
│   └── instagram.ts              # TypeScript interfaces
└── constants/
    └── profileData.ts            # Profile data, highlights, images
```

### Instagram Types

```typescript
// src/features/instagram/types/instagram.ts
type ProfileTabType = 'grid' | 'location';
type NavTabType = 'home' | 'search' | 'add' | 'reels' | 'profile';
type BottomSheetType = 'rsvp' | 'bank' | null;

interface StoryHighlight {
  id: string;
  label: string;
  coverImage: string;
  content: StoryContent[];
}

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
  avatar?: string;
}
```

### Instagram Constants

```typescript
// src/features/instagram/constants/profileData.ts
PROFILE_DATA = {
  username: 'SangWon.Yehyun',
  displayName: '심상원 & 김예현',
  bio: 'We are getting married!\n2026/09/05 (SAT) AM 11:30',
  stats: { posts: 20, followers: 2026, following: 905 }
}

STORY_HIGHLIGHTS = [
  { id: 'bride', label: '신부소개', ... },
  { id: 'groom', label: '신랑소개', ... },
  { id: 'family', label: '신부가족소개', ... }
]

GALLERY_IMAGES = ['/images/wedding1.jpg', ..., '/images/wedding13.jpg']
```

### Key Instagram Interactions

**Bottom Sheet** ([BottomSheet.tsx](src/features/instagram/components/bottomsheet/BottomSheet.tsx)):

- Slide-up animation with cubic-bezier timing
- Drag-to-dismiss (mouse and touch support)
- Backdrop click to close
- 100px threshold to dismiss

**Story Viewer** ([StoryViewer.tsx](src/features/instagram/components/story/StoryViewer.tsx)):

- Auto-advance with 5s duration
- Progress bars for each story
- Pause on mouse/touch down
- Keyboard navigation (Arrow keys, Escape)
- Touch zones (left/middle/right)

**Image Modal** ([ImageModal.tsx](src/features/instagram/components/gallery/ImageModal.tsx)):

- Swipe navigation (>50px threshold)
- Keyboard navigation
- Pagination dots

**Toast System**:

- Global state via `ToastContext` + `useToast()` hook
- Auto-dismiss after 3 seconds
- Success (green) / Error (red) variants
- Fade-in/out animation

**RSVPSheet Form** ([RSVPSheet.tsx](src/features/instagram/components/bottomsheet/RSVPSheet.tsx)):

- Uses `react-hook-form` with `Controller` for dropdowns
- Fields: side (신랑측/신부측), attendance, name, guestCount
- Loading spinner on submit
- Toast notifications for success/error

---

## Shared Components

```
src/components/
├── Calendar.tsx      # Monthly calendar with wedding day highlight
├── Divider.tsx       # Section separator
└── ScrollFadeIn.tsx  # Scroll-triggered fade animation
```

---

## Shared Constants

### Wedding Info ([src/constants/weddingInfo.ts](src/constants/weddingInfo.ts))

```typescript
VENUE_INFO = {
  weddingDate: new Date(2026, 8, 5, 11, 30),  // Sept 5, 2026
  weddingDateString: '2026년 9월 5일 토요일 오전 11시 30분',
  venueName: '그랜드힐 컨벤션',
  venueNameDetail: '2F 사브리나홀',
  address: '서울 강남구 역삼로 607'
}

BRIDE_GROOM_INFO = {
  groom: { name: '심상원', phone: '010-3327-4025', bank: '토스' },
  bride: { name: '김예현', phone: '010-9284-4688', bank: '기업은행' },
  groomParents: { father: {...}, mother: {...} },
  brideParents: { father: {...}, mother: {...} }
}
```

### Colors ([src/constants/colors.ts](src/constants/colors.ts))

- `WEDDING_COLORS`: Theme color palette
- `CONFETTI_COLORS`: Petal animation colors

---

## Styling

### CSS Variables

**Basic Feature** (warm, traditional):

```css
--bg-color: #fff8f6;
--bg-color-emphasis: #ffedea;
--color-primary: #e6a19c;
--color-secondary: #eacbc7;
--text-main: #5b4b45;
--text-sub: #a4938e;
```

**Instagram Feature** (clean, modern):

```css
--ig-bg-primary: #ffffff;
--ig-bg-secondary: #fafafa;
--ig-border: #dbdbdb;
--ig-text-primary: #262626;
--ig-text-secondary: #8e8e8e;
--ig-blue: #0095f6;
--ig-button-primary: #4a5df9;
--ig-story-gradient: linear-gradient(
  45deg,
  #c913b9 0%,
  #f9373f 50%,
  #fecd00 100%
);
--ig-nav-height: 49px;
--ig-max-width: 430px;
```

### Global Element Styles

```css
button {
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
img {
  max-width: 100%;
  height: auto;
}
ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
::selection {
  background-color: var(--color-primary);
  color: white;
}
@media (prefers-reduced-motion: reduce) {
  /* Disables animations for accessibility */
}
```

### Custom Utility Classes

**Global**:

```css
.scrollbar-hide {
  /* Hides scrollbar while keeping scroll functionality */
}
```

**Basic Feature**:

```css
.wedding-button {
  /* Primary button */
}
.wedding-input {
  /* Form input */
}
.wedding-card {
  /* Card container */
}
```

**Instagram Feature**:

```css
.ig-container {
  /* 430px max-width container */
}
.ig-button-primary {
  /* Blue action button */
}
.ig-button-secondary {
  /* Gray secondary button */
}
.ig-story-ring {
  /* Gradient story border */
}
.ig-grid {
  /* 3-column photo grid */
}
.ig-badge-verified {
  /* Blue checkmark badge */
}
.ig-bottom-sheet {
  /* Draggable bottom sheet */
}
.ig-backdrop {
  /* Semi-transparent overlay */
}
```

### Typography

- **Gowun Dodum** (`--font-gowun-dodum`): Body text
- **Luxurious Script** (`--font-luxurious-script`): Decorative accents
- **Hurricane** (`--font-hurricane`): Large headers

---

## SVG Assets

Located in `/public/`:

**Instagram Navigation Icons** (Name=_, State=_, Dark=\*):

- Home, Search, Add, Reels (selected/default variants)
- Like, Comment, Share, Bookmark
- Arrow Left/Right/Down, More, Exit
- Messenger, Grid, Shop

**Basic Feature Icons**:

- `phone.svg`, `message.svg` - Contact
- `heart.svg`, `heart_pink.svg` - Footer, Calendar
- `car.svg`, `metro.svg`, `bus.svg` - Map transport
- `copy.svg`, `check.svg` - Clipboard copy/copied state

---

## Dependencies

### Production

- **next**: 15.5.3 - React framework with App Router
- **react**: 19.1.0 - UI library
- **react-dom**: 19.1.0 - React DOM renderer
- **lightgallery**: 2.9.0-beta.1 - Photo gallery (Basic feature)
- **react-confetti**: 6.4.0 - Petal animation (Basic feature)
- **react-use**: 17.6.0 - React hooks (window size detection)
- **react-hook-form**: Form state management (RSVPSheet)

### Development

- **typescript**: ^5 - Type safety
- **tailwindcss**: ^4 - Utility-first CSS
- **@tailwindcss/postcss**: ^4 - PostCSS plugin
- **eslint**: ^9 - Code linting
- **prettier**: 3.6.2 - Code formatting

---

## Development Notes

### TODOs in Code

| File                | TODO                                    |
| ------------------- | --------------------------------------- |
| `VideoPlayer.tsx`   | Replace placeholder with actual video   |
| `GuestbookForm.tsx` | Connect to `/api/guestbook` endpoint    |
| `RSVPSheet.tsx`     | Connect to `/api/rsvp` endpoint         |
| `Header.tsx`        | Add Kakao share functionality           |
| `ProfileTabs.tsx`   | Location icon missing (using Shop icon) |

### Easter Eggs

- Profile stats `followers: 2026`, `following: 905` match wedding date (2026/09/05)
- Story highlights introduce bride, groom, and family

### Client vs Server Components

**Client Components** (require 'use client'):

- All Instagram feature components (interactivity)
- Basic: Map, RSVP, Gallery, Contact, Bank, ConfettiBackground
- Shared: ScrollFadeIn

**Server Components** (default):

- Basic: Hero, InvitationMessage, DateInfo, Footer
- Shared: Calendar, Divider

---

## Deployment

Optimized for Vercel deployment:

- Turbopack for dev and production builds
- TypeScript strict mode
- Path alias: `@/*` → `./src/*`

### Environment Variables (Optional)

For Google Sheets RSVP integration:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY=...
GOOGLE_SHEET_ID=...
```

---

## Quick Reference

### Adding a New Instagram Component

1. Create component in `src/features/instagram/components/<category>/`
2. Add 'use client' if interactive
3. Use `--ig-*` CSS variables for styling
4. Export from index.ts if needed

### Modifying Wedding Data

1. Update `src/constants/weddingInfo.ts` for shared data
2. Update `src/features/instagram/constants/profileData.ts` for Instagram-specific data

### Adding New Images

1. Add to `public/images/`
2. Update `GALLERY_IMAGES` in `profileData.ts`
3. Update `images` array in `Gallery.tsx` (Basic feature)
