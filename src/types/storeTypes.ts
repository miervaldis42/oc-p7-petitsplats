// Types
import { RecipesType } from "./recipeTypes";

/**
 * Store Types
 */
interface GlobalStateType {
  recipes: RecipesType;
  query: string | null;
}

export type { GlobalStateType };
