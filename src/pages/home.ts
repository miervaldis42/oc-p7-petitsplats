// Imports
// import { updateTotalNumberOfRecipes } from "../components/recipesTotalNumber";
import { createRecipeList } from "../components/recipeCard";

// Services
import { getRecipes } from "../services/apiHandler";

// Data
const recipes = getRecipes("development");

/*
  Generate data for the page
*/

// Filter Section
// updateTotalNumberOfRecipes(recipes);

// Recipe List
createRecipeList(recipes);
