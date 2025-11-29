'use client';

import {
  GuestbookForm,
  GuestbookWriteHeader,
} from '@/features/instagram/components/guestbook';

export default function GuestbookWritePage() {
  return (
    <div>
      <GuestbookWriteHeader />
      <GuestbookForm />
    </div>
  );
}
