import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const loggedIn = localStorage.getItem("token") !== null;
  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute;