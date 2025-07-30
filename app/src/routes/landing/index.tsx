// src/routes/landing/index.tsx
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const LandingRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    );
};

export default LandingRoutes;