import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Toaster></Toaster>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
