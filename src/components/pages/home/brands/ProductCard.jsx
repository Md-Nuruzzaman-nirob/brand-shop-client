import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { brandName, imageUrl, name, price, message, rating, category, _id } =
    product || {};

  const location = useLocation();
  // console.log(typeof rating);
  // console.log(product);

  return (
    <div className="bg-[#F4F3F0] rounded-xl">
      <img className="w-full h-52 md:h-80 rounded-t-xl" src={imageUrl} alt="" />
      <div className="m-5 ">
        <h3 className="font-Bebas text-2xl border-b-2">{name}</h3>
        <div className="flex justify-between items-center mt-3 mb-2">
          <h3 className="font-Heebo font-semibold opacity-70">
            Brand :{" "}
            <span className="text-xl font-Bebas font-normal text-black">
              {brandName}
            </span>
          </h3>
          <p className="font-Heebo font-semibold opacity-70">
            Price :{" "}
            <span className="text-xl font-Bebas font-normal text-black">
              {price}$
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-Heebo font-semibold opacity-70">
            Category :{" "}
            <span className="text-xl font-Bebas font-normal text-black">
              {category}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <h3 className="font-Heebo font-semibold opacity-70">Rating : </h3>
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

        <p className="font-Heebo font-semibold opacity-70 my-3 border-b-2 h-20 w-full">
          Short description : <span className="text-black">{message}</span>
        </p>

        <div className="flex items-center gap-2 mt-4">
          <Link
            to={`${location.pathname}/${_id}/update`}
            state={location.pathname}
            className="flex-1"
          >
            <button className="w-full btn btn-neutral">Update</button>
          </Link>
          <Link
            to={`${location.pathname}/${_id}/details`}
            state={location.pathname}
            className="flex-1"
          >
            <button className="w-full btn btn-neutral">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
