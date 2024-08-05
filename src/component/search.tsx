import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import instance from "../config/axios";
import { IProduct } from "../interfaces/products";
import { productCT } from "../context/ProductContext";

const Search = () => {
  const [search] = useSearchParams();
  const [newProducts, setProducts] = useState<IProduct[]>([]);

  const [keywords, setKeywords] = useState<string>("");
  useEffect(() => {
    console.log(search.get("keyword"));
    (async () => {
      const { data } = await instance.get(
        "products?name_like=" + search.get("keyword")
      );
      setProducts(data);
      setKeywords(search.get("keyword") as string);
    })();
  }, []);
  return (
    <div>
      <h1>Ket qua tim kiem theo tu khoa :{keywords}</h1>
      <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-4 mb-[50px]  ">
        {newProducts.map((products: any) => (
          <div key={products.id}>
            <div className="overflow-hidden relative group">
              <img
                className="h-[320px] w-[235px] object-cover mt-12 group-hover:scale-110 duration-500"
                src={products.image}
                alt={products.title}
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
              <h4 className="text-[16px] font-semibold">{products.title}</h4>
              <p className="text-[12px] text-gray-500">{products.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
