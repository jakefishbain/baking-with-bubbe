'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Heart, Mail } from 'lucide-react';

const navItems = [
  {
    href: '/',
    label: 'Recipes',
    icon: BookOpen,
  },
  {
    href: '/favorites',
    label: 'Favorites',
    icon: Heart,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
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
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-warm-pink bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-mobile items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-6 py-2 transition-all active:scale-95 ${
                isActive ? 'text-cinnamon' : 'text-chocolate/50'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                className={`h-6 w-6 transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
                fill={isActive && item.icon === Heart ? 'currentColor' : 'none'}
              />
              <span className="text-xs font-serif">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Safe area padding for iPhones with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white" />
    </nav>
  );
}
