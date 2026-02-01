# Baking With Bubbe

A whimsical, storybook-style mobile-first recipe app showcasing Bubbe's (grandma's) secret baking recipes. Built with Next.js 14+, React, TypeScript, and Tailwind CSS.

## Features

- **Recipe List**: Browse all of Bubbe's recipes with beautiful animated cards
- **Search**: Real-time filtering by recipe name, description, or category
- **Favorites**: Save your favorite recipes (persisted with localStorage)
- **Recipe Detail**: Beautiful storybook-style recipe pages with ingredients, instructions, and Bubbe's tips
- **Contact Form**: Get in touch with Bubbe
- **Mobile-First**: Optimized for iPhone with responsive design

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State**: React hooks + localStorage

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd baking-with-bubbe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
baking-with-bubbe/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with BottomNav
│   ├── page.tsx             # Home page (recipe list)
│   ├── globals.css          # Global styles
│   ├── favorites/
│   │   └── page.tsx         # Favorites page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── recipe/
│       └── [id]/
│           └── page.tsx     # Individual recipe page
├── components/              # React components
│   ├── BubbeLogo.tsx       # SVG logo component
│   ├── Header.tsx          # App header with logo
│   ├── SearchBar.tsx       # Search input
│   ├── TabNav.tsx          # Tab navigation
│   ├── RecipeCard.tsx      # Recipe card component
│   ├── RecipeGrid.tsx      # Grid of recipe cards
│   ├── RecipeDetail.tsx    # Recipe detail modal
│   └── BottomNav.tsx       # Bottom navigation bar
├── lib/                     # Utilities and data
│   ├── recipes.ts          # Recipe data and helpers
│   └── hooks/
│       └── useFavorites.ts # Custom hook for favorites
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Adding Backend API

The app is structured to easily integrate with a backend API. Here's how to add API endpoints:

### Recipe Endpoints

Replace the functions in `lib/recipes.ts`:

```typescript
// GET /api/recipes - fetch all recipes
export async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch('/api/recipes');
  return response.json();
}

// GET /api/recipes/[id] - fetch single recipe
export async function getRecipeById(id: number): Promise<Recipe | null> {
  const response = await fetch(`/api/recipes/${id}`);
  if (!response.ok) return null;
  return response.json();
}

// GET /api/recipes/search?q=query - search recipes
export async function searchRecipes(query: string): Promise<Recipe[]> {
  const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(query)}`);
  return response.json();
}
```

### Contact Form Endpoint

Update the contact form in `app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

### Favorites API (Optional)

For user accounts with server-side favorites:

```typescript
// POST /api/favorites - add favorite
// DELETE /api/favorites/[id] - remove favorite
// GET /api/favorites - get user's favorites
```

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#FFF8E7` | Background |
| Warm Pink | `#FFB4B4` | Accents, borders |
| Soft Peach | `#FFD4B4` | Gradients |
| Sage Green | `#B5D4A8` | Success states |
| Lavender | `#E5D4ED` | Tags, accents |
| Chocolate | `#8B4513` | Text |
| Cinnamon | `#D2691E` | Interactive elements |

### Typography

- **Headings**: 'Brush Script MT', cursive
- **Body**: Georgia, serif

### Animations

- `fadeIn`: Cards appearing
- `slideUp`: Modal opening
- `heartPop`: Favorite toggle
- `shimmer`: Header gradient

## Sample Recipes Included

1. Bubbe's Chocolate Chip Cookies
2. Challah Bread
3. Apple Strudel
4. Honey Cake
5. Rugelach
6. Mandelbrot
7. Chocolate Babka
8. Hamantaschen
9. Cinnamon Babka
10. Potato Knishes

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- iOS Safari
- Android Chrome

## License

MIT
