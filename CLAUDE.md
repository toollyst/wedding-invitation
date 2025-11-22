# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15-based wedding invitation website built with React 19, TypeScript, and Tailwind CSS 4. The site is a single-page application featuring a scrollable layout with multiple sections for wedding information, RSVP functionality, photo gallery, and venue details.

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

## Architecture

### Application Structure

The app uses Next.js 15 App Router architecture:
- Single-page layout defined in [src/app/page.tsx](src/app/page.tsx)
- Root layout in [src/app/layout.tsx](src/app/layout.tsx) handles fonts and metadata
- Main sections in `src/sections/` (page-level components used once)
- Reusable UI components in `src/components/` (used across multiple sections)
- API routes in `src/app/api/` for server-side logic

### Component Flow

Components render in this order (top to bottom):
1. ConfettiBackground - Falling petal animation (15s fadeout)
2. Hero - Full-screen opening section with background image
3. InvitationMessage - Welcome message with couple and parent names
4. Divider - Section separator
5. DateInfo - Wedding date, venue, calendar widget, and countdown
6. Divider - Section separator
7. Map - Venue location with Kakao map and transportation guide (accordion)
8. Divider - Section separator
9. RSVP - Attendance confirmation form with API integration
10. Divider - Section separator
11. Gallery - Photo gallery with lightbox
12. Divider - Section separator
13. Contact - Contact information for couple and parents
14. Divider - Section separator
15. Bank - Gift/money transfer details (accordion with copy feature)
16. Footer - Closing section

### Centralized Wedding Data

All wedding-specific data and constants are centralized for easy maintenance:

**[src/constants/weddingInfo.ts](src/constants/weddingInfo.ts)**:
- `VENUE_INFO`: Wedding date/time and venue details
- `BRIDE_GROOM_INFO`: Contact info and bank account details for bride, groom, and parents

**[src/constants/colors.ts](src/constants/colors.ts)**:
- `WEDDING_COLORS`: Theme color palette (matches CSS variables)
- `CONFETTI_COLORS`: Array of colors used in confetti animation

When updating wedding information or colors, modify these constants files only rather than individual components.

### Styling Approach

**Tailwind CSS 4 + Custom Utility Classes**:
- Uses Tailwind CSS 4 with inline theming (`@theme inline` in globals.css)
- Custom reusable classes in [globals.css](src/app/globals.css):
  - `.wedding-button`: Consistent button styling with hover effects
  - `.wedding-input`: Form input styling with focus states
  - `.wedding-card`: Card container with border and padding
