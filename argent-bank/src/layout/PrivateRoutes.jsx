import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { user } = useSelector((state) => state.auth);

  return user ? children : <Navigate to="/signin" />;
}

export default PrivateRoutes;
