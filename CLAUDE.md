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
- All UI split into standalone components in `src/components/`

### Component Flow

Components render in this order (top to bottom):
1. Hero - Opening section
2. InvitationMessage - Welcome message
3. Introduce - Bride & groom introduction
4. Calender - Wedding date calendar
5. Map - Venue location and transportation
6. RSVP - Attendance confirmation form
7. Gallery - Photo gallery with lightbox
8. Contact - Contact information
9. Bank - Gift/money transfer details
10. Footer - Closing section

### Centralized Wedding Data

All wedding-specific data (dates, names, phone numbers, bank accounts, venue info) is centralized in [src/constants/weddingInfo.ts](src/constants/weddingInfo.ts). This file exports:
- `VENUE_INFO`: Wedding date/time and venue details
- `BRIDE_GROOM_INFO`: Contact info and bank account details for bride, groom, and parents

When updating wedding information, modify this file only rather than individual components.

### Styling Approach

- Uses Tailwind CSS 4 with inline theming (`@theme inline` in globals.css)
- Custom color scheme: Pink/peach gradient background (`#FFDCDF`, `#FFF2EB`)
- Korean font: Gowun Dodum for body text
- Decorative font: Luxurious Script for accents
- Fixed width layout: `w-105` container (420px equivalent)

### Client Components

Two components require 'use client' directive due to interactivity:
- [Gallery.tsx](src/components/Gallery.tsx) - Uses LightGallery React wrapper for image lightbox with zoom/thumbnail plugins
- [RSVP.tsx](src/components/RSVP.tsx) - Form with React state management for attendance tracking

All other components are Server Components by default.

## Key Technical Details

### Image Gallery
The Gallery component uses the LightGallery library (v2.9.0-beta.1) with thumbnail and zoom plugins. Images are stored in `public/images/wedding[1-13].jpg` and referenced statically in the component. To add/remove images, update the `images` array in [Gallery.tsx](src/components/Gallery.tsx).

### RSVP Form
Currently logs data to console. The form submission handler in [RSVP.tsx](src/components/RSVP.tsx:18-22) needs backend integration to persist attendance data (e.g., API route, database, or form service).

### SVG Assets
Icon SVGs are stored in `public/` directory (phone.svg, message.svg, heart.svg, hand_writing.svg, car.svg, metro.svg, bus.svg) and used in Contact and Map components.

## Deployment Considerations

This project is optimized for Vercel deployment (Next.js creators). No special configuration needed for Vercel - just connect the repository.
