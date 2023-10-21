import { useNavigate } from "react-router-dom";
import NavBar from "../../common/NavBar";
import { BsBoxArrowLeft } from "react-icons/bs";
import Footer from "../../common/Footer";
import Swal from "sweetalert2";

const AddProducts = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const message = form.message.value;
    const addProduct = {
      brandName,
      name,
      imageUrl,
      category,
      price,
      rating,
      message,
    };

    // sending to backEnd
    fetch("https://brand-shop-server-ecru.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };
  return (
    <div className="bg-[#3aafa9]">
      <NavBar></NavBar>
      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto text-right lg:text-left py-8 md:py-12">
        <button
          onClick={handleGoBack}
          className="btn btn-sm rounded-md border-none text-sm lg:text-lg px-6 font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
        >
          <BsBoxArrowLeft />
          Home
        </button>
      </div>

      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto px-4 md:px-10 lg:px-16 xl:px-28 py-10 md:py-16 lg:py-20 bg-[#feffff] mb-16 md:mb-20 lg:mb-28 rounded-md">
        <h3 className="text-4xl md:text-5xl text-center font-Ubuntu font-bold">
          Add your Product
        </h3>
        <p className="text-center text-xs md:text-sm lg:text-base xl:text-lg md:mx-6 lg:mx-10 xl:mx-20 my-5 md:my-8"></p>

        <form onSubmit={handleSubmit} className="font-medium font-Ubuntu">
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="brandName"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Brand Name
              </label>
              <select
                id="brandName"
                name="brandName"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] focus:bg-[#feffff] outline-none"
                required
              >
                <option>Mercedes-Benz</option>
                <option>BMW</option>
                <option>Tesla</option>
                <option>Ferrari</option>
                <option>Toyota</option>
                <option>Ford</option>
              </select>
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Model Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] focus-bg-[#feffff] outline-none"
                placeholder="Enter name"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="imageUrl"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] focus-bg-[#feffff] outline-none"
                placeholder="Enter image url"
              />
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] focus:bg-[#feffff] outline-none"
                required
              >
                <option>Car</option>
                <option>Motorcycle</option>
                <option>Bicycle</option>
                <option>Bus</option>
                <option>Truck</option>
              </select>
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Price ($)
              </label>
              <select
                id="price"
                name="price"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] focus:bg-[#feffff] outline-none"
                required
              >
                <option>500</option>
                <option>1000</option>
                <option>1500</option>
                <option>2000</option>
                <option>3000</option>
                <option>5000</option>
                <option>8000</option>
                <option>10000</option>
                <option>12000</option>
                <option>15000</option>
                <option>18000</option>
                <option>20000</option>
                <option>25000</option>
                <option>30000</option>
                <option>40000</option>
                <option>50000</option>
              </select>
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="rating"
                className="block text-gray-700 text-sm font-bold ml-3 mb-2"
              >
                Rating (out of 5)
              </label>
              <select
                id="rating"
                name="rating"
                className="text-sm rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] focus:bg-[#feffff] outline-none"
                required
              >
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold ml-3 mb-2"
            >
              Description
            </label>
            <textarea
              id="message"
              name="message"
              className="rounded-md w-full px-3 py-2 bg-[#feffff] text-[#17252a] border focus:border-[#17252a] overflow-hidden outline-none"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full btn rounded-md md:text-lg font-Ubuntu font-bold bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] hover:border-[#17252a] transition-colors duration-500 delay-100 ease-in-out normal-case"
          >
            Add Product
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProducts;
