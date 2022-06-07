import {
  GET_EDUCATIONS,
  GET_EDUCATION,
  CREATE_EDUCATION,
  EDIT_EDUCATION,
  DELETE_EDUCATION,
} from "./types";

const initialState = {
  educations: null,
  education: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EDUCATIONS:
      return {
        ...state,
        educations: payload,
      };

    case GET_EDUCATION:
    case EDIT_EDUCATION:
    case CREATE_EDUCATION:
      return {
        ...state,
        education: payload,
      };

    case DELETE_EDUCATION:
      return {
        ...state,
        education: null,
      };

    default:
      return state;
  }
};

export default reducer;
