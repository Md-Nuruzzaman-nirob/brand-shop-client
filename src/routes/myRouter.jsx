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
import ErrorPage from "../components/pages/404Page/ErrorPage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
            {" "}
            <MyCart></MyCart>
          </PrivetRouter>
        ),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivetRouter>
            {" "}
            <BrandProducts></BrandProducts>
          </PrivetRouter>
        ),
      },
      {
        path: "/brand/:brandId/:id/update",
        element: (
          <PrivetRouter>
            {" "}
            <UpdateProduct></UpdateProduct>
          </PrivetRouter>
        ),
      },
      {
        path: "/brand/:brandId/:id/details",
        element: (
          <PrivetRouter>
            {" "}
            <DetailsProduct></DetailsProduct>
          </PrivetRouter>
        ),
      },
      {
        path: "/:cartId/:id/update",
        element: (
          <PrivetRouter>
            <UpdateCartProduct></UpdateCartProduct>
          </PrivetRouter>
        ),
      },
    ],
  },
]);

export default myRouter;
