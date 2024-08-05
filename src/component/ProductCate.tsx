import React from "react";

type Props = {};

const ProductCate = (props: Props) => {
  return (
    <div className="mt-10">
      <div className="relative product-item flex flex-col">
        <div className="h-[510px] w-[420px] overflow-hidden">
          <img
            src="src/assets/image/anh5.png"
            alt="Product"
            className="h-[510px] w-full object-cover"
          />
        </div>
        <h3 className="absolute top-[20px] left-0 w-[420px] py-4 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#0d1611] font-bold text-[20px] px-4">
          Garten Spaten
        </h3>
      </div>
    </div>
  );
};

export default ProductCate;
