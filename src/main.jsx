import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./routes/myRouter.jsx";
import ContextProvider from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={myRouter}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>
);
