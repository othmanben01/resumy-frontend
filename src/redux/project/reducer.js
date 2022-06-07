import {
  GET_PROJECTS,
  GET_PROJECT,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "./types";

const initialState = {
  projects: null,
  project: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };

    case GET_PROJECT:
    case EDIT_PROJECT:
    case CREATE_PROJECT:
      return {
        ...state,
        project: payload,
      };

    case DELETE_PROJECT:
      return {
        ...state,
        project: null,
      };

    default:
      return state;
  }
};

export default reducer;
