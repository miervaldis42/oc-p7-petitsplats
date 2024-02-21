// Imports
import { updateTotalNumberOfRecipes } from "../components/recipesTotalNumber";
import { createRecipeList } from "../components/recipeCard";

// Types
import { GlobalStateType } from "../types/storeTypes";
import { RecipesType } from "../types/recipeTypes";

// Services
import { getRecipes } from "../services/apiHandler";

/**
 * Global State
 */
let globalState: GlobalStateType = {
  recipes: [],
  query: null,
};

/**
 * @function
 * @description Reset global state
 *
 * @returns {void}
 */
function resetGlobalState(): void {
  globalState = { recipes: [], query: null };
}

/**
 * @function
 * @description Populate the global state recipes property with the mock data
 *
 * @returns {void}
 */
function updateListWithOriginalRecipes(): void {
  const originalRecipes = getRecipes("development");
  globalState.recipes = originalRecipes;

  resetQuery();

  updateUI();
}

/**
 * @function
 * @description Modify the recipes in the global state with a given array
 *
 * @param {RecipesType} newRecipeList
 * @returns {void}
 */
function updateRecipeList(newRecipeList: RecipesType): void {
  globalState.recipes = newRecipeList;

  updateUI();
}

/**
 * @function
 * @description Update the total number of recipe text & create the cards based on a recipe list from the Store
 *
 * @return {void}
 */
function updateUI(): void {
  updateTotalNumberOfRecipes(globalState.recipes);

  createRecipeList(globalState.recipes);
}

/**
 * @function
 * @description Set to initial values the query property
 *
 * @returns {void}
 */
function resetQuery(): void {
  globalState.query = null;
}

/**
 * @function
 * @description Set query to a given value
 *
 * @returns {void}
 */
function updateQuery(newQueryValue: string): void {
  globalState.query = newQueryValue;
}

export {
  globalState,
  resetGlobalState,
  updateListWithOriginalRecipes,
  updateRecipeList,
  resetQuery,
  updateQuery,
};
