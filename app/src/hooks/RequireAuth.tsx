// src/hooks/RequireAuth.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const RequireAuth = () => {
    const { user, loading, role } = useAuth();

    if (loading) return <p className="p-4">Require Auth...</p>;

    if (!user) return <Navigate to="/" />;

    if (role === "super_admin") return <Navigate to="/admin" />;
    if (role === "job_seeker" || role === "job_poster") return <Navigate to="/app" />;

    return <Navigate to="/" />;
};

export default RequireAuth;