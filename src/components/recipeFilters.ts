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

// The 3 types of filters
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
 * @returns {void}
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
    const tagContainer = document.getElementById(`${type}TagContainer`);

    /**
     * @function
     * @description Check if the given tag is already listed in the tag container
     *
     * @param {string} tagText
     * @returns {boolean}
     */
    function checkIfATagIsAlreadyListed(tagText: string): boolean {
      let tagExists = false;

      if (tagContainer !== null) {
        const tags = tagContainer.querySelectorAll("p");

        tags.forEach((tag) => {
          if (tag.innerHTML.trim() === tagText) {
            tagExists = true;
          }
        });
      }

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
      const optionValue = (event.target as HTMLElement).innerText;
      const tagAlreadyExists = checkIfATagIsAlreadyListed(optionValue);

      if (tagAlreadyExists === false) {
        const newTag = `<div
                  aria-label="Tag '${optionValue}' du filtre 'Ingrédients'"
                  class="h-12 w-full flex justify-between items-center bg-primary rounded-md py-4 px-[18px] mb-2"
                >
                  <p class="font-text">${optionValue}</p>
                  <button
                    id="${type}TagDeleteButton"
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
        tagContainer!.insertAdjacentHTML("beforeend", newTag);
      }
    }

    // Add click event listeners to each <p> element
    filterOptions.forEach((option) => {
      option.addEventListener("click", createTag);
    });
  });
}

export {
  extractUniqueValuesForFilters,
  buildFilters,
  toggleDropdown,
  addFilterTag,
};
