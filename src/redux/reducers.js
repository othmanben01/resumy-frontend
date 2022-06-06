import { combineReducers } from "redux";
import iamReducer from "./iam/reducer";
import profileReducer from "./profile/reducer";

const rootReducer = combineReducers({
  iam: iamReducer,
  profiles: profileReducer,
});

export default rootReducer;