- CSS variables for theming:
  - Background: `--bg-color` (#fff8f6), `--bg-color-emphasis` (#ffedea)
  - Primary colors: `--color-primary` (#e6a19c), `--color-secondary` (#eacbc7)
  - Text colors: `--text-main` (#5b4b45), `--text-sub` (#a4938e)

**Typography**:
- Korean font: Gowun Dodum for body text
- Decorative fonts: Luxurious Script and Hurricane for accents
- Fixed width layout: `max-w-105` container (420px equivalent, centered)

**Animations**:
- Custom `fade-in-up` keyframe animation (2s ease-out)
- Used by ScrollFadeIn component for scroll-triggered animations

### Client vs Server Components

**Client Components** (7 components in `src/sections/` use 'use client'):
- [Map.tsx](src/sections/Map.tsx) - Kakao map with accordion transportation sections
- [RSVP.tsx](src/sections/RSVP.tsx) - Form with API integration and loading states
- [Gallery.tsx](src/sections/Gallery.tsx) - LightGallery with zoom/thumbnail plugins
- [Contact.tsx](src/sections/Contact.tsx) - Contact cards with phone/SMS links
- [Bank.tsx](src/sections/Bank.tsx) - Accordion with bank accounts and clipboard copy
- [ConfettiBackground.tsx](src/sections/ConfettiBackground.tsx) - Petal animation with 15s fadeout
- [ScrollFadeIn.tsx](src/components/ScrollFadeIn.tsx) - Scroll animation wrapper (IntersectionObserver)

**Server Components** (5 components, default):
- [Hero.tsx](src/sections/Hero.tsx) - Full-screen opening section
- [InvitationMessage.tsx](src/sections/InvitationMessage.tsx) - Wedding message
- [DateInfo.tsx](src/sections/DateInfo.tsx) - Date/venue with calendar and countdown
- [Footer.tsx](src/sections/Footer.tsx) - Closing section
- [Divider.tsx](src/components/Divider.tsx) - Section separator
- [Calendar.tsx](src/components/Calendar.tsx) - Monthly calendar widget

## Key Technical Details

### Image Gallery
The Gallery component uses the LightGallery library (v2.9.0-beta.1) with thumbnail and zoom plugins. Images are stored in `public/images/wedding[1-13].jpg` (13 images total) and referenced statically in the component. wedding10.jpg is also used as the Hero background image. To add/remove images, update the `images` array in [Gallery.tsx](src/components/Gallery.tsx).

### Confetti Animation
The ConfettiBackground component uses react-confetti (v6.4.0) and react-use (v17.6.0) libraries to create falling petal animations. Features:
- Responsive particle count: mobile (20) vs desktop (40)
- Custom petal shapes using ellipse drawing
- Colors from CONFETTI_COLORS constant
- **Auto-fadeout**: 10-15s opacity transition, then component unmounts to save resources

### Scroll Animations
The ScrollFadeIn wrapper component uses the IntersectionObserver API to trigger fade-in animations when elements become 10% visible. The animation is one-time only (doesn't re-trigger) and uses the custom `fade-in-up` keyframe animation (30px translateY with opacity transition over 2s).

### Calendar Widget
The Calendar common component dynamically generates a monthly calendar grid, highlights the wedding day with heart_pink.svg icon, and color-codes weekends (Sunday in red, Saturday in pink).

### Map Integration
The Map component integrates Kakao Maps with an embedded iframe. It includes three collapsible sections (Car/Metro/Bus) with detailed transportation directions. Uses React useState for accordion-style expand/collapse functionality.

### RSVP Form
Fully functional attendance tracking with API integration:
- Form fields: side (groom/bride), attendance (attend/not-attend/maybe), name, guest count
- API endpoint: `POST /api/rsvp` ([route.ts](src/app/api/rsvp/route.ts))
- Loading states, success/error messages, form reset on success
- Ready for Google Sheets integration (commented code in API route)
- To enable Sheets: Set environment variables and uncomment API integration code

### Contact Information
The Contact component displays information for 6 people (groom, bride, and both sets of parents). Each contact card has phone call (`tel:`) and SMS (`sms:`) links for direct communication. ARIA labels added for accessibility.

### Bank Component
Fully implemented accordion-style bank account display:
- Two sections: 신랑측 (Groom's side) and 신부측 (Bride's side)
- Each section shows 3 accounts (신랑/신부, 아버지, 어머니) from BRIDE_GROOM_INFO
- **Copy to clipboard** feature for each account number
- Visual feedback: button changes to "복사됨" (Copied) in green for 2 seconds
- Accordion with aria-expanded and aria-controls for accessibility

### SVG Assets
Icon SVGs stored in `public/` directory:
- phone.svg, message.svg - Used in Contact component
- heart.svg - Used in Footer component
- heart_pink.svg - Used in Calendar component for wedding day highlight
- car.svg, metro.svg, bus.svg - Used in Map component accordion
- ribbon.svg - Untracked file, not currently used

## File Structure

```
src/
├── app/
│   ├── page.tsx              # Main page (assembles all sections)
│   ├── layout.tsx            # Root layout with fonts (Gowun Dodum, Luxurious Script, Hurricane)
│   ├── globals.css           # Global styles + utility classes + CSS variables
│   └── api/
│       └── rsvp/
│           └── route.ts      # RSVP submission API endpoint
├── sections/                 # Page-level components (used once)
│   ├── Hero.tsx              # Server Component
│   ├── InvitationMessage.tsx # Server Component
│   ├── DateInfo.tsx          # Server Component (renamed from Calender)
│   ├── Map.tsx               # Client Component (accordion)
│   ├── RSVP.tsx              # Client Component (API integration)
│   ├── Gallery.tsx           # Client Component (LightGallery)
│   ├── Contact.tsx           # Client Component (tel/sms links)
│   ├── Bank.tsx              # Client Component (accordion + clipboard)
│   ├── Footer.tsx            # Server Component
│   └── ConfettiBackground.tsx # Client Component (auto-fadeout)
├── components/               # Reusable UI components
│   ├── Calendar.tsx          # Server Component (calendar widget)
│   ├── Divider.tsx           # Server Component (section separator)
│   └── ScrollFadeIn.tsx      # Client Component (scroll animation)
└── constants/
    ├── weddingInfo.ts        # Wedding data (venue, people, contacts, bank accounts)
    └── colors.ts             # Color constants for theme consistency
```

## Dependencies

### Production Dependencies
- **next**: 15.5.3 - React framework with App Router
- **react**: 19.1.0 - UI library
- **react-dom**: 19.1.0 - React DOM renderer
- **lightgallery**: 2.9.0-beta.1 - Photo gallery with lightbox functionality
- **react-confetti**: 6.4.0 - Confetti/petal animation effects
- **react-use**: 17.6.0 - React hooks library (used for window size detection in ConfettiBackground)

### Development Dependencies
- **typescript**: ^5 - Type safety
- **tailwindcss**: ^4 - Utility-first CSS framework
- **@tailwindcss/postcss**: ^4 - PostCSS plugin for Tailwind CSS 4
- **eslint**: ^9 - Code linting
- **eslint-config-next**: 15.5.3 - Next.js ESLint configuration
- **@eslint/eslintrc**: ^3 - ESLint configuration
- **prettier**: 3.6.2 - Code formatting
- **@types/node**, **@types/react**, **@types/react-dom** - TypeScript type definitions

## Deployment Considerations

This project is optimized for Vercel deployment (Next.js creators). No special configuration needed for Vercel - just connect the repository.

### Build Configuration
- Uses Turbopack for both development and production builds (faster than Webpack)
- TypeScript strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- No custom Next.js configuration required (uses defaults)

### Environment Variables (Optional)
For Google Sheets RSVP integration, set these in Vercel:
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=your-private-key
GOOGLE_SHEET_ID=your-sheet-id
```
Then uncomment the Google Sheets code in [src/app/api/rsvp/route.ts](src/app/api/rsvp/route.ts).

## Styling Guide for Tailwind Beginners

### Using Custom Utility Classes
Instead of writing inline styles or long className strings, use these predefined classes:

```tsx
// ✅ Good - Use custom utility class
<button className="wedding-button">Submit</button>

// ❌ Avoid - Inline styles
<button style={{ backgroundColor: 'var(--color-secondary)' }}>Submit</button>

// ✅ Good - Custom input class
<input className="wedding-input" />

// ❌ Avoid - Long Tailwind chain
<input className="w-full px-3 py-2 border rounded-md focus:outline-none" />
```

### Using Tailwind for Layout
For layout and spacing, continue using Tailwind utilities:

```tsx
// Flexbox layout
<div className="flex items-center justify-between gap-4">

// Grid layout
<div className="grid grid-cols-2 gap-2">

// Spacing
<div className="px-4 py-2 mt-6 mb-4">
```

### Accessing Theme Colors
Use CSS variables with arbitrary values:

```tsx
// Background
<div className="bg-[var(--bg-color)]">

// Text color
<p className="text-[var(--text-sub)]">

// Border
<div className="border-[var(--color-line)]">
```

### Common Patterns

**Cards/Containers**:
```tsx
<div className="wedding-card">...</div>
```

**Buttons**:
```tsx
<button className="wedding-button">Click me</button>
```

**Form Inputs**:
```tsx
<input className="wedding-input" />
<input className="wedding-input w-20" /> // Override width
```

**Responsive Design**:
```tsx
<div className="text-sm sm:text-base md:text-lg">
  // sm: 640px+, md: 768px+, lg: 1024px+
</div>
```
