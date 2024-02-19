// Types
import {
  RecipeType,
  RecipesType,
  ApplianceType,
  UstensilType,
} from "../types/recipeTypes";

import {
  ApplianceFilterOptionsType,
  FiltersType,
  IngredientFilterOptionsType,
  UstensilFilterOptionsType,
} from "../types/filterTypes";

const filterTypes = ["ingredient", "appliance", "ustensil"];

/**
 * @function
 * @description Extract 3 arrays with unique values for ingredients, appliances & ustensils from a list of recipes.
 *
 * @param {RecipesType} recipes A given list of recipes
 *
 * @returns {FiltersType} An object containing three arrays.
 * @returns {IngredientFilterOptionsType} ingredientsOptions - The first array containing numbers.
 * @returns {ApplianceFilterOptionsType} appliancesOptions - The second array containing strings.
 * @returns {UstensilFilterOptionsType} ustensilsOptions - The third array containing booleans.
 */
function extractUniqueValuesForFilters(recipes: RecipesType): FiltersType {
  // Use `Set` to avoid getting any duplicate values
  const uniqueIngredients = new Set<string>();
  const uniqueAppliances = new Set<ApplianceType>();
  const uniqueUstensils = new Set<UstensilType>();

  // Loop into the recipe array to populate the sets
  recipes.forEach((recipe: RecipeType) => {
    recipe.ingredients.forEach((info) =>
      uniqueIngredients.add(info.ingredient)
    );
    uniqueAppliances.add(recipe.appliance);
    recipe.ustensils.forEach((ustensil) => uniqueUstensils.add(ustensil));
  });

  // Convert sets to arrays to easily loop into them
  const ingredientsList = Array.from(uniqueIngredients);
  const appliancesList = Array.from(uniqueAppliances);
  const ustensilsList = Array.from(uniqueUstensils);

  return {
    ingredientsOptions: ingredientsList,
    appliancesOptions: appliancesList,
    ustensilsOptions: ustensilsList,
  };
}

/**
 * @function
 * @description Construct filters based on recipe data.
 *
 * @param {RecipesType} recipes List of recipes.
 * @returns {void} Populate the recipe filters.
 */
function buildFilters(recipes: RecipesType): void {
  const filterOptionArrays: FiltersType =
    extractUniqueValuesForFilters(recipes);

  function populateOptions(
    optionsContainer: HTMLDivElement,
    items:
      | IngredientFilterOptionsType
      | ApplianceFilterOptionsType
      | UstensilFilterOptionsType
  ) {
    items.forEach((item) => {
      const option: HTMLParagraphElement = document.createElement("p");
      option.className =
        "font-text first-letter:uppercase py-[9px] pl-2 hover:bg-primary hover:cursor-pointer";
      option.textContent = item;
      optionsContainer.appendChild(option);
    });
  }

  filterTypes.forEach((type) => {
    const options = document.getElementById(`${type}Options`) as HTMLDivElement;
    const optionArray = `${type}sOptions`;

    populateOptions(options, (filterOptionArrays as any)[optionArray]);
  });
}

/**
 * @function
 * @description Toggle the filter dropdown content display.
 *
 * @returns {void}
 */
function toggleDropdown(): void {
  filterTypes.forEach((type) => {
    const filterDropdownButton = document.getElementById(
      `${type}sFilterDropdownButton`
    ) as HTMLButtonElement;

    const filterCaretDown = document.getElementById(
      `${type}sFilterCaretDown`
    ) as HTMLImageElement;
    const filterCaretUp = document.getElementById(
      `${type}sFilterCaretUp`
    ) as HTMLImageElement;

    const filterDropdownContent = document.getElementById(
      `${type}sFilterDropdownContent`
    ) as HTMLDivElement;

    // Actions when the user clicks on one of the filter buttons
    filterDropdownButton.addEventListener("click", (e) => {
      e.stopPropagation();

      const filterDropdownIsClosed =
        filterDropdownContent.classList.contains("hidden");
      if (filterDropdownIsClosed) {
        filterDropdownButton.classList.remove("rounded-md");
        filterDropdownButton.classList.add("rounded-t-md");

        filterCaretDown.classList.add("hidden");
        filterCaretUp.classList.remove("hidden");

        filterDropdownContent.classList.remove("hidden");
      } else {
        filterDropdownButton.classList.remove("rounded-t-md");
        filterDropdownButton.classList.add("rounded-md");

        filterCaretDown.classList.remove("hidden");
        filterCaretUp.classList.add("hidden");

        filterDropdownContent.classList.add("hidden");
      }
    });

    // When click outside of the filter area
    const filterDropdown = filterDropdownButton.parentNode;
    function handleClickOutsideOfDropdown(event: MouseEvent) {
      event.stopPropagation();

      if (
        filterDropdown !== null &&
        !filterDropdown.contains(event.target as Node)
      ) {
        filterDropdownButton.classList.remove("rounded-t-md");
        filterDropdownButton.classList.add("rounded-md");

        filterCaretDown.classList.remove("hidden");
        filterCaretUp.classList.add("hidden");

        filterDropdownContent.classList.add("hidden");
      }
    }

    document.addEventListener("click", handleClickOutsideOfDropdown);
  });
}

export { extractUniqueValuesForFilters, buildFilters, toggleDropdown };
