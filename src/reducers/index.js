import { combineReducers } from "redux";
import logReducer from "./logReducer";

// State level objects
export default combineReducers({
  log: logReducer,
});
