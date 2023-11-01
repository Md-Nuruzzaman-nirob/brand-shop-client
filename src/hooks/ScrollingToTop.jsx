import { useEffect } from "react";

const ScrollingToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
export default ScrollingToTop;
