// Imports
import { buildFilters } from "../components/recipeFilters";
import { updateTotalNumberOfRecipes } from "../components/recipesTotalNumber";
import { createRecipeList } from "../components/recipeCard";

// Types
import { GlobalStateType } from "../types/storeTypes";
import { RecipesType } from "../types/recipeTypes";
import { ActionType, FilterInfoType } from "../types/filterTypes";

// Services
import { getRecipes } from "../services/apiHandler";

/**
 * Global State
 */
let globalState: GlobalStateType = {
  recipes: [],
  filters: [],
  query: null,
};

/**
 * @function
 * @description Reset global state
 *
 * @returns {void}
 */
function resetGlobalState(): void {
  globalState = { recipes: [], filters: [], query: null };
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
  buildFilters(globalState.recipes);
  updateTotalNumberOfRecipes(globalState.recipes);

  createRecipeList(globalState.recipes);
}

/**
 * @function
 * @description Reset the values of filters.
 *
 * @returns {void}
 */
function resetFilters(): void {
  globalState.filters = [];
}

/**
 * @function
 * @description Modify the values of the filters in the global state.
 *
 * @param {FiltersType} filter A given filter
 * @returns {void}
 */
function updateFilters(action: ActionType, filter: FilterInfoType): void {
  switch (action) {
    case "add":
      globalState.filters.push(filter);
      break;
    case "remove":
      const newFiltersArray = globalState.filters.filter(
        (item) => !(item.type === filter.type && item.tag === filter.tag)
      );

      globalState.filters = newFiltersArray;
      break;
    default:
      break;
  }
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
  resetFilters,
  updateFilters,
  resetQuery,
  updateQuery,
};
