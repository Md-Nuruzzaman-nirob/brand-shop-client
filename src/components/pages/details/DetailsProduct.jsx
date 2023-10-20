import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Footer from "../../common/Footer";
import NavBar from "../../common/NavBar";
import Swal from "sweetalert2";
import { BsBoxArrowLeft } from "react-icons/bs";

const DetailsProduct = () => {
  const { id } = useParams();
  const productData = useLoaderData();

  const product = productData.find((product) => product._id === id);

  const { brandName, category, imageUrl, message, name, price, rating, _id } =
    product || {};
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state ? location.state : "/");
  };

  const handleSubmit = () => {
    console.log(brandName);
    const addToCart = {
      brandName,
      name,
      imageUrl,
      category,
      price,
      rating,
      message,
    };
    console.log(addToCart);

    // sending to backEnd
    fetch("https://brand-shop-server-ecru.vercel.app/carts", {
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
        fetch(`https://brand-shop-server-ecru.vercel.app/products/${id}`, {
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

  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto text-right lg:text-left my-10 md:my-12">
        <button
          onClick={handleGoBack}
          className="btn btn-sm text-xs lg:text-base bg-red-800  hover:bg-red-900 text-white rounded-md px-6"
        >
          <BsBoxArrowLeft />
          back
        </button>
      </div>
      <div className=" mb-16 md:mb-36 lg:mb-48 max-w-7xl mx-4 md:mx-10 xl:mx-auto">
        <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-clip-border text-gray-700 shadow-md bg-[#F4F3F0]">
          <div className="flex-1 relative m-0 md:w-2/5 shrink-0 overflow-hidden md:rounded-xl rounded-t-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={imageUrl} className="object-cover w-full h-full" />
          </div>

          <div className="flex-1 m-5 lg:m-10 md:w-full">
            <h3 className="font-Bebas text-2xl lg:text-4xl xl:text-5xl lg:pb-4 border-b-2">
              {name}
            </h3>
            <div className="flex justify-between items-center mt-3 lg:mt-5 mb-2 xl:mb-4">
              <h3 className="font-Heebo font-semibold xl:text-xl opacity-70">
                Brand :{" "}
                <span className="text-xl xl:text-2xl font-Bebas font-normal text-black">
                  {brandName}
                </span>
              </h3>
              <p className="font-Heebo font-semibold xl:text-xl opacity-70">
                Price :{" "}
                <span className="text-xl xl:text-2xl font-Bebas font-normal text-black">
                  {price}$
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-Heebo font-semibold xl:text-xl opacity-70">
                Category :{" "}
                <span className="text-xl xl:text-2xl font-Bebas font-normal text-black">
                  {category}
                </span>
              </p>
              <div className="flex items-center gap-1">
                <h3 className="font-Heebo font-semibold xl:text-xl opacity-70">
                  Rating :{" "}
                </h3>
                <div className="rating rating-sm xl:rating-md">
                  <input
                    type="radio"
                    name={`rating-${_id}`}
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                    defaultChecked={rating === "1"}
                  />
                  <input
                    type="radio"
                    name={`rating-${_id}`}
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                    defaultChecked={rating === "2"}
                  />
                  <input
                    type="radio"
                    name={`rating-${_id}`}
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                    defaultChecked={rating === "3"}
                  />
                  <input
                    type="radio"
                    name={`rating-${_id}`}
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                    defaultChecked={rating === "4"}
                  />
                  <input
                    type="radio"
                    name={`rating-${_id}`}
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                    defaultChecked={rating === "5"}
                  />
                </div>
              </div>
            </div>

            <p className="font-Heebo font-semibold xl:text-xl opacity-70 my-3 xl:my-5 border-b-2 h-20 lg:h-24 xl:h-28 w-full">
              Short description : <span className="text-black">{message}</span>
            </p>

            <div className="flex justify-between items-center gap-2 mt-4 xl:mt-6">
              <div className="flex-1">
                <button
                  onClick={handleSubmit}
                  className="w-full btn btn-neutral"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex-1">
                <button
                  onClick={() => handleDelete(_id)}
                  className=" w-full btn btn-neutral"
                >
                  Delete
                </button>
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
