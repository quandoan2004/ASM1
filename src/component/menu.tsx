import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="  mt-10 mb-10     grid grid-cols-4  ml-28">
      <div className="h-[60px] w-[200px] bg-[#D2E8CD] flex justify-center items-center rounded-md gap-1">
        <img src="src/assets/image/htgyr 1.png" alt="" />
        <p>Eckige Töpfe</p>
      </div>
      <div className="h-[60px] w-[200px] bg-[#D2E8CD] flex justify-center items-center rounded-md gap-1">
        <img src="src/assets/image/menu2.png" alt="" />
        <p>Runde Töpfe</p>
      </div>
      <div className="h-[60px] w-[200px] bg-[#D2E8CD] flex justify-center items-center rounded-md gap-1">
        <img src="src/assets/image/menu3.png" alt="" />
        <p>Eckige Töpfe</p>
      </div>
      <div className="h-[60px] w-[200px] bg-[#D2E8CD] flex justify-center items-center rounded-md gap-1">
        <img src="src/assets/image/menu4.png" alt="" />
        <p>Eckige Töpfe</p>
      </div>
    </div>
  );
};

export default Menu;
