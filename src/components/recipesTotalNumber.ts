// Types
import { RecipesType } from "../types/recipeTypes";

/**
 * @function
 * @description Display & Update the total number of recipes present in the recipe list.
 *
 * @param {RecipesType} recipes A list of recipes
 * @returns {void} Populate a span which indicates the total number of recipes displayed.
 */
function updateTotalNumberOfRecipes(recipes: RecipesType): void {
  const numberOfRecipes = recipes.length;

  const recipesNumber = document.getElementById(
    "totalNumberOfRecipes"
  ) as HTMLSpanElement;

  recipesNumber.innerText = numberOfRecipes.toString();
}

export { updateTotalNumberOfRecipes };
