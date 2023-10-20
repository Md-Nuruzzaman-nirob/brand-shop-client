import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/auth/Login";
import Register from "../components/pages/auth/Register";
import MyCart from "../components/pages/cart/MyCart";
import PrivetRouter from "./PrivetRouter";
import AddProducts from "../components/pages/addProduct/AddProducts";
import ContactUs from "../components/pages/contactUs/ContactUs";
import BrandProducts from "../components/pages/home/brands/BrandProducts";
import UpdateProduct from "../components/pages/update/UpdateProduct";
import UpdateCartProduct from "../components/pages/update/UpdateCartProduct";
import DetailsProduct from "../components/pages/details/DetailsProduct";

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
        element: (
          <PrivetRouter>
            <AddProducts></AddProducts>
          </PrivetRouter>
        ),
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
        loader: () => fetch("https://brand-shop-server-ecru.vercel.app/carts"),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivetRouter>
            <BrandProducts></BrandProducts>
          </PrivetRouter>
        ),
        loader: () =>
          fetch("https://brand-shop-server-ecru.vercel.app/products"),
      },
      {
        path: "/brand/:brandId/:id/update",
        element: (
          <PrivetRouter>
            <UpdateProduct></UpdateProduct>
          </PrivetRouter>
        ),
        loader: () =>
          fetch("https://brand-shop-server-ecru.vercel.app/products"),
      },
      {
        path: "/brand/:brandId/:id/details",
        element: (
          <PrivetRouter>
            {" "}
            <DetailsProduct></DetailsProduct>
          </PrivetRouter>
        ),
        loader: () =>
          fetch("https://brand-shop-server-ecru.vercel.app/products"),
      },
      {
        path: "/:cartId/:id/update",
        element: (
          <PrivetRouter>
            <UpdateCartProduct></UpdateCartProduct>
          </PrivetRouter>
        ),
        loader: () => fetch("https://brand-shop-server-ecru.vercel.app/carts"),
      },
    ],
  },
]);

export default myRouter;
