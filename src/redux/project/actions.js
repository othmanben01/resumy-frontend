import axios from "../../config/axios";
import {
  GET_PROJECTS,
  GET_PROJECT,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "./types";
import { toast } from "react-toastify";

const END_POINTS = "admin/projects";

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get(END_POINTS);
    dispatch({
      type: GET_PROJECTS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getProject = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${END_POINTS}/${id}/`);
    // Get project
    dispatch({
      type: GET_PROJECT,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const createProject = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${END_POINTS}/`, payload);
    // Get project
    dispatch({
      type: CREATE_PROJECT,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const editProject = (payload) => async (dispatch) => {
  const { id, data } = payload;
  console.log(data);
  try {
    const { _data } = await axios.put(`${END_POINTS}/${id}/`, data);
    // Get project
    dispatch({
      type: EDIT_PROJECT,
      payload: _data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const deleteProject = (payload) => async (dispatch) => {
  try {
    await axios.delete(`${END_POINTS}/${payload}/`);
    // Get project
    dispatch({
      type: DELETE_PROJECT,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};
