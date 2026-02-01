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
        <span className="text-6xl mb-4">🍪</span>
        <p className="font-serif text-lg text-chocolate/70 italic">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 pb-24">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          onFavoriteToggle={() => onFavoriteToggle(recipe.id)}
          onClick={() => onRecipeClick(recipe.id)}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
}
