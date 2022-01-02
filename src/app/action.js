export const addRecipe = (recipe) => {
  return {
    type: "ADD_RECIPE",
    payload: recipe
  };
}

export const removeRecipe = (recipe) => {
  return {
    type: "REMOVE_RECIPE",
    payload: recipe
  };
};