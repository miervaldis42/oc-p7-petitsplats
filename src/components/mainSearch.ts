// Imports
import { filterByTag } from "./recipeFilters";

// Store
import {
  updateListWithOriginalRecipes,
  resetQuery,
  updateQuery,
  updateRecipeList,
  globalState,
} from "../data/store";

// Types
import { RecipesType } from "../types/recipeTypes";

/**
 * @function
 * @description Search the query entered by the user among the recipes
 *
 * @param {RecipesType} recipes
 */
function handleMainSearchbar(recipes: RecipesType) {
  const mainSearchInput = document.getElementById("q") as HTMLInputElement;
  const mainSearchbarSearchButton = document.getElementById(
    "searchButtonCTA"
  ) as HTMLButtonElement;
  const mainSearchbarClearButton = document.getElementById(
    "searchButtonClear"
  ) as HTMLButtonElement;

  const search = () => {
    // Get user query & basically sanitize it
    const query = mainSearchInput.value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .toLowerCase();

    if (query.length >= 3) {
      handleMainSearchbarClearButton(
        false,
        mainSearchbarClearButton,
        mainSearchInput
      );

      updateQuery(query);

      // Main Search funtionality
      const filteredRecipes = searchUsingArrayMethods(recipes, query);

      // Update the total number of recipes suggested
      updateRecipeList(filteredRecipes);
    } else {
      handleMainSearchbarClearButton(
        true,
        mainSearchbarClearButton,
        mainSearchInput
      );

      // Display the original recipe list
      resetQuery();
      updateListWithOriginalRecipes();

      if (globalState.filters.length > 0) {
        filterByTag(globalState.recipes, globalState.filters);
      }
    }
  };

  // Search through recipe when one of the following events
  document.addEventListener("keydown", function (event) {
    // Check if Ctrl + K is pressed
    if (event.ctrlKey && event.key === "k") {
      // Prevent the default action of the Ctrl + K combination (e.g., opening browser's search bar)
      event.preventDefault();

      // Focus on the search bar
      mainSearchInput.focus();
    }
  });
  mainSearchInput.addEventListener("input", search);
  mainSearchbarSearchButton.addEventListener("click", search);
}

/**
 * @function
 * @description Create a new list of recipes based on the user query using Array methods.
 *
 * @param recipes A given list of recipes
 * @returns {RecipesType} A filtered list of recipes
 */
function searchUsingArrayMethods(
  recipes: RecipesType,
  query: string
): RecipesType {
  const filteredRecipes = recipes.filter((recipe) => {
    const matchTitle = recipe.name.toLowerCase().includes(query);
    const matchIngredients = recipe.ingredients.some((ingredientInfo) => {
      return ingredientInfo.ingredient.toLowerCase() === query.toLowerCase();
    });
    const matchDescription = recipe.description.toLowerCase().includes(query);

    return matchTitle || matchIngredients || matchDescription;
  });

  return filteredRecipes;
}

/**
 * @function
 * @description Handle the functionalities of the main searchbar 'Clear' button.
 *
 * @param {boolean} isActive Display state of the button
 * @param {HTMLButtonElement} button Main searchbar 'Clear' button
 * @param input Main searchbar
 *
 * @returns {void}
 */
function handleMainSearchbarClearButton(
  isActive: boolean,
  button: HTMLButtonElement,
  input: HTMLInputElement
): void {
  if (isActive) {
    // Hide the main search 'Clear' button
    button.classList.add("invisible");
  } else {
    // Display & handle the main search 'Clear' button
    button.classList.remove("invisible");

    button.addEventListener("click", () => {
      input.value = "";

      // Hide the main search 'Clear' button
      button.classList.add("invisible");

      // Display the original recipe list
      resetQuery();
      updateListWithOriginalRecipes();

      if (globalState.filters.length > 0) {
        filterByTag(globalState.recipes, globalState.filters);
      }
    });
  }
}

export { handleMainSearchbar, searchUsingArrayMethods };
