import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosHome, IoMdCart } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { RiMenuSearchLine } from "react-icons/ri";
import logo from "../../assets/—Pngtree—red and black logo_5517319.png";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const [userProfile, setUserProfile] = useState(false);
  const [openNavCart, setOpenNavCart] = useState(false);

  const { user, logout } = useAuth();

  return (
    <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none bg-[#3aafa9] py-4 px-4 text-[#feffff] md:px-10 xl:px-0 lg:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 lg:w-10 lg:h-10" src={logo} alt="" />
          <Link
            to={"/"}
            className="cursor-pointer font-Ubuntu font-bold text-2xl md:text-3xl lg:text-4xl leading-relaxed antialiased text-[#17252a]"
          >
            Brand <span className="text-[#feffff]">Shop</span>
          </Link>
        </div>
        <div>
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex font-Ubuntu font-bold text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#feffff] underline"
                  : "text-[#17252a] hover:text-[#feffff] transition-colors duration-500 ease-in-out"
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
                  ? "text-[#feffff] underline"
                  : "text-[#17252a] hover:text-[#feffff] transition-colors duration-500 ease-in-out"
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
                  ? "text-[#feffff] underline"
                  : "text-[#17252a] hover:text-[#feffff] transition-colors duration-500 ease-in-out"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          {!user ? (
            <Link
              to={"/login"}
              className="hidden lg:flex btn btn-sm rounded-md text-lg font-Ubuntu font-bold normal-case border-none bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] transition-colors duration-500 delay-100 ease-in-out px-5"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              {user.photoURL ? (
                <img
                  onClick={() => setUserProfile(!userProfile)}
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => setUserProfile(!userProfile)}
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center"
                />
              )}
              {userProfile && (
                <ul className="absolute right-0 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-[#feffff] p-3 shadow-lg shadow-gray-500/50 focus:outline-none">
                  <button className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                      My Profile
                    </p>
                  </button>

                  <button className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      ></path>
                    </svg>
                    <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                      Inbox
                    </p>
                  </button>
                  <Link to={"/contact"}>
                    <button className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                        ></path>
                      </svg>
                      <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                        Help
                      </p>
                    </button>
                  </Link>
                  <hr className="border-blue-gray-50" />
                  <button
                    onClick={() => logout()}
                    className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                      ></path>
                    </svg>
                    <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                      Log Out
                    </p>
                  </button>
                </ul>
              )}
            </div>
          )}
          <NavLink
            to={"/cart"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "btn btn-circle btn-sm lg:btn-md border-none bg-[#feffff] text-[#17252a] hover:bg-[#17252a] hover:text-[#feffff] transition-colors duration-500 delay-100 ease-in-out"
                : "btn btn-circle btn-sm lg:btn-md bg-[#17252a] text-[#feffff] hover:bg-[#feffff] hover:text-[#17252a] border-none transition-colors duration-500 delay-100 ease-in-out"
            }
          >
            <IoMdCart className="w-5 h-5 lg:w-8 lg:h-8"></IoMdCart>
          </NavLink>
          <button
            onClick={() => setOpenNavCart(!openNavCart)}
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-Ubuntu font-bold normal-case text-xs text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              {openNavCart ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-8 w-8 text-[#17252a]"
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
                <RiMenuSearchLine className="w-7 h-7 text-[#17252a]"></RiMenuSearchLine>
              )}
            </span>
          </button>
        </div>
      </div>

      {openNavCart && (
        <div className="block w-full basis-full overflow-hidden text-blue-gray-900 lg:hidden">
          <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2 text-black font-Ubuntu font-bold text-lg">
            <hr />
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#feffff] underline"
                  : "text-[#17252a] hover:text-[#feffff] transition-colors duration-500  ease-in-out"
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
                  ? "text-[#feffff] underline"
                  : "text-[#17252a] hover:text-[#feffff] transition-colors duration-500  ease-in-out"
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
                  ? "text-[#feffff] underline"
                  : "text-[#17252a] hover:text-[#feffff] transition-colors duration-500  ease-in-out"
              }
            >
              <span className="flex items-center justify-start gap-1">
                <BiSolidMessage></BiSolidMessage>Contact Us
              </span>
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
