import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";
import MyCartProducts from "./MyCartProducts";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyCart = () => {
  const [cartData, setCartData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5001/carts?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user?.email]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="bg-[#feffff]">
        <div className="min-h-[70vh] max-w-7xl mx-4 md:mx-10 xl:mx-auto">
          <h3 className="text-center font-Ubuntu font-bold text-3xl md:text-4xl lg:text-5xl mt-10 md:mt-14 lg:mt-20 mb-10">
            Cart Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {cartData.map((product) => (
              <MyCartProducts
                key={product._id}
                product={product}
              ></MyCartProducts>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyCart;
