import React from "react";

type Props = {};

const Product2 = (props: Props) => {
  return (
    <div className="relative product-item flex flex-col mb-5 w-[240px]  ">
      <div className="h-[320px] w-full overflow-hidden">
        <img
          className="h-full mx-auto object-cover hover:scale-110 duration-500"
          src="src/assets/image/anh3.png"
        />
      </div>
      <h3 className=" text-[#665345] font-semibold text-[14px] px-4 my-4">
        Lichthänger-Set
      </h3>
      <div className="flex justify-between px-4 pb-2">
        <span className="text-[#777777] text-[12px]">Light-hanger set </span>
        <span> $ 753.00</span>
      </div>
      {/*  */}
    </div>
  );
};

export default Product2;
