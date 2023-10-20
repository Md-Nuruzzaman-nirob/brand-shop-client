import Footer from "../../../common/Footer";
import NavBar from "../../../common/NavBar";
import banner1 from "../../../../assets/pexels-photo-10664458.jpeg";
import banner2 from "../../../../assets/pexels-photo-170811.jpeg";
import banner3 from "../../../../assets/pexels-photo-2365572.jpeg";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
  const productsData = useLoaderData();
  return (
    <div>
      <NavBar></NavBar>
      <div className="carousel w-full h-screen">
        <div
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: " no-repeat",
          }}
          id="slide1"
          className="carousel-item relative w-full"
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: " no-repeat",
          }}
          id="slide2"
          className="carousel-item relative w-full"
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${banner3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: " no-repeat",
          }}
          id="slide3"
          className="carousel-item relative w-full"
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20 max-w-7xl mx-4 md:mx-10 xl:mx-auto">
        {productsData.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BrandProducts;
