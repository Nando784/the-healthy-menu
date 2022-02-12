const historyReducer = (state = { history: [] }, action) => {
  let oldHistory;
  let stateObj = {
    ...state,
    history: [...state.history],
  };

  switch (action.type) {
    case "ADD_RECIPE":
      oldHistory = stateObj.history.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        history: oldHistory.concat([action.payload]).reverse(),
      };

    case "REMOVE_RECIPE":
      oldHistory = stateObj.history.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        history: oldHistory,
      };

    case "REMOVE_ALL_RECIPES":
      return {
        ...state,
        history: [],
      };

    default:
      return state;
  }
};

export default historyReducer;
