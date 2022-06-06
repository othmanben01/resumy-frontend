import axios from "../../config/axios";
import {
  GET_PROFILES,
  GET_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  DELETE_PROFILE,
} from "./types";

const END_POINTS = "admin/profiles";

export const getProfiles = () => async (dispatch) => {
  try {
    // Get access_token
    const { data } = await axios.get(END_POINTS);

    // Get all posts
    dispatch({
      type: GET_PROFILES,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${END_POINTS}/${id}/`);

    // Get profile
    dispatch({
      type: GET_PROFILE,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const createProfile = (payload) => async (dispatch) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };

  try {
    const { data } = await axios.post(`${END_POINTS}/`, payload, config);

    // Get profile
    dispatch({
      type: CREATE_PROFILE,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const editProfile = (payload) => async (dispatch) => {
  const { id, data } = payload;

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  try {
    const { _data } = await axios.put(`${END_POINTS}/${id}/`, data, config);

    // Get profile
    dispatch({
      type: EDIT_PROFILE,
      payload: _data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteProfile = (payload) => async (dispatch) => {
  try {
    await axios.delete(`${END_POINTS}/${payload}/`);

    // Get profile
    dispatch({
      type: DELETE_PROFILE,
    });
  } catch (err) {
    console.error(err);
  }
};
