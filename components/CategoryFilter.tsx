'use client';

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

// Map categories to emojis for visual appeal
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
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="px-4 py-2">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {/* All button */}
        <button
          onClick={() => onSelect(null)}
          className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selected === null
              ? 'bg-warm-pink text-white shadow-md'
              : 'bg-warm-pink/20 text-chocolate hover:bg-warm-pink/30'
          }`}
        >
          All
        </button>

        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all flex items-center gap-1.5 ${
              selected === category
                ? 'bg-warm-pink text-white shadow-md'
                : 'bg-warm-pink/20 text-chocolate hover:bg-warm-pink/30'
            }`}
          >
            <span aria-hidden="true">{categoryEmojis[category] || '📖'}</span>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
