'use client';

import { Check } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selected: string[];
  onToggle: (category: string) => void;
  onClearAll: () => void;
}

// Map categories to emojis
const categoryEmojis: Record<string, string> = {
  Cookies: '🍪',
  Bars: '🍫',
  Cakes: '🎂',
  Kugels: '🍝',
  Pastries: '🥐',
  Breakfast: '🌅',
  Appetizers: '🥣',
  Salads: '🥗',
  Soups: '🍲',
  Mains: '🍽️',
  Sides: '🥘',
};

export default function CategoryFilter({
  categories,
  selected,
  onToggle,
  onClearAll,
}: CategoryFilterProps) {
  const hasSelection = selected.length > 0;

  return (
    <div className="px-4 md:px-6 lg:px-8 py-2">
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap md:overflow-visible">
        {/* All / Clear button */}
        <button
          onClick={onClearAll}
          className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm md:text-base font-bold border-2 transition-all active:scale-95 ${
            !hasSelection
              ? 'bg-bubbe-blue border-bubbe-blue text-white'
              : 'bg-white text-bubbe-blue border-bubbe-blue hover:bg-bubbe-blue/10'
          }`}
        >
          {hasSelection ? 'Clear' : 'All'}
        </button>

        {/* Category buttons */}
        {categories.map((category) => {
          const emoji = categoryEmojis[category] || '📖';
          const isSelected = selected.includes(category);

          return (
            <button
              key={category}
              onClick={() => onToggle(category)}
              className={`flex-shrink-0 rounded-full px-4 py-2.5 text-sm md:text-base font-bold border-2 transition-all flex items-center gap-2 active:scale-95 ${
                isSelected
                  ? 'bg-bubbe-blue border-bubbe-blue text-white'
                  : 'bg-white text-bubbe-dark border-bubbe-gray/30 hover:border-bubbe-blue/50'
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && <Check className="w-4 h-4" strokeWidth={3} />}
              <span aria-hidden="true">{emoji}</span>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
