import React from "react";
import Header from "../layout/Client/Header";
import Footer from "../layout/Client/Footer";
import Menu from "../component/menu";
import Side3 from "../component/Side3";
import Product from "../component/Product";
import FormSend from "../component/formSend";
import ProductItem from "../component/ProductItem";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div>
      <div className="max-w-full bg-gradient-to-r from-[#b2deac] to-[#d9e0d8] h-[150px] relative">
        <h2 className="text-[#505F4E] text-[30px] font-extrabold absolute top-[30%] left-[10%]">
          Töpfe & Behälter
        </h2>
      </div>
      <div className="">
        <Menu></Menu>
      </div>
      <div className="my-5 ml-20">
        <div className="flex space-x-4">
          <div>
            <label htmlFor="sort-by" className="mr-2">
              Sort By:
            </label>
            <select id="sort-by" className="border rounded-md px-8 py-1">
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Popular">Popular</option>
            </select>
          </div>
          <div>
            <label htmlFor="show" className="mr-2">
              Show:
            </label>
            <select id="show" className="border rounded-md px-8 py-1">
              <option value="Default">Default</option>
              <option value="Compact">Compact</option>
              <option value="Expanded">Expanded</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex max-w-[95%]">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto">
            <div className="">
              <div className="">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Side3 />
        </div>
      </div>
      <div className="mt-5">
        {" "}
        {/* Điều chỉnh margin-top ở đây */}
        <FormSend></FormSend>
      </div>
    </div>
  );
};

export default ProductList;
