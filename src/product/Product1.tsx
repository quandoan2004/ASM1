import React from "react";

type Props = {};

const Product1 = (props: Props) => {
  return (
    <div className="relative product-item flex flex-col mb-5 w-[240px]  ">
      <div className="h-[320px] w-full overflow-hidden">
        <img
          className="h-full mx-auto object-cover hover:scale-110 duration-500"
          src="src/assets/image/71PeDjwXoJL._AC_UF894,1000_QL80_.jpg"
        />
      </div>
      <h3 className=" text-[#665345] font-semibold text-[14px] px-4 my-4">
        Töpfe
      </h3>
      <div className="flex justify-between px-4 pb-2">
        <span className="text-[#777777] text-[12px]">
          5 by 5 pots for planting
        </span>
        <span> $ 6130.00</span>
      </div>
      {/*  */}
    </div>
  );
};

export default Product1;
