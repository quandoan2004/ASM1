import React, { useContext } from "react";
import { productCT } from "../context/ProductContext";

type Props = {};

const Product = (props: Props) => {
  const { products } = useContext(productCT);
  //chỉ cho hiện 4 sp
  const newProducts = products.slice(0, 4);
  return (
    <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-4 mb-[50px]  ">
      {newProducts.map((product: any) => (
        <div key={product.id}>
          <div className="overflow-hidden relative group">
            <img
              className="h-[320px] w-[235px] object-cover mt-12 group-hover:scale-110 duration-500"
              src={product.image}
              alt={product.title}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
              <div className="flex space-x-2">
                <button className="bg-white p-2 rounded">
                  <img src="src/assets/image/hoann.png" alt="" />
                </button>
                <button className="bg-[#4E7C32] p-2 rounded">
                  <img src="src/assets/image/cart.png" alt="" />
                </button>
                <button className="bg-white p-2 rounded ">
                  <img src="src/assets/image/heart.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-[16px] font-semibold">{product.title}</h4>
            <p className="text-[12px] text-gray-500">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
