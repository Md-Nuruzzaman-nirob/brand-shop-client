import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  const handleLogin = (e) => {
    e()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
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
