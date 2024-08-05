import React from "react";
import Header from "./Client/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Client/Footer";

type Props = {};

const Client = (props: Props) => {
  return (
    <>
      <Header />
      <div className="max-w-full mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Client;
