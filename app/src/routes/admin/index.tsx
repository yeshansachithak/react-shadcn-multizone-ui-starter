// src/routes/admin/index.tsx
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ManageSurvey from "./pages/ManageSurvey";
import ComponentShowcase from "./pages/ComponentShowcase";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="manage-survey" element={<ManageSurvey />} />
            <Route path="components-showcase" element={<ComponentShowcase />} />
        </Routes>
    );
};

export default AdminRoutes;
