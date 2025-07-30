import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { type JSX } from "react";
import LoadingSpinner from "@/widgets/LoadingSpinner";

type ProtectedRouteProps = {
  allowedRoles: string[];
  children: JSX.Element;
};

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { user, role, loading } = useAuth();

  // console.log('ProtectedRoute : user, role :: ', user, role);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }
  
  if (!user || !allowedRoles.includes(role || "")) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
