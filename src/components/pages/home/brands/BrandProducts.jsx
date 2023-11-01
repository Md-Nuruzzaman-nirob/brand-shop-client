import Footer from "../../../common/Footer";
import NavBar from "../../../common/NavBar";
import banner1 from "../../../../assets/bmw-transparent-3.png";
import banner2 from "../../../../assets/pngwing.com (4).png";
import banner3 from "../../../../assets/ferrari.png";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const BrandProducts = () => {
  const { id } = useParams();
  const productsData = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProduct = productsData.filter(
    (product) => product.brandName.toLowerCase() === id
  );
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-[#3aafa9]">
        <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto font-Ubuntu">
          <div className="carousel w-full lg:h-[600px] rounded-b-xl pb-16 md:pb-20 lg:py-0">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between mx-auto lg:mx-[76px]">
                <div className=" text-[#feffff] text-center lg:text-left">
                  <h3 className="md:flex-1 font-Ubuntu font-bold text-3xl md:text-5xl lg:text-[40px] xl:text-6xl mt-8 md:mt-3">
                    2023 BMW x Series
                    <span className="block text-[#17252a]">
                      {" "}
                      with Special Discount
                    </span>
                  </h3>
                  <p className="font-Ubuntu text-sm md:text-lg lg:text-sm xl:text-lg text-[#feffff] my-5">
                    Elevate your driving experience with a BMW.{" "}
                    <span className="block">
                      Get a special discount on the 2023 BMW x Series.{" "}
                    </span>
                    <span className="block">
                      Luxury and precision meet performance in this exceptional
                      offer.
                    </span>
                  </p>
                  <div className="flex items-center w-80 mx-auto lg:mx-0">
                    <div className="flex-1">
                      <Link
                        to={"/cart"}
                        className="w-full btn btn-sm md:btn-md rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                      >
                        Details
                      </Link>
                    </div>
                    <div className="divider divider-horizontal mx-0 px-0"></div>
                    <div className="flex-1">
                      <Link
                        to={"/addProduct"}
                        className="w-full btn btn-sm md:btn-md rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                      >
                        Add Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1">
                  <img className="w-96 lg:w-[500px]" src={banner1} alt="" />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative w-full">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between mx-auto lg:mx-[76px]">
                <div className=" text-[#feffff] text-center lg:text-left">
                  <h3 className="md:flex-1 font-Ubuntu font-bold text-3xl md:text-5xl lg:text-[40px] xl:text-6xl mt-8 md:mt-3">
                    Mercedes-Benz E-Class
                    <span className="block text-[#17252a]">
                      {" "}
                      Limited-Time Deal
                    </span>
                  </h3>
                  <p className="font-Ubuntu text-sm md:text-lg lg:text-sm xl:text-lg text-[#feffff] my-5">
                    Experience luxury and innovation with a Mercedes-Benz.{" "}
                    <span className="block">
                      Enjoy a discount on the 2022 Mercedes-Benz E-Class.
                    </span>
                  </p>
                  <div className="flex items-center w-80 mx-auto lg:mx-0">
                    <div className="flex-1">
                      <Link
                        to={"/cart"}
                        className="w-full btn btn-sm md:btn-md rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                      >
                        Details
                      </Link>
                    </div>
                    <div className="divider divider-horizontal mx-0 px-0"></div>
                    <div className="flex-1">
                      <Link
                        to={"/addProduct"}
                        className="w-full btn btn-sm md:btn-md rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                      >
                        Add Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1">
                  <img className="w-96 lg:w-[500px]" src={banner2} alt="" />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between mx-auto lg:mx-[76px]">
                <div className=" text-[#feffff] text-center lg:text-left">
                  <h3 className="md:flex-1 font-Ubuntu font-bold text-3xl md:text-5xl lg:text-[40px] xl:text-6xl mt-8 md:mt-3">
                    2021 Ferrari 488 GTB
                    <span className="block text-[#17252a]">
                      {" "}
                      with Special Offer
                    </span>
                  </h3>
                  <p className="font-Ubuntu text-sm md:text-lg lg:text-sm xl:text-lg text-[#feffff] my-5">
                    Unleash the Prancing Horse.
                    <span className="block">
                      Get a discount on the 2021 Ferrari 488 GTB.{" "}
                    </span>
                  </p>
                  <div className="flex items-center w-80 mx-auto lg:mx-0">
                    <div className="flex-1">
                      <Link
                        to={"/cart"}
                        className="w-full btn btn-sm md:btn-md rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                      >
                        Details
                      </Link>
                    </div>
                    <div className="divider divider-horizontal mx-0 px-0"></div>
                    <div className="flex-1">
                      <Link
                        to={"/addProduct"}
                        className="w-full btn btn-sm md:btn-md rounded-md text-base font-Ubuntu font-bold border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                      >
                        Add Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1">
                  <img className="w-96 lg:w-[500px]" src={banner3} alt="" />
                </div>
              </div>
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
        </div>
      </div>

      {filteredProduct == 0 ? (
        <p className="h-[50vh] flex items-center justify-center font-Ubuntu font-bold text-black">
          Empty Products
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20 max-w-7xl mx-4 md:mx-10 xl:mx-auto">
          {filteredProduct?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      )}

      <Footer></Footer>
    </>
  );
};

export default BrandProducts;
