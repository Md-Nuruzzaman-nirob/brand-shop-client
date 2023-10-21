import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const location = useLocation();
  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e()
      .then(() => {
        toast.success("Login successfully.", {
          position: "top-center",
          duration: 4000,
        });
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message.slice(10));
      });
  };
  return (
    <div className="flex items-center gap-2 mb-5">
      <button
        onClick={() => handleLogin(googleLogin)}
        className="flex-1 btn font-Heebo font-extrabold flex items-center gap-2"
      >
        <FcGoogle></FcGoogle> Google Login
      </button>
      <button
        onClick={() => handleLogin(githubLogin)}
        className="flex-1 btn font-Heebo font-extrabold flex items-center gap-2"
      >
        <BsGithub /> Github Login
      </button>
    </div>
  );
};

export default SocialLogin;
