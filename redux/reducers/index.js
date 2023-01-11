import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

let reducers = combineReducers({ //* maps reducers to corresponding one 
  cartReducer: cartReducer,
});

const rootReducer = (state, action) => { //able to access the global statte
  return reducers(state, action);
};

export default rootReducer;
