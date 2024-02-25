// Types
import { RecipesType } from "./recipeTypes";
import { FilterInfoType } from "./filterTypes";

/**
 * Store Types
 */
interface GlobalStateType {
  recipes: RecipesType;
  filters: Array<FilterInfoType>;
  query: string | null;
}

export type { GlobalStateType };
