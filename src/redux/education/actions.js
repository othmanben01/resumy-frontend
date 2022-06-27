import { authHttpClient as axios } from "../../config/axios";
import {
  GET_EDUCATIONS,
  GET_EDUCATION,
  CREATE_EDUCATION,
  EDIT_EDUCATION,
  DELETE_EDUCATION,
} from "./types";
import { toast } from "react-toastify";

const END_POINTS = "admin/educations";

export const getEducations = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${END_POINTS}/`);

    dispatch({
      type: GET_EDUCATIONS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getEducation = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${END_POINTS}/${id}/`);

    // Get education
    dispatch({
      type: GET_EDUCATION,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const createEducation = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${END_POINTS}/`, payload);

    // Get education
    dispatch({
      type: CREATE_EDUCATION,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const editEducation = (payload) => async (dispatch) => {
  const { id, data } = payload;
  try {
    const { _data } = await axios.put(`${END_POINTS}/${id}/`, data);
    // Get education
    dispatch({
      type: EDIT_EDUCATION,
      payload: _data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const deleteEducation = (payload) => async (dispatch) => {
  try {
    await axios.delete(`${END_POINTS}/${payload}/`);

    // Get education
    dispatch({
      type: DELETE_EDUCATION,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};
