import { httpClient as axios } from "../../config/axios";
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
import { toast } from "react-toastify";

const PROFILE_END_POINTS = "profiles";
const EDUCATION_END_POINTS = "educations";
const EMPLOYMENT_END_POINTS = "employments";
const PROJECT_END_POINTS = "projects";

export const getProfiles = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${PROFILE_END_POINTS}`);

    dispatch({
      type: GET_PROFILES,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${PROFILE_END_POINTS}/${id}/`);

    // Get education
    dispatch({
      type: GET_PROFILE,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getEducations = (profile_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${profile_id}/${EDUCATION_END_POINTS}/`);

    // Get education
    dispatch({
      type: GET_EDUCATIONS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getEmployments = (profile_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${profile_id}/${EMPLOYMENT_END_POINTS}/`);

    // Get education
    dispatch({
      type: GET_EMPLOYMENTS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getProjects = (profile_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${profile_id}/${PROJECT_END_POINTS}/`);

    // Get education
    dispatch({
      type: GET_PROJECTS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};
