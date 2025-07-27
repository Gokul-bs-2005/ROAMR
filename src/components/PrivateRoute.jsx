// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let isLoggedIn = false;

  try {
    isLoggedIn = localStorage.getItem("loggedIn") === "true";
  } catch (error) {
    console.error("Error accessing localStorage", error);
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
