import React from "react";
import { useRoutes } from "react-router";
import Home from "./../Components/Home";
import Product from "./../Pages/Product";
import NoMatching from "./../Components/NoMatching";
import About from "../Components/About";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Checkout from "../Pages/Checkout";

const Routing = () => {
  let route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Product />,
    },
    {
      path: "/men",
      element: <Men />,
    },
    {
      path: "/women",
      element: <Women />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path : "/checkout",
      element : <Checkout/>,
    },
    {
      path: "*",
      element: <NoMatching />,
    },
  ]);
  return route;
};

export default Routing;
