import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../common/Footer";
import NavBar from "../../common/NavBar";
import Swal from "sweetalert2";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const DetailsProduct = () => {
  const [productData, setProductData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5001/products?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
      });
  }, [user?.email]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = productData.find((product) => product._id === id);

  const { brandName, category, imageUrl, message, name, price, rating, _id } =
    product || {};
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state ? location.state : "/");
  };

  const handleSubmit = () => {
    const addToCart = {
      brandName,
      name,
      imageUrl,
      category,
      price,
      rating,
      message,
      email: user?.email,
    };

    // sending to backEnd
    fetch("http://localhost:5001/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product Has Been Successfully Added To Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              navigate(location?.state ? location.state : "/");
            }
          });
      }
    });
  };
  console.log(typeof rating);
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-[#17252a]">
        <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto text-right lg:text-left py-8 md:py-12">
          <button
            onClick={handleGoBack}
            className="btn btn-sm rounded-md text-sm lg:text-lg px-6 font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case border-[#feffff]"
          >
            <BsBoxArrowLeft />
            Back
          </button>
        </div>
        <div className="pb-16 md:pb-36 lg:pb-48 max-w-7xl mx-4 md:mx-10 xl:mx-auto">
          <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-clip-border text-gray-700 shadow-md bg-[#feffff]">
            <div className="flex-1 relative m-0 md:w-2/5 shrink-0 overflow-hidden md:rounded-xl rounded-t-xl md:rounded-r-none bg-[#feffff] bg-clip-border text-gray-700">
              <img src={imageUrl} className="object-cover w-full h-full" />
            </div>

            <div className="flex-1 m-5 lg:m-10 md:w-full">
              <h3 className="font-Ubuntu font-bold text-2xl lg:text-4xl xl:text-5xl lg:pb-4 border-b-2">
                {name}
              </h3>
              <div className="flex justify-between items-center mt-3 lg:mt-5 mb-2 xl:mb-4">
                <h3 className="font-Ubuntu font-bold xl:text-xl opacity-70">
                  Brand :{" "}
                  <span className="text-xl xl:text-2xl font-Ubuntu font-bold text-[#17252a]">
                    {brandName}
                  </span>
                </h3>
                <p className="font-Ubuntu font-bold xl:text-xl opacity-70">
                  Price :{" "}
                  <span className="text-xl xl:text-2xl font-Ubuntu font-bold text-[#17252a]">
                    {price}$
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-Ubuntu font-bold xl:text-xl opacity-70">
                  Category :{" "}
                  <span className="text-xl xl:text-2xl font-Ubuntu font-bold text-[#17252a]">
                    {category}
                  </span>
                </p>
                <div className="flex items-center gap-1">
                  <h3 className="font-Ubuntu font-bold xl:text-xl opacity-70">
                    Rating :{" "}
                  </h3>
                  <div className="rating rating-sm xl:rating-md">
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      defaultChecked={parseInt(rating) === 1}
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      defaultChecked={parseInt(rating) === 2}
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      defaultChecked={parseInt(rating) === 3}
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      defaultChecked={parseInt(rating) === 4}
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      defaultChecked={parseInt(rating) === 5}
                    />
                  </div>
                </div>
              </div>

              <p className="font-Ubuntu font-bold xl:text-xl opacity-70 my-3 xl:my-5 border-b-2 h-20 lg:h-24 xl:h-28 w-full">
                Short description :{" "}
                <span className="text-[#17252a]">{message}</span>
              </p>

              <div className="flex justify-between items-center gap-2 mt-4 xl:mt-6">
                <div className="flex-1">
                  <button
                    onClick={handleSubmit}
                    className="w-full btn flex items-center gap-2 rounded-md px-6 text-center md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex-1">
                  <button
                    onClick={() => handleDelete(_id)}
                    className=" w-full btn flex items-center gap-2 rounded-md px-6 text-center md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DetailsProduct;
