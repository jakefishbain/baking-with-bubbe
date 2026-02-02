'use client';

import { Recipe } from '@/lib/recipes';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  favorites: number[];
  onFavoriteToggle: (id: number) => void;
  onRecipeClick: (id: number) => void;
  emptyMessage?: string;
}

export default function RecipeGrid({
  recipes,
  favorites,
  onFavoriteToggle,
  onRecipeClick,
  emptyMessage = "No recipes found. Try a different search!",
}: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <span className="text-7xl mb-4 animate-float">🍪</span>
        <p className="text-lg md:text-xl text-bubbe-gray font-body font-semibold">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-4 md:px-6 lg:px-8 pb-24">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          onFavoriteToggle={() => onFavoriteToggle(recipe.id)}
          onClick={() => onRecipeClick(recipe.id)}
          animationDelay={index * 80}
        />
      ))}
    </div>
  );
}
