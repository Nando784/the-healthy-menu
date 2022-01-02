//Reducer describe how the store change. It is the function that contain the real logic.
const counterReducer = (state, action) => {
  switch (action.type) {

    case "ADD_RECIPE":

      console.log(action.payload);

      let obj = {
        ...state,
        history: [...state.history,action.payload]
      }

      let oldHistory = obj.history
//TODO CONTINUA A SISTEMARE DOMANI CHE SONO FINITE LE RICHIESTE BUTTANA LA MISERIA
      console.log("Minchia funziona => " + obj.history[0].id);

      return{
        ...state,
        history: [...state.history,action.payload]
      }

    case "REMOVE_RECIPE":
      return state.pop;

    default:
      return state;
  }
};

export default counterReducer