import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../common/NavBar";
import SocialLogin from "./SocialLogin";
import Footer from "../../common/Footer";
import useAuth from "../../../hooks/useAuth";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { PiWarningOctagonFill } from "react-icons/pi";
import Swal from "sweetalert2";

const Login = () => {
  // use state
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  // context
  const { loginUser } = useAuth();
  // navigate
  const navigate = useNavigate();
  // use location
  const location = useLocation();
  // use ref
  const emailRef = useRef();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setEmailValidation("");
    setEmailValidation("");

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Login successfully.",
          confirmButtonText: "OK",
          showCloseButton: true,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          setPasswordValidation("Invalid password mismatch.");
        } else if (
          error.message ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          setPasswordValidation(
            "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. "
          );
        }
        toast.error(error.message.slice(10));
      });
  };

  // Forgot Password email verification
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email.length === 0) {
      return setEmailValidation("Please provide an email address.");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      return setEmailValidation("Please enter a valid email address.");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          title: "Please check yor email.",
          icon: "question",
          confirmButtonText: "OK",
          showCloseButton: true,
        });
        setEmailValidation("");
        setPasswordValidation("");
      })
      .catch(() => {});
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center justify-center my-48 bg-[#feffff]">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none font-Ubuntu font-medium">
          <SocialLogin></SocialLogin>
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="mx-4">Or, Login with your email</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <form
            onSubmit={handleSignInUser}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-8">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  ref={emailRef}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-Ubuntu text-sm font-medium text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="email"
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
                {emailValidation && (
                  <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {emailValidation}
                  </p>
                )}
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-Ubuntu text-sm font-medium text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                  name="password"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                {passwordValidation && (
                  <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {passwordValidation}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-medium text-gray-700"
                  htmlFor="checkbox"
                >
                  <p className="flex items-center font-Ubuntu text-sm font-medium leading-normal text-gray-700 antialiased">
                    remember me
                  </p>
                </label>
              </div>
              <a
                onClick={handleForgetPassword}
                className="flex items-center text-sm leading-normal text-gray-700 antialiased font-medium hover:text-[#17252a] hover:underline transition-colors ml-1 font-Ubuntu"
              >
                forget password?
              </a>
            </div>
            <button
              className="w-full btn rounded-md md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case mt-4"
              type="submit"
              data-ripple-mfont-medium="true"
            >
              Login
            </button>
            <p className="mt-4 block text-center font-Ubuntu text-base font-medium leading-relaxed text-gray-700 antialiased">
              Don&apos;t have an account?
              <Link
                to={"/register"}
                className="font-bold text-[#17252a] hover:text-[#17252a] hover:underline transition-colors ml-1 font-Ubuntu"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
