import React from "react";
import Banner from "../component/Banner";
import Header from "../layout/Client/Header";
import Product from "../component/Product";
import ProductCate from "../component/ProductCate";
import ProductCate2 from "../component/ProductCate2";
import Category from "../component/Category";
import FormSend from "../component/formSend";
import Footer from "../layout/Client/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <div className="w-full shadow-2xl h-[520px]">
        <div className="text-[26px] mb-4 h-[70px] font-extrabold bg-[#f8f4f0] relative">
          <h4 className="absolute top-6 ml-[180px] text-[#505F4E]">
            Best Sellers
          </h4>
        </div>
        <div className="max-w-[1240px] mx-auto  rounded-full">
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
          <div className="">
            <Product />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#f8f4f0] relative  ">
        <div className="  max-w-[1240px]  h-[600px] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="col-span-2 row-span-2 relative left-[150px]  ">
            <ProductCate />
          </div>
          <div className="relative  ">
            <ProductCate2 />
          </div>
        </div>
      </div>
      {/* category */}
      <div className="w-full shadow-2xl ">
        <div className="text-[26px]  h-[70px] font-extrabold bg-[#f8f4f0] relative">
          <h4 className="absolute top-6 ml-[180px] text-[#505F4E]">
            Kategorien
          </h4>
        </div>
        <div className="max-w-full mx-auto bg-[#f8f4f0] ">
          <div className="">
            <Category></Category>
          </div>
        </div>
      </div>
      {/* form */}
      <div>
        <FormSend />
      </div>
    </div>
  );
};

export default Home;
