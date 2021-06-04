import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { RegisterReducer } from "./RegisterReducer";

const rootReducer = combineReducers({
  register: RegisterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
