import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          404 - Not Found
        </h1>
        <p className="text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="btn rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case my-5"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
