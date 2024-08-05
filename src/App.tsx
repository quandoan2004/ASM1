import React from "react";

import { useRoutes } from "react-router-dom";
import Home from "./page/Home";

import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import Client from "./layout/Client";
import Admin from "./layout/Admin";
import Dashboard from "./component/Dashboard";
import AddProductElement from "./component/AddProduct";
import ProductContext from "./context/ProductContext";
import AddCateElemnet from "./component/AddCategory";
import EditProduct from "./component/EditProduct";
import EditCate from "./component/EditCate";
import ListCate from "./component/ListCate";
import Search from "./component/search";
import Register from "./component/register";
import Login from "./component/login";
import PrivateRouter from "./privaterouter";

type Props = {};

const App = (props: Props) => {
  const routes = useRoutes([
    {
      path: "",
      element: (
        <ProductContext>
          <Client />
        </ProductContext>
      ),
      children: [
        {
          path: "",
          element: (
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          ),
        },
        { path: "/detail", element: <ProductDetail /> },
        { path: "search", element: <Search /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "/list", element: <ProductList /> },
      ],
    },
    {
      path: "admin",
      element: (
        <ProductContext>
          <Admin />
        </ProductContext>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "product/add",
          element: <AddProductElement />,
        },
        {
          path: "product/edit/:id",
          element: <EditProduct />,
        },
        {
          path: "category",
          element: <ListCate />,
        },
        {
          path: "cate/add",
          element: <AddCateElemnet />,
        },
        {
          path: "cate/edit/:id",
          element: <EditCate />,
        },
      ],
    },
  ]);
  return routes;
};

export default App;
