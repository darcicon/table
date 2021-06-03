import { createStore } from "redux";
import { combineReducers } from "redux";
import { RegisterReducer } from "./RegisterReducer";

const rootReducer = combineReducers({
  register: RegisterReducer,
});

const store = createStore(rootReducer);
export { store };
