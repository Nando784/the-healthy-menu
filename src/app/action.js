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

export const addDietary = (diet) => {
  return{
    type:"ADD_DIET",
    payload: diet
  }
}

export const removeDietary = (diet) => {
  return {
    type: "REMOVE_DIET",
    payload: diet,
  };
};

export const addIntolerance = (intolerance) => {
  return {
    type: "ADD_INTOLERANCE",
    payload: intolerance,
  };
};

export const removeIntolerance = (intolerance) => {
  return {
    type: "REMOVE_INTOLERANCE",
    payload: intolerance,
  };
};