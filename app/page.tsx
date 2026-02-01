'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import TabNav from '@/components/TabNav';
import RecipeGrid from '@/components/RecipeGrid';
import RecipeDetail from '@/components/RecipeDetail';
import { recipes, getRecipeById, getAllTags } from '@/lib/recipes';
import { useFavorites } from '@/lib/hooks/useFavorites';

const tabs = [
  { id: 'all', label: 'All Recipes' },
  { id: 'favorites', label: 'Favorites' },
];

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  // Get all unique categories
  const categories = useMemo(() => getAllTags(), []);

  // Filter recipes based on search, category, and active tab
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Filter by tab
    if (activeTab === 'favorites') {
      filtered = filtered.filter((recipe) => favorites.includes(recipe.id));
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((recipe) => recipe.tag === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(query) ||
          recipe.description.toLowerCase().includes(query) ||
          recipe.tag.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, activeTab, favorites]);

  const selectedRecipe = selectedRecipeId ? getRecipeById(selectedRecipeId) : null;

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (selectedRecipe) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedRecipe]);

  const handleRecipeClick = (id: number) => {
    setSelectedRecipeId(id);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipeId(null);
  };

  const getEmptyMessage = () => {
    if (activeTab === 'favorites' && favorites.length === 0) {
      return "No favorites yet! Start exploring Bubbe's recipes and tap the heart to save your favorites.";
    }
    if (activeTab === 'favorites' && selectedCategory) {
      return `No favorite ${selectedCategory.toLowerCase()} recipes yet!`;
    }
    if (searchQuery) {
      return `No recipes found for "${searchQuery}". Try a different search!`;
    }
    if (selectedCategory) {
      return `No ${selectedCategory.toLowerCase()} recipes found.`;
    }
    return "No recipes found.";
  };

  return (
    <main className="min-h-screen pb-20">
      <Header />

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search Bubbe's recipes..."
      />

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Show loading state while favorites are being loaded */}
      {!isLoaded ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-4xl animate-pulse">🍪</div>
        </div>
      ) : (
        <RecipeGrid
          recipes={filteredRecipes}
          favorites={favorites}
          onFavoriteToggle={toggleFavorite}
          onRecipeClick={handleRecipeClick}
          emptyMessage={getEmptyMessage()}
        />
      )}

      {/* Recipe detail modal */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          isFavorite={isFavorite(selectedRecipe.id)}
          onFavoriteToggle={() => toggleFavorite(selectedRecipe.id)}
          onClose={handleCloseRecipe}
        />
      )}
    </main>
  );
}
