// Store
import { updateListWithOriginalRecipes, resetQuery } from "../data/store";

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
      updateListWithOriginalRecipes();
      resetQuery();
    });
  }
}
