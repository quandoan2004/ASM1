import React from "react";

type Props = {};

const Product3 = (props: Props) => {
  return (
    <div className="relative product-item flex flex-col mb-5 w-[240px]  ">
      <div className="h-[320px] w-full overflow-hidden">
        <img
          className="h-full mx-auto object-cover hover:scale-110 duration-500"
          src="src/assets/image/anh4.png"
        />
      </div>
      <h3 className=" text-[#665345] font-semibold text-[14px] px-4 my-4">
        Licht
      </h3>
      <div className="flex justify-between px-4 pb-2">
        <span className="text-[#777777] text-[12px]">Dress </span>
        <span className="text-gray-400 line-through"> $ 6130.00</span>
        <span className="text-red-500 ml-2">$1155.00</span>
      </div>
      {/*  */}
    </div>
  );
};

export default Product3;
