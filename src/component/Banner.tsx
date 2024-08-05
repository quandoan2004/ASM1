// Import React nếu bạn đang dùng JavaScript
import React from "react";
// Import hình ảnh từ đường dẫn

// Định nghĩa kiểu Props nếu có, nếu không có thể để trống
type Props = {};

// Định nghĩa component Banner
const Banner = (props: Props) => {
  return (
    <div className="relative bg-gradient-to-r from-[#b2deac] to-[#d9e0d8] h-[550px] max-w-full">
      <div className="absolute top-[110px] left-[190px] p-8 max-w-[570px] z-10">
        <div className="text-[40px] font-bold mb-4 text-[#505F4E]">
          Wir kümmern uns um Ihre schöner Garten und Haus
        </div>
        <div className="text-base mb-6  text-[#2c342a]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <div>
          <button className=" border text-[#2c342a] border-2 border-[#2c342a] py-2 px-4 rounded w-[140px]">
            Lern mehr
          </button>
        </div>
      </div>
      <img
        src="src/assets/image/banner.png"
        alt="banner"
        className="w-[1300px] h-[550px]  absolute top-5 right-0"
      />
    </div>
  );
};

// Export component Banner để có thể sử dụng ở nơi khác
export default Banner;
