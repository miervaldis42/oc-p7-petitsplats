/**
 * @function
 * @description Display a message when no recipe matchs the user query
 *
 * @param {string} query Entered by the user through the main searchbar
 * @returns {void}
 */
function displayNoMatchedRecipeErrorMessage(query: string): void {
  const recipeListContainer = document.getElementById(
    "recipeListContainer"
  ) as HTMLDivElement;

  const noRecipeMatchedMessage = `<div class="w-full flex flex-col items-center">
      <img src="/src/assets/teapot.png" alt="Teapot icons created by Smashicons - Flaticon" class="h-52" />
      <p class="text-center italic font-text leading-loose"><span class="uppercase font-bold">Oh my teapot !</span><br/> Aucune des recettes de nos livres de cuisine ne contient <span class="font-bold">"${query}"</span>.<br/>Cependant, vous pouvez rechercher "poisson" ou "tarte" pour découvrir de succulentes recettes !</p>
    </div>`;
  recipeListContainer.innerHTML = noRecipeMatchedMessage;
}

export { displayNoMatchedRecipeErrorMessage };
