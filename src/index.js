import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from './App'

import { createStore } from "redux"
import { Provider } from 'react-redux'
import counterReducer from './app/reducer'

const history = createStore(
  counterReducer,
  { history: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

history.subscribe(() => console.log(history.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={history}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
