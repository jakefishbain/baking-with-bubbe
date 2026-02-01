export interface Recipe {
  id: number;
  title: string;
  description: string;
  emoji: string;
  tag: string;
  ingredients: string[];
  instructions: string;
  bubbesTip: string;
  cookingTime?: string;
  ovenTemp?: string;
}

// Bubs' real family recipes - extracted from handwritten recipe cards
// GET /api/recipes - fetch all recipes
// GET /api/recipes/[id] - fetch single recipe
export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Chocolate Chip Cookies",
    description: "Bubs' classic chocolate chip cookies - chewy, buttery, and absolutely perfect.",
    emoji: "🍪",
    tag: "Cookies",
    cookingTime: "8 min",
    ovenTemp: "375°",
    ingredients: [
      "2 cups + 2 tbsp flour",
      "1 tsp baking soda",
      "1½ sticks margarine, melted",
      "1 cup brown sugar (dark)",
      "½ cup white sugar",
      "1 egg + 1 yolk",
      "2 tsp vanilla",
      "1 full bag semi-sweet chocolate chips"
    ],
    instructions: "Melt butter in a bowl. Add white and brown sugars and mix well. Add eggs and vanilla, stirring until combined. Add baking soda and flour, mixing until just combined. Fold in chocolate chips. Put small piles on a baking sheet. Bake at 375° for about 8 minutes until edges are golden but centers are still soft.",
    bubbesTip: "The secret is using one whole egg plus an extra yolk - it makes the cookies extra chewy and rich!"
  },
  {
    id: 2,
    title: "Mandel Bread",
    description: "Traditional Jewish almond biscotti - perfect for dunking in tea or coffee.",
    emoji: "🥖",
    tag: "Cookies",
    cookingTime: "20-30 min",
    ovenTemp: "350°",
    ingredients: [
      "1 cup sugar",
      "1 cup vegetable oil",
      "3 eggs",
      "1 tsp vanilla",
      "¼ cup juice (orange, grape, etc.)",
      "3½ cups flour",
      "2½ tsp baking powder",
      "1 cup nuts",
      "6 oz chocolate chips (optional)",
      "Cinnamon and sugar for topping"
    ],
    instructions: "Mix sugar and oil together. Add eggs, vanilla, and juice. Add baking powder and flour, mixing until combined. Fold in nuts and chocolate chips if using. Place parchment paper on baking sheet. Form into 3 rolls and shape with hands. Sprinkle cinnamon and sugar on top (optional). Bake at 350° for 20-30 minutes. Let cool, then slice and lay flat. Toast at 350° for about 10 minutes until brown.",
    bubbesTip: "The twice-baking is what makes them perfectly crunchy - don't skip that step!"
  },
  {
    id: 3,
    title: "Sugar Cookies",
    description: "Simple, buttery sugar cookies - Bubs' version uses a drinking glass as a cookie cutter!",
    emoji: "🍪",
    tag: "Cookies",
    cookingTime: "6-8 min",
    ovenTemp: "400°",
    ingredients: [
      "⅓ cup Crisco or margarine",
      "1 cup sugar",
      "2 eggs",
      "2½ cups flour",
      "2 tsp baking powder",
      "1 tsp vanilla",
      "1 tbsp orange juice"
    ],
    instructions: "Cream sugar and Crisco together until fluffy. Add eggs, flour, and baking powder, mixing well. Add vanilla and orange juice. Roll out dough on a floured surface. Cut with a drinking glass (Bubs' version of a cookie cutter!). Bake at 400° for 6-8 minutes until edges are just barely golden.",
    bubbesTip: "A drinking glass works just as well as any fancy cookie cutter - and you probably already have one!"
  },
  {
    id: 4,
    title: "Blonde Brownies",
    description: "Chewy butterscotch brownies loaded with chocolate chips - a family favorite.",
    emoji: "🍫",
    tag: "Bars",
    cookingTime: "30 min",
    ovenTemp: "350°",
    ingredients: [
      "¾ cup flour",
      "½ tsp baking powder",
      "½ cup butter or margarine",
      "1 cup dark brown sugar",
      "2 eggs",
      "1 tsp vanilla extract",
      "1 pkg (6 oz) chocolate chips"
    ],
    instructions: "Preheat oven to 350°. Mix flour and baking powder together in a small bowl. Melt butter in a separate bowl. Add sugar to the melted butter and mix well. Add eggs and vanilla, stirring until combined. Add the flour mixture and mix until just combined. Fold in chocolate chips. Spread in a greased 8x8x2 pan. Bake for 30 minutes until golden on top.",
    bubbesTip: "Use dark brown sugar for the richest, most caramel-like flavor!"
  },
  {
    id: 5,
    title: "Chocolate Chip Coffee Cake",
    description: "A layered coffee cake with a buttery cinnamon filling and chocolate chips throughout.",
    emoji: "🍰",
    tag: "Cakes",
    cookingTime: "40-45 min",
    ovenTemp: "350°",
    ingredients: [
      "2 cups flour",
      "¼ lb butter",
      "1 cup sugar",
      "2 eggs",
      "1 tsp baking soda",
      "1 tsp baking powder",
      "1 cup sour cream",
      "Chocolate chips",
      "For filling: ⅛ lb melted butter, 1 cup brown sugar, ½ cup white sugar, 2 tbsp flour, cinnamon, ½ cup nuts (optional)"
    ],
    instructions: "Cream butter and sugar together. Mix in the rest of the ingredients, adding chocolate chips at the end. Mix filling ingredients separately. In a greased pan, layer: ½ of the dough, ½ of the filling, remaining dough, remaining filling. Bake at 350° for 40-45 minutes until a toothpick comes out clean.",
    bubbesTip: "The layers are the secret - don't skip the filling in the middle, it creates pockets of cinnamon goodness!"
  },
  {
    id: 6,
    title: "Noodle Kugel",
    description: "Sweet and comforting noodle pudding with a crispy cornflake topping.",
    emoji: "🍝",
    tag: "Kugels",
    cookingTime: "45 min",
    ovenTemp: "350°",
    ingredients: [
      "1 lb noodles",
      "½ lb margarine (2 sticks)",
      "1 large can diced peaches, drained (optional)",
      "6 eggs",
      "1 cup sugar",
      "Sprinkle of cinnamon",
      "Corn flakes for topping"
    ],
    instructions: "Cook noodles according to package directions, then drain. Mix noodles with margarine, eggs, sugar, peaches (if using), and cinnamon. Place in a greased casserole dish. Sprinkle corn flakes, cinnamon, and sugar on top. Bake at 350° for 45 minutes until golden and set.",
    bubbesTip: "The cornflake topping gets perfectly crispy - make sure to add plenty!"
  },
  {
    id: 7,
    title: "Noodle Ring",
    description: "An elegant caramelized noodle dish with pecans - perfect for holidays.",
    emoji: "🍜",
    tag: "Kugels",
    cookingTime: "45 min",
    ovenTemp: "350°",
    ingredients: [
      "⅛ lb margarine (for pan)",
      "¼ cup dark brown sugar",
      "1 cup pecans",
      "1 lb broad noodles (cooked)",
      "3 eggs",
      "⅛ lb margarine",
      "Salt",
      "Cinnamon",
      "⅓ cup sugar"
    ],
    instructions: "Melt butter in a bundt or ring pan. Press brown sugar into the melted butter to coat the bottom. Arrange pecans in the sugar. In a bowl, mix cooked noodles, eggs, margarine, salt, sugar, and cinnamon. Pour into the prepared pan over the pecans. Bake at 350° for 45 minutes. Flip onto a plate to serve - the caramelized pecans will be on top!",
    bubbesTip: "When you flip it out, the pecans and caramel become a beautiful topping - like an upside-down cake!"
  },
  {
    id: 8,
    title: "Spinach Kugel",
    description: "A savory noodle kugel packed with spinach - a holiday table staple.",
    emoji: "🥬",
    tag: "Kugels",
    cookingTime: "45 min",
    ovenTemp: "350°",
    ingredients: [
      "1 cup parve cream (Rich's)",
      "1 stick margarine, melted",
      "3 eggs",
      "½ lb medium noodles (8-12 oz)",
      "1-2 packages frozen spinach, defrosted and drained"
    ],
    instructions: "Cook noodles according to package directions, then drain. Mix all ingredients together - the melted margarine, parve cream, eggs, and well-drained spinach. Pour into a greased casserole dish. Bake at 350° for 45 minutes until set and slightly golden on top.",
    bubbesTip: "Make sure to squeeze ALL the water out of the spinach - otherwise your kugel will be soggy!"
  },
  {
    id: 9,
    title: "Crescents",
    description: "Buttery yeasted pastries rolled with cinnamon and nuts - melt in your mouth!",
    emoji: "🥐",
    tag: "Pastries",
    cookingTime: "15-20 min",
    ovenTemp: "375°",
    ingredients: [
      "1 oz yeast (dry yeast)",
      "½ cup milk (or parve cream)",
      "2 egg yolks",
      "2 sticks soft butter",
      "3 cups flour",
      "2 tbsp sugar",
      "For filling: ½ lb melted butter, 1 cup chopped nuts, 1 cup brown sugar (dark), 1 tbsp cinnamon"
    ],
    instructions: "Dissolve yeast in milk for 30 minutes. Add yolks to yeast and set aside. Mix flour, sugar, and butter together. Add yeast mixture and blend well. Roll out into ½ inch thick sheet. Cut into 5 wedge-shaped pieces. Roll each wedge into a ½ inch circle. Cut each circle into 10-12 triangular pieces. Fill each piece with the nut filling and roll from wide end to narrow end. Bake at 375° for 15-20 minutes until golden.",
    bubbesTip: "Roll from the wide end to the point - that's what gives them their beautiful crescent shape!"
  },
  {
    id: 10,
    title: "Strudel",
    description: "Flaky pastry filled with apricot preserves and walnuts - a classic!",
    emoji: "🥧",
    tag: "Pastries",
    cookingTime: "10 min + browning",
    ovenTemp: "350°/325°",
    ingredients: [
      "2 cups flour",
      "2 sticks butter",
      "1 cup sour cream",
      "For filling: 1 lb apricot preserves, 1 cup chopped walnuts, ½ tsp cinnamon",
      "Powdered sugar for serving"
    ],
    instructions: "Mix filling ingredients and refrigerate. Soften butter, then add sour cream and flour. Knead the dough until smooth. Shape into a square loaf and wrap in wax paper. Refrigerate overnight. Cut dough into 4 pieces and roll out each piece (flour your roller). Put filling on each piece and roll it up. Place on a cookie sheet. Bake 10 minutes at 350°, then reduce to 325° and bake until brown. Serve with powdered sugar on top.",
    bubbesTip: "The overnight rest in the fridge is essential - it makes the dough flaky and easy to work with!"
  },
  {
    id: 11,
    title: "Chocolate Peanut Butter Bars",
    description: "Three layers of chocolate, marshmallow, and peanut butter heaven.",
    emoji: "🥜",
    tag: "Bars",
    cookingTime: "25 min",
    ovenTemp: "350°",
    ingredients: [
      "1 Devil's Food cake mix",
      "1 cup margarine",
      "1 jar marshmallow fluff",
      "1 cup peanut butter"
    ],
    instructions: "Mix cake mix with margarine. Press into a 9x13 Pyrex pan. In a separate bowl, mix marshmallow fluff and peanut butter. Place this mixture over the batter (don't spread - use your fingers to spread it). Set aside 1 handful of the cake crumbs mixed with a little butter. Sprinkle crumbs on top of the peanut butter mixture. Bake at 350° for 25 minutes.",
    bubbesTip: "Use a Pyrex pan - it bakes more evenly. And spread the peanut butter layer with your fingers, not a spatula!"
  },
  {
    id: 12,
    title: "Crunchy Brownies",
    description: "Three-layer brownies with an oatmeal crust and chocolate frosting.",
    emoji: "🍫",
    tag: "Bars",
    cookingTime: "50 min",
    ovenTemp: "350°",
    ingredients: [
      "Crunchy layer: ¾ cup flour, ¼ tsp baking soda, ¼ tsp salt (opt.), 1½ cups quick oatmeal, ¾ cup brown sugar, ¾ cup margarine",
      "2nd layer: brownie mix",
      "3rd layer (frosting): 1½ oz bittersweet chocolate, 3 tbsp margarine, 2¼ cups confectioner's sugar, 1½ tsp vanilla, 3 tbsp hot water"
    ],
    instructions: "Mix all ingredients for the first layer. Put in a 13x9 pan and bake 10 minutes at 350°. Prepare brownie mix according to package. Place brownie batter on top of crunchy layer and bake 40-45 minutes. For frosting, melt chocolate and margarine, mix with sugar, vanilla, and hot water until smooth. Let cake cool, then spread frosting while still warm.",
    bubbesTip: "Spread the frosting while the brownies are still warm - it melts slightly and creates a beautiful glossy finish!"
  },
  {
    id: 13,
    title: "Breakfast Puffs",
    description: "Fluffy muffins rolled in cinnamon sugar - like little donuts!",
    emoji: "🧁",
    tag: "Breakfast",
    cookingTime: "20-25 min",
    ovenTemp: "350°",
    ingredients: [
      "3 cups flour",
      "1 tbsp baking powder",
      "½ tsp nutmeg (optional)",
      "1 cup sugar",
      "⅔ cup butter",
      "2 eggs",
      "1 cup milk",
      "For coating: 1 cup sugar, 2 tsp cinnamon, melted butter"
    ],
    instructions: "Stir together flour, baking powder, and nutmeg. In another bowl, cream sugar, butter, and eggs. Mix all together with milk until just combined. Fill greased muffin tins ⅔ full. Bake at 350° for 20-25 minutes. Combine sugar and cinnamon in a bowl. As soon as muffins come out of the oven, dip in melted butter and roll immediately in the cinnamon sugar mixture.",
    bubbesTip: "Roll them in the cinnamon sugar while they're still hot from the oven - that's what makes the coating stick!"
  },
  {
    id: 14,
    title: "Artichoke and Spinach Dip",
    description: "Creamy, cheesy dip that's always the first to disappear at parties.",
    emoji: "🥣",
    tag: "Appetizers",
    cookingTime: "20-30 min",
    ovenTemp: "325°",
    ingredients: [
      "1 can drained artichokes",
      "1 package frozen chopped spinach (defrosted)",
      "½ cup sour cream",
      "½ cup mayo",
      "3 oz cream cheese",
      "⅓ cup shredded mozzarella",
      "¼ cup fresh parmesan",
      "½-1 tsp garlic salt"
    ],
    instructions: "Chop artichokes into small pieces. Mix all ingredients together until well combined. Put in a 1 quart baking dish. Bake at 325° for 20-30 minutes until bubbly and golden on top. Serve hot with bread, crackers, or vegetables.",
    bubbesTip: "Make sure to squeeze all the water out of the spinach, or your dip will be watery!"
  },
  {
    id: 15,
    title: "Cabbage Salad",
    description: "Crunchy ramen noodle salad with toasted almonds - a potluck favorite.",
    emoji: "🥗",
    tag: "Salads",
    ingredients: [
      "1 cabbage, shredded",
      "2 packages oodles of noodles (ramen)",
      "1 bunch green onions, chopped",
      "1 cup slivered almonds",
      "4 tbsp sesame seeds",
      "For dressing: ⅔ cup oil, 6 tbsp vinegar, 4 tbsp sugar, 2 packages seasoning from the noodles"
    ],
    instructions: "Brown almonds and sesame seeds in a dry pan until golden and fragrant. Break up the ramen noodles (uncooked) and mix with shredded cabbage and green onions. Add the toasted almonds and sesame seeds. Mix all dressing ingredients together. Toss salad with dressing just before serving.",
    bubbesTip: "Don't add the dressing until right before serving - otherwise the noodles get soggy!"
  },
  {
    id: 16,
    title: "Cucumber Salad",
    description: "Light, tangy cucumber salad - best made the day before!",
    emoji: "🥒",
    tag: "Salads",
    ingredients: [
      "1⅓ cups vinegar",
      "⅓ cup water",
      "2 tbsp sugar",
      "½ tsp salt",
      "⅛ tsp pepper",
      "1-2 cucumbers, thinly sliced"
    ],
    instructions: "Mix vinegar, water, sugar, salt, and pepper until sugar dissolves. Slice cucumbers very thin. Pour dressing over cucumbers. Refrigerate overnight for best flavor.",
    bubbesTip: "Best if made the day before - the flavors really meld together overnight!"
  },
  {
    id: 17,
    title: "Tomato Soup",
    description: "Homemade tomato soup with a touch of honey - comfort in a bowl.",
    emoji: "🍅",
    tag: "Soups",
    cookingTime: "45 min",
    ingredients: [
      "1½ cups minced onion",
      "3 cloves minced garlic",
      "1 tbsp butter",
      "1 tbsp olive oil",
      "1 tsp dill weed",
      "⅛ tsp pepper",
      "1 (2½) can chopped tomatoes with liquid",
      "2 medium chopped fresh tomatoes",
      "1 tbsp honey"
    ],
    instructions: "Sauté onions and garlic in oil and butter until onions are clear and soft. Add dill, pepper, all the tomatoes, and honey. Cover and simmer on low heat for 45 minutes. Blend if you prefer a smooth soup.",
    bubbesTip: "The honey is the secret - it balances the acidity of the tomatoes perfectly!"
  },
  {
    id: 18,
    title: "Meatballs",
    description: "Sweet and sour meatballs in a tangy tomato mushroom sauce.",
    emoji: "🍖",
    tag: "Mains",
    cookingTime: "1 hour",
    ingredients: [
      "2 lbs ground beef",
      "⅔ cup matzo meal (or bread crumbs)",
      "½ cup water",
      "2 eggs",
      "½ cup minced onion",
      "Pinch of salt and pepper",
      "For sauce: 1 large onion (diced), 1½ cups lemon juice, ½ cup sugar or dark brown sugar, 1 can tomato mushroom sauce, ½ cup water"
    ],
    instructions: "Mix all sauce ingredients in a large pot. In a separate bowl, mix meat, matzo meal, water, eggs, onion, salt and pepper. Form into meatballs. Drop meatballs into the sauce. Simmer for 1 hour. First make the meatballs, then put them into the gravy to cook.",
    bubbesTip: "The meatballs cook IN the sauce - that's what makes them so tender and flavorful!"
  },
  {
    id: 19,
    title: "Kreplach",
    description: "Traditional meat-filled dumplings - Jewish comfort food at its finest.",
    emoji: "🥟",
    tag: "Mains",
    ingredients: [
      "For filling: 2 lbs brisket with onion, paprika, ketchup, garlic, etc.",
      "For dough: 3 cups flour, 4 eggs, 1 tsp salt, 4 tbsp warm water, 2 tbsp oil"
    ],
    instructions: "First, roast the brisket with seasonings until tender. Let cool, then grind the meat. For dough: place flour on table and rolling pin. Roll dough to 1 inch thick. Cut into 2½ inch squares. Place a small amount of meat filling on each square. Pinch into a triangle shape, sealing edges well. Boil in water until they rise to the surface. Optionally, bake at 350° after boiling for a crispier texture.",
    bubbesTip: "Pinch those edges tight! If they open during boiling, the filling falls out."
  },
  {
    id: 20,
    title: "Plum Chicken",
    description: "Sweet and savory chicken with a unique plum and lemonade sauce.",
    emoji: "🍗",
    tag: "Mains",
    cookingTime: "30 min",
    ovenTemp: "350°",
    ingredients: [
      "½ cup margarine",
      "1 medium sized onion",
      "1 (#2½) can plums",
      "6 oz can frozen lemonade",
      "2 tsp mustard",
      "⅓ cup chile sauce",
      "¼ cup soy sauce",
      "1 tsp ginger",
      "~2 lbs chicken"
    ],
    instructions: "Brown margarine in a pan. Chop onion and brown in the margarine. Puree plums and lemonade together. Mix everything together to make the sauce. Brown the chicken pieces. Pour sauce over chicken and bake at 350° for 30 minutes.",
    bubbesTip: "The combination of plums and lemonade sounds unusual, but trust me - it's delicious!"
  },
  {
    id: 21,
    title: "Cashew Chicken",
    description: "Restaurant-style cashew chicken you can make at home.",
    emoji: "🥡",
    tag: "Mains",
    ingredients: [
      "2 chicken breasts, cut up",
      "2 tbsp corn starch",
      "¼ cup sherry + 3 tbsp sherry",
      "1 medium onion, chopped",
      "2 cloves garlic, chopped",
      "1 tsp minced ginger",
      "½ cup chicken soup/broth",
      "¼ cup soy sauce",
      "2 tsp sugar",
      "½ cup cashews",
      "2 tsp peanut oil",
      "1 tsp sesame seeds"
    ],
    instructions: "Mix chicken with corn starch and ¼ cup sherry. Stir fry until lightly browned. Remove from pan. Stir fry onion, garlic, and ginger separately until fragrant. Add back the chicken along with cashews, chicken soup, soy sauce, remaining sherry, sugar, peanut oil, and sesame seeds. Stir fry until everything is coated and heated through.",
    bubbesTip: "Have all your ingredients prepped before you start - stir frying goes fast!"
  },
  {
    id: 22,
    title: "Lo Mein",
    description: "Veggie-packed noodles in savory soy sauce - great for using up vegetables!",
    emoji: "🍝",
    tag: "Mains",
    cookingTime: "1 hour",
    ovenTemp: "325°",
    ingredients: [
      "½ lb angel hair pasta",
      "4 tbsp soy sauce",
      "⅓ cup olive oil",
      "1 large onion, diced",
      "10 oz pea pods",
      "1 red pepper, diced",
      "10 green onions, chopped",
      "1 can water chestnuts (optional)",
      "Slivered almonds"
    ],
    instructions: "Cook noodles according to package, then toss with olive oil. Sauté all the vegetables until crisp-tender. Mix vegetables and noodles together with soy sauce. Brown almonds in a dry pan. Place everything in a casserole dish and sprinkle almonds on top. Cook covered at 325° for 1 hour. If frozen, cook for 1½ hours.",
    bubbesTip: "This freezes beautifully - make a double batch!"
  },
  {
    id: 23,
    title: "Hamburger Pie",
    description: "Comfort food classic - seasoned meat topped with creamy mashed potatoes.",
    emoji: "🥧",
    tag: "Mains",
    cookingTime: "30 min",
    ovenTemp: "350°",
    ingredients: [
      "1½ lbs ground meat",
      "1 cup bread crumbs",
      "1 egg",
      "½ cup ketchup",
      "1 diced onion",
      "2 cups mashed potatoes"
    ],
    instructions: "Mix ground meat, bread crumbs, egg, ketchup, and diced onion together. Press into a baking dish. Bake at 350° for 30 minutes. Top with mashed potatoes and broil until the potatoes are golden brown.",
    bubbesTip: "Broil the mashed potato topping for just a few minutes to get those beautiful golden peaks!"
  },
  {
    id: 24,
    title: "Rice and Noodles",
    description: "A savory side dish with browned noodles and fluffy rice.",
    emoji: "🍚",
    tag: "Sides",
    cookingTime: "45 min",
    ovenTemp: "350°",
    ingredients: [
      "1 cup margarine, melted",
      "12 oz fine noodles",
      "2 cups instant brown rice",
      "20 oz water",
      "2 packages onion soup mix",
      "2 cans chicken broth",
      "2 tsp soy sauce",
      "1 cup water",
      "1 can drained water chestnuts (optional)"
    ],
    instructions: "Brown noodles in margarine until golden. Place in a 3 quart casserole dish. Add all remaining ingredients and stir to combine. Bake at 350° for 45 minutes until liquid is absorbed and rice is tender.",
    bubbesTip: "Browning the noodles first is the key - it adds so much flavor!"
  },
  {
    id: 25,
    title: "Corn Pudding",
    description: "Sweet and custardy corn casserole with a graham cracker topping.",
    emoji: "🌽",
    tag: "Sides",
    cookingTime: "1 hour",
    ovenTemp: "350°",
    ingredients: [
      "2 cans Niblets corn, drained",
      "2 cans creamed corn (small cans)",
      "1 egg",
      "2 tsp vanilla",
      "1½ tsp baking powder",
      "¼ cup graham cracker crumbs, plus more for topping"
    ],
    instructions: "Mix both types of corn together. Add egg, vanilla, baking powder, and graham cracker crumbs. Mix well. Place in a 1½ quart casserole dish. Top with more graham cracker crumbs. Bake at 350° for 1 hour until set and golden.",
    bubbesTip: "The vanilla might seem strange in a corn dish, but it adds a subtle sweetness that makes it special!"
  },
  {
    id: 26,
    title: "Cranberry Relish",
    description: "Festive cranberry dish with mandarin oranges and pineapple - perfect for holidays.",
    emoji: "🍒",
    tag: "Sides",
    ingredients: [
      "1 cup water",
      "¾ cup sugar",
      "1 (12 oz) bag cranberries",
      "1 (8 oz) can mandarin oranges",
      "1 (8 oz) crushed pineapple",
      "½ cup chopped nuts",
      "1 (3 oz) raspberry gelatin"
    ],
    instructions: "Boil sugar in water until dissolved. Add cranberries and boil gently until berries pop. Remove from heat. Stir in gelatin until dissolved. Add all other ingredients and mix well. Pour into a mold or serving dish and refrigerate until set.",
    bubbesTip: "Listen for the berries to pop - that's how you know they're ready!"
  },
  {
    id: 27,
    title: "Taco Salad",
    description: "Layered taco dip that's always a hit at gatherings.",
    emoji: "🌮",
    tag: "Appetizers",
    ingredients: [
      "8 oz cream cheese",
      "16 oz sour cream",
      "1 pkg taco seasoning mix",
      "Shredded iceberg lettuce",
      "1 cup shredded cheddar cheese",
      "3 chopped tomatoes",
      "2.25 oz black olives, drained"
    ],
    instructions: "Mix cream cheese alone until smooth. Add sour cream and taco seasoning, mixing well. Spread on a round dish (9 inches or larger). Top with layers of lettuce, cheddar cheese, tomatoes, and black olives. Serve with tortilla chips.",
    bubbesTip: "Mix the cream cheese by itself first until smooth - no lumps allowed!"
  }
];

// Helper function to get a single recipe by ID
// In the future, this would be: fetch(`/api/recipes/${id}`)
export function getRecipeById(id: number): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

// Helper function to search recipes
export function searchRecipes(query: string): Recipe[] {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(
    recipe =>
      recipe.title.toLowerCase().includes(lowercaseQuery) ||
      recipe.description.toLowerCase().includes(lowercaseQuery) ||
      recipe.tag.toLowerCase().includes(lowercaseQuery)
  );
}

// Helper function to get recipes by tag
export function getRecipesByTag(tag: string): Recipe[] {
  return recipes.filter(recipe => recipe.tag === tag);
}

// Get all unique tags
export function getAllTags(): string[] {
  return Array.from(new Set(recipes.map(recipe => recipe.tag)));
}
