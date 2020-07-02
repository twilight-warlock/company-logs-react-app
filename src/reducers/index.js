import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

// State level objects
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
