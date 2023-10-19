import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivetRouter = ({ children }) => {
  const { loader, user } = useAuth();
  const location = useLocation();

  if (loader) {
    return (
      <p className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  } else if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return children;
};

PrivetRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivetRouter;
