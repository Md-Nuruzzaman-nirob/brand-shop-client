import { useLoaderData } from "react-router-dom";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import MyCartProducts from "./MyCartProducts";

const MyCart = () => {
  const cartData = useLoaderData();
  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-[70vh] max-w-7xl mx-4 md:mx-10 xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
          {cartData.map((product) => (
            <MyCartProducts
              key={product._id}
              product={product}
            ></MyCartProducts>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyCart;
