import {
  GET_PROFILES,
  GET_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  DELETE_PROFILE,
} from "./types";

const initialState = {
  profiles: null,
  profile: null,
  error: null,
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
    case EDIT_PROFILE:
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case DELETE_PROFILE:
      return {
        ...state,
        profile: null,
      };

    default:
      return state;
  }
};

export default reducer;
