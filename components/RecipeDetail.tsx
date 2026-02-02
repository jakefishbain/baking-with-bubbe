'use client';

import { useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import { Recipe } from '@/lib/recipes';

interface RecipeDetailProps {
  recipe: Recipe;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onClose: () => void;
}

export default function RecipeDetail({
  recipe,
  isFavorite,
  onFavoriteToggle,
  onClose,
}: RecipeDetailProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bubbe-dark/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container - centered card */}
      <div className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-hidden rounded-3xl bg-bubbe-cream shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-bubbe-dark/10 text-bubbe-dark transition-all hover:bg-bubbe-dark/20 active:scale-95"
          aria-label="Close recipe"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Favorite button */}
        <button
          onClick={onFavoriteToggle}
          className={`absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-all active:scale-95 ${
            isFavorite
              ? 'bg-bubbe-red text-white'
              : 'bg-white/90 text-bubbe-red hover:bg-white'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[85vh] overscroll-contain">
          {/* Header with emoji and gradient */}
          <div className="bg-gradient-to-b from-bubbe-yellow/30 to-bubbe-cream pt-6 pb-4 px-6 text-center">
            <span className="text-7xl drop-shadow-md" role="img" aria-hidden="true">
              {recipe.emoji}
            </span>
            <h1
              id="recipe-title"
              className="mt-3 text-2xl md:text-3xl text-bubbe-dark leading-tight font-display tracking-wide"
            >
              {recipe.title}
            </h1>
            <span className="mt-3 inline-block rounded-full bg-bubbe-blue px-4 py-1.5 text-sm text-white font-bold">
              {recipe.tag}
            </span>
          </div>

          {/* Recipe content */}
          <div className="px-6 pb-8">
            {/* Cooking info badges */}
            {(recipe.cookingTime || recipe.ovenTemp) && (
              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                {recipe.ovenTemp && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bubbe-red/15 border border-bubbe-red/30 px-3 py-1.5 text-sm text-bubbe-red font-bold">
                    <span aria-hidden="true">🌡️</span>
                    {recipe.ovenTemp}
                  </span>
                )}
                {recipe.cookingTime && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bubbe-green/15 border border-bubbe-green/30 px-3 py-1.5 text-sm text-bubbe-green font-bold">
                    <span aria-hidden="true">⏱️</span>
                    {recipe.cookingTime}
                  </span>
                )}
              </div>
            )}

            {/* Description */}
            <p className="mt-4 text-center text-bubbe-gray text-sm md:text-base leading-relaxed font-body">
              {recipe.description}
            </p>

            {/* Decorative divider */}
            <div className="my-6 flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 rounded-full bg-bubbe-blue/50" />
              <span className="text-xl">🍪</span>
              <div className="h-0.5 w-12 rounded-full bg-bubbe-blue/50" />
            </div>

            {/* Ingredients section */}
            <section aria-labelledby="ingredients-heading">
              <h2
                id="ingredients-heading"
                className="mb-3 text-xl md:text-2xl text-bubbe-dark font-display tracking-wide"
              >
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-bubbe-dark font-body text-sm md:text-base"
                  >
                    <span className="text-bubbe-blue font-bold" aria-hidden="true">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Decorative divider */}
            <div className="my-6 flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 rounded-full bg-bubbe-yellow/50" />
              <span className="text-xl">👩‍🍳</span>
              <div className="h-0.5 w-12 rounded-full bg-bubbe-yellow/50" />
            </div>

            {/* Instructions section */}
            <section aria-labelledby="instructions-heading">
              <h2
                id="instructions-heading"
                className="mb-3 text-xl md:text-2xl text-bubbe-dark font-display tracking-wide"
              >
                Instructions
              </h2>
              <p className="text-bubbe-dark text-sm md:text-base leading-relaxed whitespace-pre-wrap font-body">
                {recipe.instructions}
              </p>
            </section>

            {/* Bubbe's Tip */}
            <section
              className="mt-6 rounded-xl border-l-4 border-bubbe-yellow bg-bubbe-yellow/15 p-4"
              aria-labelledby="bubbes-tip-heading"
            >
              <h3
                id="bubbes-tip-heading"
                className="mb-2 text-lg md:text-xl text-bubbe-dark flex items-center gap-2 font-display tracking-wide"
              >
                <span>💡</span> Bubbe&apos;s Tip
              </h3>
              <p className="text-bubbe-gray text-sm md:text-base leading-relaxed font-body">
                {recipe.bubbesTip}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
