import { authHttpClient as axios } from "../../config/axios";
import {
  GET_EMPLOYMENTS,
  GET_EMPLOYMENT,
  CREATE_EMPLOYMENT,
  EDIT_EMPLOYMENT,
  DELETE_EMPLOYMENT,
} from "./types";
import { toast } from "react-toastify";

const END_POINTS = "admin/employments";

export const getEmployments = () => async (dispatch) => {
  try {
    const { data } = await axios.get(END_POINTS);

    dispatch({
      type: GET_EMPLOYMENTS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getEmployment = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${END_POINTS}/${id}/`);

    // Get employment
    dispatch({
      type: GET_EMPLOYMENT,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const createEmployment = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${END_POINTS}/`, payload);

    // Get employment
    dispatch({
      type: CREATE_EMPLOYMENT,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const editEmployment = (payload) => async (dispatch) => {
  const { id, data } = payload;
  try {
    const { _data } = await axios.put(`${END_POINTS}/${id}/`, data);
    // Get employment
    dispatch({
      type: EDIT_EMPLOYMENT,
      payload: _data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const deleteEmployment = (payload) => async (dispatch) => {
  try {
    await axios.delete(`${END_POINTS}/${payload}/`);

    // Get employment
    dispatch({
      type: DELETE_EMPLOYMENT,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};
