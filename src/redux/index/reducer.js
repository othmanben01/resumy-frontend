import {
  GET_PROFILES,
  GET_PROFILE,
  GET_EDUCATIONS,
  GET_EDUCATION,
  GET_EMPLOYMENTS,
  GET_EMPLOYMENT,
  GET_PROJECTS,
  GET_PROJECT,
} from "./types";

const initialState = {
  profiles: null,
  profile: null,
  educations: null,
  education: null,
  employments: null,
  employment: null,
  projects: null,
  project: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case GET_EDUCATIONS:
      return {
        ...state,
        educations: payload,
      };
    case GET_EDUCATION:
      return {
        ...state,
        education: payload,
      };

    case GET_EMPLOYMENTS:
      return {
        ...state,
        employments: payload,
      };
    case GET_EMPLOYMENT:
      return {
        ...state,
        employment: payload,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
      };

    default:
      return state;
  }
};

export default reducer;
