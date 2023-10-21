import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const MyCartProducts = ({ product }) => {
  const { brandName, category, imageUrl, message, name, price, rating, _id } =
    product || {};

  const location = useLocation();
  const navigate = useNavigate();

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
        fetch(`https://brand-shop-server-ecru.vercel.app/carts/${id}`, {
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
              navigate("/cart");
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#feffff] rounded-xl border shadow-lg">
      <img className="w-full h-52 md:h-80 rounded-t-xl" src={imageUrl} alt="" />
      <div className="m-5 ">
        <h3 className="font-Ubuntu font-bold text-2xl border-b-2">{name}</h3>
        <div className="flex justify-between items-center mt-3 mb-2">
          <h3 className="font-Ubuntu font-bold opacity-70">
            Brand :{" "}
            <span className="lg:text-xl font-Ubuntu font-bold text-[#17252a]">
              {brandName}
            </span>
          </h3>
          <p className="font-Ubuntu font-bold opacity-70">
            Price :{" "}
            <span className="lg:text-xl font-Ubuntu font-bold text-[#17252a]">
              {price}$
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-Ubuntu font-bold opacity-70">
            Category :{" "}
            <span className="lg:text-xl font-Ubuntu font-bold text-[#17252a]">
              {category}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <h3 className="font-Ubuntu font-bold opacity-70">Rating : </h3>
            <div className="rating rating-sm">
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

        <p className="font-Ubuntu font-bold opacity-70 my-3 border-b-2 h-20 w-full">
          Short description : <span className="text-[#17252a]">{message}</span>
        </p>

        <div className="flex items-center gap-2 mt-4">
          <Link
            to={`${location.pathname}/${_id}/update`}
            state={location.pathname}
            className="flex-1"
          >
            <button className="w-full btn flex items-center gap-2 rounded-md px-6 text-center md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case">
              Update
            </button>
          </Link>
          <div className="flex-1">
            <button
              onClick={() => handleDelete(_id)}
              className="w-full btn flex items-center gap-2 rounded-md px-6 text-center md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyCartProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default MyCartProducts;
