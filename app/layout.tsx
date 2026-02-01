import type { Metadata, Viewport } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Baking With Bubbe',
  description: "A whimsical, storybook-style recipe app showcasing Bubbe's secret baking recipes",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Baking With Bubbe',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#FFB4B4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Main container - mobile-first, centered on desktop */}
        <div className="mx-auto max-w-mobile min-h-screen bg-gradient-to-b from-cream to-soft-peach shadow-2xl">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
