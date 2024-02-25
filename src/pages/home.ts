// Imports
import { handleMainSearchbar } from "../components/mainSearch";
import { toggleDropdown } from "../components/recipeFilters";

// Store
import { globalState, updateListWithOriginalRecipes } from "../data/store";

/**
 * Home Page
 */

// Initialize data
updateListWithOriginalRecipes();

// Main search
handleMainSearchbar(globalState.recipes);

// Filter Section
toggleDropdown();
