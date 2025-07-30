// src/routes/admin/pages/Landing.tsx
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import unifyitLogo from "@/assets/brand.png";

type Survey = {
    id: string;
    title: string;
    audience: string;
    createdAt?: Timestamp;
};

function Landing() {
    const { user, loading } = useAuth();
    const [surveys, setSurveys] = useState<Survey[]>([]);
    const [loadingSurveys, setLoadingSurveys] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSurveys = async () => {
            const snapshot = await getDocs(collection(db, "surveys"));
            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Survey[];
            setSurveys(list);
            setLoadingSurveys(false);
        };

        if (user) fetchSurveys();
    }, [user]);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Unauthorized</p>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-amber-50 flex flex-col">
            {/* Top Nav */}
            <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
                <div className="flex items-center gap-2">
                    <img src={unifyitLogo} alt="UnifyIT Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-[#0097A7]">UnifyIT Admin</span>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 px-6 py-10 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">
                    Welcome, {user.displayName}
                </h1>
                <p className="text-slate-600 mb-6">
                    Here’s your survey dashboard.
                </p>

                <button
                    onClick={() => navigate("manage-survey")}
                    className="bg-[#0097A7] text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-[#007c8a] transition mb-6"
                >
                    ➕ Create New Survey
                </button>

                {loadingSurveys ? (
                    <p className="text-sm text-gray-500">Loading surveys...</p>
                ) : (
                    <div className="grid gap-4 text-left">
                        {surveys.length === 0 ? (
                            <p className="text-sm text-gray-500">No surveys yet.</p>
                        ) : (
                            surveys.map((s) => (
                                <div
                                    key={s.id}
                                    className="bg-white border rounded p-4 shadow-sm hover:shadow transition"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-bold">{s.title}</h3>
                                            <p className="text-sm text-gray-600">
                                                For: {s.audience} |{" "}
                                                {s.createdAt?.toDate().toLocaleDateString() ?? "–"}
                                            </p>
                                        </div>
                                        <Link
                                            to={`manage-survey?surveyId=${s.id}`}
                                            className="text-[#0097A7] hover:underline font-medium"
                                        >
                                            ✏️ Edit
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </main>

            <footer className="w-full py-6 text-center text-slate-500 text-sm border-t">
                &copy; {new Date().getFullYear()} UnifyIT. All rights reserved.
            </footer>
        </div>
    );
}

export default Landing;
