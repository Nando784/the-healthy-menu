/*
//Action is the function that describe what u are gonna do, he just return an object with the name of the action

const increment = () => {
  return{
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};


//Reducer describe how the store change. It is the function that contain the real logic.
const counter = (state = 0,action) => {
  switch(action.type){
    case 'INCREMENT': return state + 1;
    case 'DECREMENT' : return state - 1;

  }
}


//Store -> is the global state which contains all our data.
let store = createStore(counter);


//Display the store
store.subscribe(() => console.log(store.getState()))

//Dispatch the action to the store
store.dispatch(increment())
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());


*/
