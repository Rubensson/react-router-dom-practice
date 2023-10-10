import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-blue-300 h-screen text-center pt-20">
      <h2 className="text-6xl font-bold mb-4">404</h2>
      <p className="text-xl font-semibold mb-10">Page Not Found!</p>
      <Link to={"/"} className="bg-blue-400 text-white px-4 py-2 rounded-full">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
