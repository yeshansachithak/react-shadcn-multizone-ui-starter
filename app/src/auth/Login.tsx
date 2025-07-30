import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import unifyitLogo from "@/assets/brand.png";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful");
            navigate("/auth-check");
        } catch (err: any) {
            toast.error(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            toast.success("Signed in with Google");
            navigate("/auth-check");
        } catch (err: any) {
            toast.error("Google sign-in failed");
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left Panel */}
            <div className="bg-[#f7fbfd] px-10 py-12 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <img src={unifyitLogo} alt="UnifyIT" className="h-10" />
                        <span className="text-2xl font-bold text-[#0097A7]">UnifyIT</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                        “Where <span className="text-[#0097A7]">passion</span> meets <span className="text-[#F4B400]">profession</span>”
                    </h1>
                    <ul className="space-y-2 mt-6 text-slate-700 text-sm">
                        <li>👥 1.2+ million users</li>
                        <li>🏢 100+ companies</li>
                        <li>🌍 15+ countries</li>
                        <li>📄 100,000+ contracts</li>
                    </ul>
                </div>
                <div className="text-xs text-slate-400">
                    <p className="mb-2">Trusted by</p>
                    <div className="flex gap-4 text-gray-400 opacity-70">
                        <span>Logopipsum</span>
                        <span>IPSUM</span>
                        <span>logo ipsum</span>
                        <span>LOGO</span>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="px-8 py-16 flex flex-col justify-center bg-white">
                <div className="max-w-md mx-auto w-full">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign in</h2>
                    <p className="text-sm text-slate-600 mb-6">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-[#0097A7] underline">
                            Create account
                        </a>
                    </p>

                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border rounded-md p-2 focus:ring-[#0097A7] focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    id="password"
                                    className="w-full border rounded-md p-2 pr-10 focus:ring-[#0097A7] focus:outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute top-2 right-2 text-sm text-gray-500"
                                >
                                    {showPass ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <div className="text-sm text-slate-600">
                            <a href="/forgot-password" className="font-semibold">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0097A7] text-white py-2 rounded-md font-medium hover:bg-[#007c8a] transition"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-slate-200" />
                        <span className="px-4 text-sm text-slate-400">Or</span>
                        <div className="flex-grow h-px bg-slate-200" />
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full border border-slate-200 rounded-md py-2 flex justify-center items-center gap-2 text-sm font-medium hover:bg-slate-50"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="h-5 w-5"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
