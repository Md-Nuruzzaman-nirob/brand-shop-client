import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosHome, IoIosLogIn, IoMdCart } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { RiMenuSearchLine } from "react-icons/ri";
import logo from "../../assets/—Pngtree—red and black logo_5517319.png";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none bg-white bg-opacity-60 py-4 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 xl:px-0 lg:py-5 font-Noto">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-900">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 lg:w-10 lg:h-10" src={logo} alt="" />
          <Link
            to={"/"}
            className="cursor-pointer font-Bebas font-medium text-3xl leading-relaxed antialiased bg-gradient-to-r from-red-800  to-red-950 bg-clip-text text-transparent"
          >
            Brand Shop
          </Link>
        </div>
        <div>
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex font-Bebas text-2xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-950 underline"
                  : "text-red-800"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-950 underline"
                  : "text-red-800"
              }
            >
              Add Product
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-950 underline"
                  : "text-red-800"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <Link
            to={"/login"}
            className="btn btn-sm rounded-md bg-red-800  hover:bg-red-950 text-white hidden lg:flex text-base font-Heebo"
          >
            Login
          </Link>
          <Link
            to={"/cart"}
            className="btn btn-circle hidden lg:flex bg-red-800 hover:bg-red-950 text-white"
          >
            <IoMdCart className="w-8 h-8"></IoMdCart>
          </Link>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-8 w-8 text-red-950"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <RiMenuSearchLine className="w-7 h-7 text-red-800"></RiMenuSearchLine>
              )}
            </span>
          </button>
        </div>
      </div>

      {openNav && (
        <div className="block w-full basis-full overflow-hidden text-blue-gray-900 lg:hidden">
          <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2 text-black font-Bebas font-normal text-lg">
            <hr />
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-950 underline"
                  : "text-red-800"
              }
            >
              <span className="flex items-center justify-start gap-1">
                <IoIosHome></IoIosHome> Home
              </span>
            </NavLink>

            <hr />

            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-950 underline"
                  : "text-red-800"
              }
            >
              <span className="flex items-center justify-start gap-1">
                <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
                Add Product
              </span>
            </NavLink>

            <hr />

            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-950 underline"
                  : "text-red-800"
              }
            >
              <span className="flex items-center justify-start gap-1">
                <BiSolidMessage></BiSolidMessage>Contact Us
              </span>
            </NavLink>

            <hr />

            <Link
              to={"/login"}
              className="btn btn-sm btn-neutral flex items-center justify-start font-Heebo font-extrabold bg-red-800 hover:bg-red-950 text-white border-none rounded-md"
            >
              <IoIosLogIn></IoIosLogIn> Login
            </Link>

            <hr />

            <Link
              to={"/mycart"}
              className="btn btn-sm btn-neutral flex items-center justify-start font-Heebo font-extrabold bg-red-800 hover:bg-red-950 text-white border-none rounded-md"
            >
              <IoMdCart></IoMdCart> My Cart
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
