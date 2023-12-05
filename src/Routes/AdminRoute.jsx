import React from "react";
import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Spinner from "../components/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
