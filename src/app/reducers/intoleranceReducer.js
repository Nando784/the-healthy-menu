const intoleranceReducer = (state = { intolerance: [] }, action) => {
  let oldIntolerance;
  let stateObj = {
    ...state,
    intolerance: [...state.intolerance],
  };

  switch (action.type) {
    case "ADD_INTOLERANCE":
      return {
        ...state,
        intolerance: oldIntolerance.concat([action.payload]),
      };

    case "REMOVE_INTOLERANCE":
      oldIntolerance = stateObj.intolerance.filter(
        (item) => item !== action.payload
      );

      return {
        ...state,
        intolerance: oldIntolerance,
      };

    default:
      return state;
  }
};

export default intoleranceReducer;
