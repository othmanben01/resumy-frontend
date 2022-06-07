import axios from "../../config/axios";
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
    const { data } = await axios.get(PROFILE_END_POINTS);

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

export const getEducations = () => async (dispatch) => {
  try {
    const { data } = await axios.get(EDUCATION_END_POINTS);

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
    const { data } = await axios.get(`${EDUCATION_END_POINTS}/${id}/`);

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

export const getEmployments = () => async (dispatch) => {
  try {
    const { data } = await axios.get(EMPLOYMENT_END_POINTS);

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
    const { data } = await axios.get(`${EMPLOYMENT_END_POINTS}/${id}/`);

    // Get education
    dispatch({
      type: GET_EMPLOYMENT,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get(PROJECT_END_POINTS);

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
    const { data } = await axios.get(`${PROJECT_END_POINTS}/${id}/`);

    // Get education
    dispatch({
      type: GET_PROJECT,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};
