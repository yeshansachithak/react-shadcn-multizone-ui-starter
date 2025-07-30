import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import NotFound from "./auth/NotFound";
import ProtectedRoute from './hooks/ProtectedRoute.tsx';
import RequireAuth from './hooks/RequireAuth.tsx';

// Lazy imports for main entry points
import LandingRoutes from './routes/landing'
import AppRoutes from './routes/app'
import AdminRoutes from './routes/admin'

function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/*" element={<LandingRoutes />} />
      {/* Auth UI */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* Firebase Protected After Auth */}
      <Route path="/auth-check" element={<RequireAuth />} />
      <Route
        path="/admin/*"
        element={
          // <ProtectedRoute allowedRoles={["super_admin"]}>
            <AdminRoutes />
          // </ProtectedRoute>
        }
      />
      <Route
        path="/app/*"
        element={
          <ProtectedRoute allowedRoles={["user", "job_seeker", "job_poster"]}>
            <AppRoutes />
          </ProtectedRoute>
        }
      />
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
