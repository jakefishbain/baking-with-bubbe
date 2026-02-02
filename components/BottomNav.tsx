'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Heart, Mail } from 'lucide-react';

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
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    activeColor: 'text-bubbe-green',
    activeBg: 'bg-bubbe-green/15',
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
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-bubbe-blue"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-desktop items-center justify-around py-2 md:py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-6 md:px-8 py-2 transition-all active:scale-95 ${
                isActive ? item.activeColor : 'text-bubbe-gray'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  isActive ? item.activeBg : ''
                }`}
              >
                <Icon
                  className={`h-6 w-6 md:h-7 md:w-7 transition-transform ${
                    isActive ? 'scale-110' : ''
                  }`}
                  fill={isActive && item.icon === Heart ? 'currentColor' : 'none'}
                />
              </div>
              <span className="text-xs md:text-sm font-bold font-body">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Safe area padding for iPhones with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white" />
    </nav>
  );
}
