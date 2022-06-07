import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS
import "./index.css";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import AppMenu from "./layouts/AppMenu";
import Register from "./views/Register";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Admin from "./views/Admin";

const TITLE = "Resumy";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppMenu type="app" title={TITLE}>
                <App />
              </AppMenu>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/admin/*"
            element={
              <AppMenu type="admin" title={"Dashboard"}>
                <Admin />
              </AppMenu>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
