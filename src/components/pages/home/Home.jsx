import NavBar from "../../common/NavBar";
import useAuth from "../../../hooks/useAuth";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";

const Home = () => {
  const { loader } = useAuth();

  if (loader) {
    return (
      <p className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  }

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
