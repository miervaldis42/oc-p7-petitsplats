// Imports
import { searchUsingLoops } from "./mainSearch";

// Store
import {
  globalState,
  updateFilters,
  updateListWithOriginalRecipes,
  updateQuery,
  updateRecipeList,
} from "../data/store";

// Types
import {
  RecipeType,
  RecipesType,
  ApplianceType,
  UstensilType,
} from "../types/recipeTypes";

import {
  FilterOptionsType,
  FiltersType,
  FilterInfoType,
  IngredientFilterOptionsType,
  ApplianceFilterOptionsType,
  UstensilFilterOptionsType,
  FilterOptionValueType,
} from "../types/filterTypes";

// The 3 types of filters
const filterTypes: FiltersType = ["ingredient", "appliance", "ustensil"];

/**
 * @function
 * @description Extract 3 arrays with unique values for ingredients, appliances & ustensils from a list of recipes.
 *
 * @param {RecipesType} recipes A given list of recipes
 *
 * @returns {FilterOptionsType} An object containing three arrays.
 * @returns {IngredientFilterOptionsType} ingredientsOptions - The first array containing numbers.
 * @returns {ApplianceFilterOptionsType} appliancesOptions - The second array containing strings.
 * @returns {UstensilFilterOptionsType} ustensilsOptions - The third array containing booleans.
 */
