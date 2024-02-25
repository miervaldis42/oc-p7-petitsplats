// Imports
import { ApplianceType, UstensilType } from "./recipeTypes";

/**
 * @type
 * @description List of possible ingredients present in the recipes to be used as options in the 'Ingredients' filter
 */
type IngredientFilterOptionsType = Array<string>;

/**
 * @type
 * @description List of possible appliances present in the recipes to be used as options in the 'Appliances' filter
 */
type ApplianceFilterOptionsType = Array<ApplianceType>;

/**
 * @type
 * @description List of possible ustensils present in the recipes to be used as options in the 'Ustensils' filter
 */
type UstensilFilterOptionsType = Array<UstensilType>;

type FilterOptionValueType = ApplianceType | UstensilType | string;

/**
 * @type
 * @description Object containing the arrays which will be used as options in the 3 recipe filters _(ingredients, appliances, ustensils)_
 *
 * @property {IngredientFilterOptionsType} ingredientsOptions
 * @property {ApplianceFilterOptionsType} appliancesOptions
 * @property {UstensilFilterOptionsType} ustensilsOptions
 */
interface FilterOptionsType {
  ingredientsOptions: IngredientFilterOptionsType;
  appliancesOptions: ApplianceFilterOptionsType;
  ustensilsOptions: UstensilFilterOptionsType;
}

type FilterType = "ingredient" | "appliance" | "ustensil";
type FiltersType = Array<FilterType>;

type ActionType = "add" | "remove";
interface FilterInfoType {
  type: FilterType;
  tag: ApplianceType | UstensilType | string;
}

export type {
  IngredientFilterOptionsType,
  ApplianceFilterOptionsType,
  UstensilFilterOptionsType,
  FilterOptionValueType,
  FilterOptionsType,
  FilterType,
  FiltersType,
  ActionType,
  FilterInfoType,
};
