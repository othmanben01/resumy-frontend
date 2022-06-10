import axios from "axios";
import { BASE_URL, ACCESS_TOKEN, REFRESH_TOKEN } from "./config";

const authHttpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem(ACCESS_TOKEN)
      ? "Bearer " + localStorage.getItem(ACCESS_TOKEN)
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

authHttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === BASE_URL + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    // console.log(originalRequest);
    // console.log(error.response.status);
    // console.log(error.response.data.detail.code);

    if (
      error.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return authHttpClient
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem(ACCESS_TOKEN, response.data.access);
              localStorage.setItem(REFRESH_TOKEN, response.data.refresh);

              authHttpClient.defaults.headers["Authorization"] =
                "Bearer " + response.data.access;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.access;

              return authHttpClient(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login/";
      }
    }
    if (error.response.status === 401) {
      window.location.href = "/login/";
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }

    // console.log(originalRequest.url);
    // if (error.response.status >= 400 && error.response.status < 500) {
    //   window.location.href = "/not-found/";
    // }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export { authHttpClient, httpClient };
