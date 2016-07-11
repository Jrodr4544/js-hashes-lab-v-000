'use strict';

var recipe = {ingredient: "amount"}

function addIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function readRecipe(recipe) {
  for (var variable in recipe) {
    console.log("this recipe calls for "+recipe[variable]+" of "+variable);
  }
}