import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from './App'

import { createStore } from "redux"
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
