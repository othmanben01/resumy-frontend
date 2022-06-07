import { combineReducers } from "redux";
import iamReducer from "./iam/reducer";
import profileReducer from "./profile/reducer";
import educationReducer from "./education/reducer";
import employmentReducer from "./employment/reducer";
import projectReducer from "./project/reducer";
import indexReducer from "./index/reducer";

const rootReducer = combineReducers({
  iam: iamReducer,
  index: indexReducer,
  profiles: profileReducer,
  educations: educationReducer,
  employments: employmentReducer,
  projects: projectReducer,
});

export default rootReducer;
