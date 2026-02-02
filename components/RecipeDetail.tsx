'use client';

import { Heart } from 'lucide-react';
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
  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bubbe-dark/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Recipe content - slide up animation */}
      <div
        className="absolute bottom-0 left-0 right-0 mx-auto max-h-[90vh] w-full max-w-2xl animate-slide-up overflow-y-auto rounded-t-[32px] bg-bubbe-cream"
      >
        {/* Blue header bar */}
        <div className="h-2 bg-bubbe-blue rounded-t-[32px]" />

        {/* Header with back and favorite buttons */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-b from-bubbe-cream via-bubbe-cream to-bubbe-cream/80 p-4 pb-2">
          <button
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-bubbe-blue text-white transition-all hover:bg-bubbe-blue-dark active:scale-95"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={onFavoriteToggle}
            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all active:scale-95 ${
              isFavorite
                ? 'bg-bubbe-red border-bubbe-red text-white'
                : 'bg-white border-bubbe-red/30 text-bubbe-red hover:border-bubbe-red'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
          >
            <Heart
              className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`}
            />
          </button>
        </div>

        {/* Recipe content */}
        <div className="px-6 md:px-10 pb-12">
          {/* Emoji */}
          <div className="flex justify-center py-4">
            <span className="text-8xl drop-shadow-lg animate-bounce-in" role="img" aria-hidden="true">
              {recipe.emoji}
            </span>
          </div>

          {/* Title */}
          <h1
            id="recipe-title"
            className="text-center text-3xl md:text-4xl text-bubbe-dark leading-tight font-display tracking-wide"
          >
            {recipe.title}
          </h1>

          {/* Tag */}
          <div className="mt-4 flex justify-center">
            <span className="rounded-full bg-bubbe-blue px-5 py-2 text-sm md:text-base text-white font-bold">
              {recipe.tag}
            </span>
          </div>

          {/* Cooking info badges */}
          {(recipe.cookingTime || recipe.ovenTemp) && (
            <div className="mt-5 flex justify-center gap-3 flex-wrap">
              {recipe.ovenTemp && (
                <span className="inline-flex items-center gap-2 rounded-full bg-bubbe-red/15 border-2 border-bubbe-red/30 px-4 py-2 text-sm md:text-base text-bubbe-red font-bold">
                  <span aria-hidden="true">🌡️</span>
                  {recipe.ovenTemp}
                </span>
              )}
              {recipe.cookingTime && (
                <span className="inline-flex items-center gap-2 rounded-full bg-bubbe-green/15 border-2 border-bubbe-green/30 px-4 py-2 text-sm md:text-base text-bubbe-green font-bold">
                  <span aria-hidden="true">⏱️</span>
                  {recipe.cookingTime}
                </span>
              )}
            </div>
          )}

          {/* Description */}
          <p className="mt-6 text-center text-bubbe-gray text-base md:text-lg leading-relaxed font-body">
            {recipe.description}
          </p>

          {/* Decorative divider */}
          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-1 w-16 rounded-full bg-bubbe-blue" />
            <span className="text-2xl">🍪</span>
            <div className="h-1 w-16 rounded-full bg-bubbe-blue" />
          </div>

          {/* Ingredients section */}
          <section aria-labelledby="ingredients-heading">
            <h2
              id="ingredients-heading"
              className="mb-4 text-2xl md:text-3xl text-bubbe-dark font-display tracking-wide"
            >
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-bubbe-dark font-body text-base md:text-lg"
                >
                  <span className="text-bubbe-blue text-xl font-bold" aria-hidden="true">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Decorative divider */}
          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-1 w-16 rounded-full bg-bubbe-yellow" />
            <span className="text-2xl">👩‍🍳</span>
            <div className="h-1 w-16 rounded-full bg-bubbe-yellow" />
          </div>

          {/* Instructions section */}
          <section aria-labelledby="instructions-heading">
            <h2
              id="instructions-heading"
              className="mb-4 text-2xl md:text-3xl text-bubbe-dark font-display tracking-wide"
            >
              Instructions
            </h2>
            <p className="text-bubbe-dark text-base md:text-lg leading-relaxed whitespace-pre-wrap font-body">
              {recipe.instructions}
            </p>
          </section>

          {/* Bubbe's Tip */}
          <section
            className="mt-8 rounded-2xl border-l-4 border-bubbe-yellow bg-bubbe-yellow/15 p-6"
            aria-labelledby="bubbes-tip-heading"
          >
            <h3
              id="bubbes-tip-heading"
              className="mb-3 text-xl md:text-2xl text-bubbe-dark flex items-center gap-2 font-display tracking-wide"
            >
              <span>💡</span> Bubbe&apos;s Tip
            </h3>
            <p className="text-bubbe-gray text-base md:text-lg leading-relaxed font-body">
              {recipe.bubbesTip}
            </p>
          </section>

          {/* Bottom padding to clear bottom nav */}
          <div className="h-24" />
        </div>
      </div>
    </div>
  );
}
