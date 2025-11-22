import type { Metadata } from 'next';
import { Gowun_Dodum, Luxurious_Script, Hurricane } from 'next/font/google';
import './globals.css';

const gowunDodum = Gowun_Dodum({
  variable: '--font-gowun-dodum',
  subsets: ['latin'],
  weight: ['400'],
});

const luxuriousScript = Luxurious_Script({
  variable: '--font-luxurious-script',
  subsets: ['latin'],
  weight: ['400'],
});

const hurricane = Hurricane({
  variable: '--font-hurricane',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'SW & YH Wedding',
  description: 'SW & YH Wedding',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gowunDodum.variable} ${luxuriousScript.variable} ${hurricane.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
