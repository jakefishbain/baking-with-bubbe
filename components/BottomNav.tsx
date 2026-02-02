'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Heart } from 'lucide-react';

const navItems = [
  {
    href: '/',
    label: 'Recipes',
    icon: BookOpen,
    activeColor: 'text-bubbe-blue',
    activeBg: 'bg-bubbe-blue/15',
  },
  {
    href: '/favorites',
    label: 'Favorites',
    icon: Heart,
    activeColor: 'text-bubbe-red',
    activeBg: 'bg-bubbe-red/15',
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  // Don't show bottom nav on recipe detail pages
  if (pathname.startsWith('/recipe/')) {
    return null;
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-bubbe-blue/30"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-desktop items-center justify-around py-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0 px-3 py-0.5 transition-all active:scale-95 ${
                isActive ? item.activeColor : 'text-bubbe-gray'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={`p-1 rounded-lg transition-all ${
                  isActive ? item.activeBg : ''
                }`}
              >
                <Icon
                  className={`h-4 w-4 md:h-5 md:w-5 transition-transform ${
                    isActive ? 'scale-105' : ''
                  }`}
                  fill={isActive && item.icon === Heart ? 'currentColor' : 'none'}
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-bold font-body">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Safe area padding for iPhones with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/95" />
    </nav>
  );
}
