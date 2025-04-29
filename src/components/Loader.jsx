// components/Loader.jsx
const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#631930] border-opacity-60" />
        </div>
    );
};

export default Loader;