import { authHttpClient as axios } from "../../config/axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../config/config";
import { toast } from "react-toastify";

const END_POINTS = {
  REGISTER: "/iam/create/",
  LOGIN: "token/",
  LOGOUT: "iam/logout/blacklist/",
};

export const register = (payload, navigate) => async (dispatch) => {
  console.log("Registering the user on the backend");

  try {
    // Remove tokens
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    axios.defaults.headers["Authorization"] = null;
    console.log(payload);
    // Register the user
    await axios.post(END_POINTS.REGISTER, payload);

    navigate("/login");
  } catch (err) {
    console.log(err);
    toast.error("email has already been registered");
  }
};

export const login = (payload, navigate) => async (dispatch) => {
  console.log("Login the user on the backend");

  try {
    // Login the user
    const {
      data: { access, refresh },
    } = await axios.post(END_POINTS.LOGIN, payload);

    localStorage.setItem(ACCESS_TOKEN, access);
    localStorage.setItem(REFRESH_TOKEN, refresh);
    axios.defaults.headers["Authorization"] =
      "Bearer " + localStorage.getItem(ACCESS_TOKEN);

    navigate("/admin/profiles");
  } catch (err) {
    console.error(err.response);
    toast.error(err.response.data.fallback_message);
  }
};

export const logout = (navigate) => async (dispatch) => {
  console.log("Logout the user on the backend");

  try {
    // Logout the user and adding refresh token to blacklist
    if (!localStorage.getItem(REFRESH_TOKEN)) return navigate("/login");

    await axios.post(END_POINTS.LOGOUT, {
      refresh_token: localStorage.getItem(REFRESH_TOKEN),
    });

    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    axios.defaults.headers["Authorization"] = null;

    navigate("/login");
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.fallback_message);
  }
};
