import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#F8EDED] text-center px-6">
      
      <h1 className="text-7xl font-bold text-purple-500 mb-4">404</h1>

      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link 
        to="/"
        className="bg-purple-400 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
      >
        Go Home
      </Link>

    </div>
  );
}
