import { createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}

//creating redux store
//rootreducer is reducer
//nitiate state rep the initialstate of store
//holds the application's state and provides methods for updating and accessing that state.
//configure ->  dispatch actions and access the current state.