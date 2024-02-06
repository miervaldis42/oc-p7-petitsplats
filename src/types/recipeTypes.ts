type RecipesType = RecipeType[] | [];

interface RecipeType {
  id: number;
  image: string; // Pattern: `Recette${id < 10 ? "0${id}" : id}.jpg`
  name: string;
  servings: number;
  ingredients: IngredientInfoType[];
  time: number;
  description: string;
  appliance: ApplianceType;
  ustensils: UstensilType[];
}

// ingredient : Name starts with a **capital letter**
interface IngredientInfoType {
  ingredient: string;
  quantity?: number;
  unit?:
    | "pincée(s)"
    | "g"
    | "kg"
    | "ml"
    | "cl"
    | "L"
    | "cuillère(s) à café"
    | "cuillère(s) à soupe"
    | "verre(s)"
    | "tasse(s)"
    | "boîte(s)"
    | "gousse(s)"
    | "tige(s)"
    | "feuille(s)"
    | "tranche(s)"
    | "sachet(s)"
    | "barquette(s)";
}

type UstensilType =
  | "cuillère(s) à soupe"
  | "cuillère en bois"
  | "cuillère à melon"
  | "verres"
  | "presse citron"
  | "saladier"
  | "passoire"
  | "râpe à fromage"
  | "couteau"
  | "moule"
  | "moule à tarte"
  | "moule à tartelettes (6)"
  | "moule à gâteaux"
  | "fourchette"
  | "casserole"
  | "plat à gratin"
  | "économe"
  | "poêle à frire"
  | "louche"
  | "râpe à fromage"
  | "fouet"
  | "rouleau à pâtisserie"
  | "plaque de cuisson"
  | "cocotte minute"
  | "bol"
  | "spatule";

type ApplianceType =
  | "Blender"
  | "Saladier"
  | "Cocotte"
  | "Cuiseur à riz"
  | "Four"
  | "Casserole"
  | "Poêle à crêpe"
  | "Sauteuse"
  | "Mixer"
  | "Poêle"
  | "Moule à charlotte";

export type {
  RecipesType,
  RecipeType,
  IngredientInfoType,
  UstensilType,
  ApplianceType,
};
