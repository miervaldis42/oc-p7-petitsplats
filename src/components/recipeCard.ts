// Imports
import { RecipesType, RecipeType } from "../types/recipeTypes";

function createRecipeList(recipes: RecipesType) {
  const recipeListContainer = document.getElementById("recipeListContainer");
  if (recipes.length > 0) {
    recipes.forEach((recipe) => {
      const cardHTML = createRecipeCard(recipe);

      if (recipeListContainer !== null) {
        recipeListContainer.insertAdjacentHTML("beforeend", cardHTML);
      }
    });
  }
}

// Function to create a recipe card
function createRecipeCard(recipe: RecipeType) {
  const card = `
    <article class="relative h-[731px] w-[380px]  overflow-hidden bg-white rounded-lg shadow-lg">

        <!-- Recipe duration -->
        <div class="absolute top-5 right-5 z-[2] h-7 w-16 flex justify-center items-center bg-primary rounded-full ">${
          recipe.time
        }mins</div>

        <!-- Recipe Photo -->
        <div class="relative overflow-hidden h-[252px] bg-cover">
            <img src="/src/data/recipes/photos/Recette${
              recipe.id < 10 ? `0${recipe.id}` : recipe.id
            }.webp" alt="${
    recipe.name
  }" class="absolute h-full w-full object-cover" />
        </div>

        <h2 class="font-heading my-8 mx-6">${recipe.name}</h2>

        <!-- Recipe Content -->
        <div class="flex flex-col mx-6">

            <!-- Recipe -->
            <section class="h-[112px] flex flex-col">
                <h3 class="h-fit w-fit font-text size-3 font-bold text-grey tracking-[2px] mb-4">RECETTE</h3>
                <p class="max-h-full overflow-hidden text-justify text-pretty line-clamp-3 text-ellipsis">${
                  recipe.description
                }</p>
            </section>

            <!-- Ingredient List -->
            <section class="mt-8">
                <h3 class="h-fit w-fit font-text size-3 uppercase font-bold text-grey tracking-[2px] mb-4">Ingrédients</h3>

                <div class="grid grid-cols-2 gap-y-4">
                    ${recipe.ingredients
                      .map(
                        (ingredient) => `
                        <div>
                            <p class="font-text font-medium">${
                              ingredient.ingredient
                            }</p>
                            ${
                              ingredient.quantity
                                ? `<p class="font-text text-grey">${
                                    ingredient.quantity
                                  } ${
                                    ingredient.unit ? ingredient.unit : ""
                                  }</p>`
                                : ""
                            }
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </section>            
        </div>
    </article>
  `;

  return card;
}

export { createRecipeList };
