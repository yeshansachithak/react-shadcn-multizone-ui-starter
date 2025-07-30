import unifyitLogo from "@/assets/brand.png";
function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cyan-50 to-amber-50">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#0097A7] border-t-transparent mb-4" />
            <img src={unifyitLogo} alt="UnifyIT" className="h-12 mb-4 animate-bounce" />
            <p className="text-[#0097A7] font-semibold text-lg animate-pulse">
                Checking your access...
            </p>
        </div>
    );
}

export default LoadingSpinner;