function extractUniqueValuesForFilters(
  recipes: RecipesType
): FilterOptionsType {
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
 * @returns {void}
 */
function buildFilters(recipes: RecipesType): void {
  const filterOptionArrays: FilterOptionsType =
    extractUniqueValuesForFilters(recipes);

  filterTypes.forEach((type) => {
    const optionsContainer = document.getElementById(
      `${type}Options`
    ) as HTMLDivElement;
    const optionArray = `${type}sOptions`;

    populateOptions(optionsContainer, (filterOptionArrays as any)[optionArray]);
  });

  // Feature: Search among filters
  searchFilter(filterOptionArrays);
}

function populateOptions(
  optionsContainer: HTMLDivElement,
  optionNames:
    | IngredientFilterOptionsType
    | ApplianceFilterOptionsType
    | UstensilFilterOptionsType
) {
  // Empty the container to better populate it
  optionsContainer.innerHTML = "";

  optionNames.forEach((item) => {
    const option: HTMLParagraphElement = document.createElement("p");
    option.className =
      "font-text first-letter:uppercase py-[9px] pl-2 hover:bg-primary hover:cursor-pointer";
    option.textContent = item;
    optionsContainer.appendChild(option);
  });

  // Feature: Add filter tag
  addFilterTag();
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

/**
 * @function
 * @description Search feature of the filter searchbars.
 *
 * @param {FilterOptionsType} filterOptionArrays
 * @returns {void}
 */
function searchFilter(filterOptionArrays: FilterOptionsType): void {
  filterTypes.forEach((type) => {
    const optionsContainer = document.getElementById(
      `${type}Options`
    ) as HTMLDivElement;
    const optionArray = `${type}sOptions`;

    const searchbar = document.getElementById(
      `${type}Query`
    ) as HTMLInputElement;
    const searchbarButton = document.getElementById(
      `${type}sSearchButton`
    ) as HTMLButtonElement;
    const searchbarClearButton = document.getElementById(
      `${type}sClearSearchButton`
    ) as HTMLButtonElement;

    // Search among filters
    const searchAmongFilters = () => {
      const query = searchbar.value.toLowerCase();

      if (query !== null && query.trim().length > 3) {
        const options = (filterOptionArrays as any)[optionArray].filter(
          (optionName: string) => {
            return optionName.toLowerCase().includes(query.toLowerCase());
          }
        );
        populateOptions(optionsContainer, options);

        // Clear filter searchbar feature
        searchbarClearButton.classList.remove("invisible");
        searchbarClearButton.addEventListener("click", () => {
          // Empty the searchbar
          searchbar.value = "";

          // Make the 'clear' button invisible
          searchbarClearButton.classList.add("invisible");

          // Reset the filter list
          populateOptions(
            optionsContainer,
            (filterOptionArrays as any)[optionArray]
          );
        });
      } else {
        populateOptions(
          optionsContainer,
          (filterOptionArrays as any)[optionArray]
        );

        // Make the 'clear' button invisible
        searchbarClearButton.classList.add("invisible");
      }
    };

    searchbar.addEventListener("input", searchAmongFilters);
    searchbarButton.addEventListener("click", searchAmongFilters);
  });
}

/**
 * @function
 * @description Create a tag when the user clicks on one of the filter options.
 *
 * @returns {void}
 */
function addFilterTag(): void {
  filterTypes.forEach((type) => {
    // Get all filter options
    const filterOptions = document.querySelectorAll(`#${type}Options p`);

    // Get the container where buttons will be appended
    const tagContainer = document.getElementById(
      `${type}TagContainer`
    ) as HTMLDivElement;

    /**
     * @function
     * @description Check if the given tag is already listed in the tag container
     *
     * @param {string} tagText
     * @returns {boolean}
     */
    function checkIfATagIsAlreadyListed(tagText: string): boolean {
      let tagExists = false;

      const tags = tagContainer.querySelectorAll("p");
      tags.forEach((tag) => {
        if (tag.innerHTML.trim() === tagText) {
          tagExists = true;
        }
      });

      return tagExists;
    }

    /**
     * @function
     * @decription To create a tag with the same text as the clicked option
     *
     * @param {any} event Mouse event
     * @returns {void}
     */
    function createTag(event: any): void {
      const optionValue: FilterOptionValueType = (event.target as HTMLElement)
        .innerText;
      const tagAlreadyExists = checkIfATagIsAlreadyListed(optionValue);

      if (tagAlreadyExists === false) {
        updateFilters("add", { type, tag: optionValue });

        const newTagHTML = `<div
                  aria-label="Tag '${optionValue}' du filtre 'Ingrédients'"
                  class="h-12 w-full flex justify-between items-center bg-primary rounded-md py-4 px-[18px] mb-2"
                >
                  <p class="font-text">${optionValue}</p>
                  <button
                    aria-label="Permet de vider la barre de recherche liée aux ${type}s"
                    type="button"
                    class="group h-[22px] w-[22px] flex justify-center items-center focus:outline-primary hover:bg-black hover:rounded-full"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 17 17"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Icône du bouton permettant de supprimer ce filtre '${type}'"
                      class="h-[18px] w-[16px] group-hover:h-[8px] group-hover:w-[8px]"
                    >
                      <path
                        d="M15 15L8.5 8.5M8.5 8.5L2 2M8.5 8.5L15 2M8.5 8.5L2 15"
                        class="stroke-black stroke-[2] group-hover:stroke-primary"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>`;
        tagContainer.insertAdjacentHTML("beforeend", newTagHTML);

        // Filter & Update the recipe list
        filterByTag(globalState.recipes, [{ type, tag: optionValue }]);

        // Create the delete button of the filter tag
        const newTag = tagContainer.lastElementChild as HTMLDivElement;
        const deleteButton = newTag.querySelector(
          "button"
        ) as HTMLButtonElement;

        // Add click event listener to the delete button
        deleteButton.addEventListener("click", () => {
          updateFilters("remove", { type, tag: optionValue });

          // Use cases: Based on the content of the user query
          if (globalState.query === null) {
            updateListWithOriginalRecipes();

            if (globalState.filters.length > 0) {
              filterByTag(globalState.recipes, globalState.filters);
            }
          } else {
            // Reset the data with mock data
            updateListWithOriginalRecipes();

            // Get a new filtered recipe list based on user query
            const filteredByUserQueryRecipes = searchUsingLoops(
              globalState.recipes,
              globalState.query
            );

            // Filter if there is some filter tags
            if (globalState.filters.length === 0) {
              updateRecipeList(filteredByUserQueryRecipes);
            } else {
              filterByTag(filteredByUserQueryRecipes, globalState.filters);
            }
          }

          tagContainer.removeChild(newTag);
        });
      }
    }

    // Add click event listeners to each <p> element
    filterOptions.forEach((option) => {
      option.addEventListener("click", createTag);
    });
  });
}

/**
 * @function
 * @description Filter a given recipe list using the filters.
 *
 * @param {RecipesType} recipes
 * @param {Array<FilterInfoType>} filters
 *
 * @returns {void}
 */
function filterByTag(
  recipes: RecipesType,
  filters: Array<FilterInfoType>
): void {
  const filteredByTagRecipes = recipes.filter((recipe) => {
    let matchesAllTags = true;

    filters.forEach(({ type, tag }) => {
      let matchType = false;

      switch (type) {
        case "ingredient":
          matchType = recipe.ingredients.some(
            (ingredientInfo) =>
              tag.toLowerCase() === ingredientInfo.ingredient.toLowerCase()
          );
          break;
        case "appliance":
          matchType = recipe.appliance.toLowerCase() === tag.toLowerCase();
          break;
        case "ustensil":
          matchType = recipe.ustensils.some(
            (ustensil) => tag.toLowerCase() === ustensil.toLowerCase()
          );
          break;
        default:
          break;
      }

      // Only set matchesAllTags to false if none of the tags match
      if (!matchType) {
        matchesAllTags = false;
      }
    });

    return matchesAllTags;
  });

  if (filteredByTagRecipes.length === 0 && filters.length > 0) {
    filters.forEach((filter) => {
      updateQuery(filter.tag);
    });
  }

  updateRecipeList(filteredByTagRecipes);
}

export {
  extractUniqueValuesForFilters,
  buildFilters,
  toggleDropdown,
  addFilterTag,
  filterByTag,
};
