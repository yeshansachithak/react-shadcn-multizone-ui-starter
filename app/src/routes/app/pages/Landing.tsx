// src/routes/app/pages/Landing.tsx
import unifyitLogo from "@/assets/brand.png";
import { useAuth } from "@/context/AuthContext";

function Landing() {
    const { user, loading } = useAuth();
    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Unauthorized</p>;
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-amber-50 flex flex-col">
            {/* Top Nav */}
            <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
                <div className="flex items-center gap-2">
                    <img src={unifyitLogo} alt="UnifyIT Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-[#0097A7]">UnifyIT</span>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-5xl font-extrabold text-slate-800 mb-4">
                    Welcome, {user.email}
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                    (Admin) UnifyIT is the bridge between passionate professionals and dynamic companies. Whether you’re job seeking or hiring, we make connection effortless.
                </p>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 text-center text-slate-500 text-sm border-t">
                &copy; {new Date().getFullYear()} UnifyIT. All rights reserved.
            </footer>
        </div>
    );
}

export default Landing;