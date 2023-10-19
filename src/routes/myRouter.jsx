import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/auth/Login";
import Register from "../components/pages/auth/Register";
import MyCart from "../components/pages/cart/MyCart";
import PrivetRouter from "./PrivetRouter";
import AddProducts from "../components/pages/addProduct/AddProducts";
import ContactUs from "../components/pages/contactUs/ContactUs";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://brand-shop-server-ecru.vercel.app/products"),
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: (
          <PrivetRouter>
            <MyCart></MyCart>
          </PrivetRouter>
        ),
        loader: () =>
          fetch("https://brand-shop-server-ecru.vercel.app/products"),
      },
    ],
  },
]);

export default myRouter;
