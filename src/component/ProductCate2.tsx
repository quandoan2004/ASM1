import React from "react";

type Props = {};

const ProductCate2 = (props: Props) => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      <div className="relative product-item">
        <div className="h-[250px] w-[250px] overflow-hidden">
          <img
            src="src/assets/image/anh7.png"
            alt="Sand"
            className="h-[250px] w-full object-cover"
          />
        </div>
        <h3 className="absolute top-[20px] left-0 w-[250px] py-4 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#0d1611] font-bold text-[20px] px-4">
          sand
        </h3>
      </div>
      <div className="relative product-item left-[110px]">
        <div className="h-[250px] w-[250px] overflow-hidden">
          <img
            src="src/assets/image/anh6.png"
            alt="Pflanzer"
            className="h-[250px] w-full object-cover"
          />
        </div>
        <h3 className="absolute top-[20px] left-0 w-[250px] py-4 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#0d1611] font-bold text-[20px] px-4">
          pflanzer
        </h3>
      </div>
      <div className="relative product-item">
        <div className="h-[250px] w-[250px] overflow-hidden">
          <img
            src="src/assets/image/anh8.png"
            alt="Schlamkuchen"
            className="h-[250px] w-full object-cover"
          />
        </div>
        <h3 className="absolute top-[20px] left-0 w-[250px] py-4 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#0d1611] font-bold text-[20px] px-4">
          schlamkuchen
        </h3>
      </div>
      <div className="relative product-item  left-[110px]">
        <div className="h-[250px] w-[250px] overflow-hidden">
          <img
            src="src/assets/image/anh9.png"
            alt="Klemmen"
            className="h-[250px] w-full object-cover"
          />
        </div>
        <h3 className="absolute top-[20px] left-0 w-[250px] py-4 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#0d1611] font-bold text-[20px] px-4">
          klemmen
        </h3>
      </div>
    </div>
  );
};

export default ProductCate2;
