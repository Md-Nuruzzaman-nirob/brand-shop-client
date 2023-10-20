import NavBar from "../../common/NavBar";
import toast from "react-hot-toast";
import { useState } from "react";
import { PiWarningOctagonFill } from "react-icons/pi";
import Footer from "../../common/Footer";

const ContactUs = () => {
  const [emailValidation, setEmailValidation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    // const phone = form.get("phone");

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return setEmailValidation("Please enter a valid email address.");
    }
    setEmailValidation("");

    toast.success("Your message sent successfully.", {
      position: "top-center",
      duration: 4000,
    });
    e.currentTarget.reset();
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center items-center my-24 md:my-36 lg:my-44 max-w-7xl mx-4 md:mx-10 xl:mx-auto font-Heebo">
        <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-clip-border text-gray-700 shadow-md bg-[#F4F3F0]">
          <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden md:rounded-xl rounded-t-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-6">Contact With Us</h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-600 mb-2 ml-4"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="w-full px-4 py-2 border focus:outline-none focus:border-red-800 rounded-md text-xs md:text-sm"
                    placeholder="Enter first Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-600 mb-2 ml-4"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-800 text-xs md:text-sm"
                    placeholder="Enter last Name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-600 mb-2 ml-4"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-800 text-xs md:text-sm"
                    placeholder="Enter email Address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 mb-2 ml-4"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-800 text-xs md:text-sm"
                    placeholder="Enter phone Number"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                {emailValidation && (
                  <p className="flex items-center gap-1 text-red-800 text-sm mt-1">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {emailValidation}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-600 mb-2 ml-4"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:border-red-800 text-xs md:text-sm"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="btn bg-red-800 hover:bg-red-900 text-white border-none flex items-center gap-2 rounded-md px-6 text-center font-semibold uppercase font-Heebo"
                type="submit"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
