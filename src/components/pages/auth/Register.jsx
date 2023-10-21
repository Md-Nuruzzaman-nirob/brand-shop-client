import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../common/NavBar";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import Footer from "../../common/Footer";
import { useState } from "react";
import toast from "react-hot-toast";
import { PiWarningOctagonFill } from "react-icons/pi";
import Swal from "sweetalert2";

const Register = () => {
  // use state
  const [nameValidation, setNameValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [checkboxValidation, setCheckboxValidation] = useState("");

  // context
  const { createUser } = useAuth();
  // navigate
  const navigate = useNavigate();
  // use location
  const location = useLocation();

  // name validation
  const handleNameValidation = (e) => {
    const name = e.target.value;
    if (name.length < 4) {
      return setNameValidation("Name should be at least 4 characters");
    } else {
      setNameValidation("");
    }
  };

  // email validation
  const handleEmailValidation = (e) => {
    const email = e.target.value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailValidation("Please enter a valid email address.");
    } else {
      setEmailValidation("");
    }
  };

  // password validation
  const handlePasswordValidation = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      return setPasswordValidation("Password should be at least 6 characters");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/.test(password)
    ) {
      return setPasswordValidation(
        "Password must contain at least one  lowercase letter, one uppercase letter, one digit."
      );
    } else {
      setPasswordValidation("");
    }
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    const checkbox = form.checkbox.checked;

    if (nameValidation) {
      return;
    }
    if (emailValidation) {
      return;
    }
    if (passwordValidation) {
      return;
    }

    if (!checkbox) {
      return setCheckboxValidation("Please accept terms & conditions");
    }

    setNameValidation("");
    setEmailValidation("");
    setPasswordValidation("");
    setCheckboxValidation("");

    createUser(email, password)
      .then(() => {
        // profile update
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {})
          .catch((error) => {
            toast.error(error.message.slice(10));
          });

        //email verification
        sendEmailVerification(auth.currentUser).then(() => {
          Swal.fire({
            title:
              "You successfully create your account. Please check your email for verification.",
            icon: "question",
            iconHtml: "؟",
            confirmButtonText: "OK",
            showCloseButton: true,
          });
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          return setEmailValidation("Email already in use");
        }
        toast.error(error.message.slice(10));
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center justify-center my-44 font-Ubuntu font-medium bg-[#feffff]">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <SocialLogin></SocialLogin>
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="mx-4">Or, Register with your email</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <form
            onSubmit={handleCreateUser}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className=" flex flex-col gap-8">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={handleNameValidation}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-Ubuntu text-sm font-medium text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="name"
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
                {nameValidation && (
                  <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {nameValidation}
                  </p>
                )}
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-Ubuntu text-sm font-medium text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="url"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  photo url
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={handleEmailValidation}
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
                  onChange={handlePasswordValidation}
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-Ubuntu text-sm font-medium text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="password"
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
            <div className="block">
              {" "}
              {passwordValidation && (
                <p className="flex items-center gap-1 text-[#e83e8c] text-sm">
                  <span>
                    {" "}
                    <PiWarningOctagonFill></PiWarningOctagonFill>
                  </span>
                  {passwordValidation}
                </p>
              )}
            </div>
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
                  name="checkbox"
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
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="checkbox"
              >
                <p className="flex items-center font-Ubuntu text-sm font-medium leading-normal text-gray-700 antialiased">
                  I agree the
                  <a
                    className="font-bold hover:underline transition-colors hover:text-[#17252a]"
                    href="#"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </p>
              </label>
            </div>
            {checkboxValidation && (
              <p className=" flex items-center gap-1 text-[#e83e8c] text-sm">
                <span>
                  {" "}
                  <PiWarningOctagonFill></PiWarningOctagonFill>
                </span>
                {checkboxValidation}
              </p>
            )}

            <button
              className="w-full btn rounded-md md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case mt-4"
              type="submit"
              data-ripple-light="true"
            >
              Register
            </button>
            <p className="mt-4 block text-center font-Ubuntu text-base font-medium leading-relaxed text-gray-700 antialiased">
              Already have an account?
              <Link
                to={"/login"}
                className="font-bold text-[#17252a] hover:text-[#17252a] hover:underline transition-colors ml-1 font-Ubuntu"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
