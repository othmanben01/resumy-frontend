import { combineReducers } from "redux";
import iamReducer from "./iam/reducer";

const rootReducer = combineReducers({
  iam: iamReducer,
});

export default rootReducer;
