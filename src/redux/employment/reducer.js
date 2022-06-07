import {
  GET_EMPLOYMENTS,
  GET_EMPLOYMENT,
  CREATE_EMPLOYMENT,
  EDIT_EMPLOYMENT,
  DELETE_EMPLOYMENT,
} from "./types";

const initialState = {
  employments: null,
  employment: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYMENTS:
      return {
        ...state,
        employments: payload,
      };

    case GET_EMPLOYMENT:
    case EDIT_EMPLOYMENT:
    case CREATE_EMPLOYMENT:
      return {
        ...state,
        employment: payload,
      };

    case DELETE_EMPLOYMENT:
      return {
        ...state,
        employment: null,
      };

    default:
      return state;
  }
};

export default reducer;
