import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import unifyitLogo from "@/assets/brand.png";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("seeker"); // default role
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCred.user.uid), {
                uid: userCred.user.uid,
                email,
                role,
            });
            toast.success("Account created successfully");
            navigate("/auth-check");
        } catch (err: any) {
            toast.error(err.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="bg-[#f7fbfd] px-10 py-12 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <img src={unifyitLogo} alt="UnifyIT" className="h-10" />
                        <span className="text-2xl font-bold text-[#0097A7]">UnifyIT</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                        “Where <span className="text-[#0097A7]">passion</span> meets <span className="text-[#F4B400]">profession</span>”
                    </h1>
                    <ul className="text-sm text-slate-700 mt-6 space-y-2">
                        <li>🌐 Join our growing global community</li>
                        <li>✅ Easy onboarding and profile creation</li>
                        <li>💼 Find or post jobs instantly</li>
                    </ul>
                </div>
                <p className="text-xs text-slate-400">© {new Date().getFullYear()} UnifyIT</p>
            </div>

            {/* Right */}
            <div className="px-8 py-16 flex flex-col justify-center bg-white">
                <div className="max-w-md mx-auto w-full">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Create Account</h2>
                    <p className="text-sm text-slate-600 mb-6">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#0097A7] underline">Sign in</a>
                    </p>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-md p-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full border rounded-md p-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                            <select
                                className="w-full border rounded-md p-2"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="seeker">Job Seeker</option>
                                <option value="poster">Job Poster</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0097A7] text-white py-2 rounded-md font-medium hover:bg-[#007c8a] transition"
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
