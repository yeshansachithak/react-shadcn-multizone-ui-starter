import unifyitLogo from "@/assets/brand.png";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-amber-50 flex flex-col">
            {/* Top Nav */}
            <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
                <div className="flex items-center gap-2">
                    <img src={unifyitLogo} alt="UnifyIT Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-[#0097A7]">UnifyIT</span>
                </div>
                <div className="space-x-4">
                    <Link to="/login" className="text-sm text-[#0097A7] hover:underline">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-sm bg-[#F4B400] text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* 404 Section */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-[7rem] font-bold text-[#0097A7]">404</h1>
                <p className="text-xl text-slate-700 mb-4 font-medium">Oops! Page not found.</p>
                <p className="text-slate-600 mb-8 max-w-md">
                    The page you’re looking for doesn’t exist. It might have been removed or you might have followed a broken link.
                </p>
                <Link
                    to="/"
                    className="bg-[#0097A7] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#007c8a] transition"
                >
                    Back to Home
                </Link>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 text-center text-slate-500 text-sm border-t">
                &copy; {new Date().getFullYear()} UnifyIT. All rights reserved.
            </footer>
        </div>
    );
}

export default NotFound;
