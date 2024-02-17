// Imports
import recipes from "../data/recipes/mock-recipes";

// Types
import { EnvironmentType } from "../types/apiHandlerTypes";
import { RecipesType } from "../types/recipeTypes";

/**
 * @function
 * @description Retrieve a list of mock or real recipes based on the provided server type.
 *
 * @param {EnvironmentType} server Indicates if the server needs to be treated as in dev mode or in production.
 *
 * @returns {RecipesType} Data containing a list of recipes.
 */
function getRecipes(server: EnvironmentType): RecipesType {
  let data: RecipesType = [];
  if (server === "development") {
    data = recipes;
  }

  return data;
}

export { getRecipes };
