import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import unifyitLogo from "@/assets/brand.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setSent(true);
            toast.success("Password reset link sent to your email.");
        } catch (err: any) {
            toast.error(err.message || "Reset failed");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="flex justify-center mb-4">
                    <img src={unifyitLogo} alt="UnifyIT Logo" className="h-10" />
                </div>
                <h2 className="text-xl font-bold text-center text-[#0097A7]">Reset your password</h2>

                <form onSubmit={handleReset} className="space-y-4">
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

                    <button
                        type="submit"
                        className="w-full bg-[#0097A7] text-white py-2 rounded-md font-medium hover:bg-[#007c8a] transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                {sent && <p className="text-sm text-green-600 text-center">Check your email inbox.</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
