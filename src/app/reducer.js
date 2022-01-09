//Reducer describe how the store change. It is the function that contain the real logic.
const counterReducer = (state, action) => {
  
  let oldHistory;
  let stateObj = {
    ...state,
    history: [...state.history],
  };

  switch (action.type) {

    case "ADD_RECIPE":

      oldHistory = stateObj.history.filter((item) => item.id !== action.payload.id)
      
      return {
        ...state,
        history: oldHistory.concat([action.payload]).reverse(), //TODO IL REVERSE FUNZIONA A CAZZO, CAPISCI PERCHE'
      };

    case "REMOVE_RECIPE":


        oldHistory = stateObj.history.filter(
          (item) => item.id !== action.payload.id
        );

        return {
          ...state,
          history: oldHistory
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

export default counterReducer