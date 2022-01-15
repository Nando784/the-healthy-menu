const dietaryReducer = (state = { dietary: ["Vegetarian"] }, action) => {
  let oldDietary;
  let stateObj = {
    ...state,
    dietary: [...state.dietary],
  };

  switch (action.type) {
    case "ADD_DIET":
      return {
        ...state,
        dietary: oldDietary.concat([action.payload]),
      };

    case "REMOVE_DIET":
      if (stateObj.dietary.length === 1) {
        return oldDietary;
      }

      oldDietary = stateObj.dietary.filter((item) => item !== action.payload);

      return {
        ...state,
        dietary: oldDietary,
      };

    default:
      return state;
  }
};

export default dietaryReducer;
