import { Metadata } from 'next';
import { BottomNavigation } from '@/features/instagram/components/layout';
import { ToastProvider } from '@/features/instagram/contexts/ToastContext';
import { Toast } from '@/features/instagram/components/common/Toast';

export const metadata: Metadata = {
  title: '심상원 ♥ 김예현 결혼합니다',
  description: '2026년 9월 5일 토요일 오전 11시 30분, 그랜드힐 컨벤션',
  openGraph: {
    title: '심상원 ♥ 김예현 결혼합니다',
    description: '2026년 9월 5일 토요일 오전 11시 30분, 그랜드힐 컨벤션',
    images: ['/images/wedding10.jpg'],
  },
};

export default function InstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="ig-container">
        <main
          style={{
            paddingBottom: 'calc(var(--ig-nav-height) + var(--ig-safe-area-bottom))',
            minHeight: '100dvh',
          }}
        >
          {children}
        </main>
        <BottomNavigation />
      </div>
      <Toast />
    </ToastProvider>
  );
}
