import React from "react";
import Header from "../layout/Client/Header";
import Footer from "../layout/Client/Footer";
import Feedback from "../component/Feedback";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <div>
      <div className=" h-[500px] max-w-[70%] mx-auto  overflow-hidden flex justify-start gap-[10%] mt-10">
        <div className="">
          <img
            src="src/assets/image/ImageDetail.png"
            alt="Square cultivation pots"
            className="w-[340px] h-[340px] object-cover hover:border-2 border-gray-400 "
          />
          <div className="flex gap-10 ml-8 mt-5  ">
            <img
              src="src/assets/image/ImageDetail.png"
              alt="Square cultivation pots"
              className="w-[65px] h-[65px] object-cover  hover:border-2 border-gray-400"
            />

            <img
              src="src/assets/image/ImageDetail.png"
              alt="Square cultivation pots"
              className="w-[65px] h-[65px] object-cover  hover:border-2 border-gray-400"
            />

            <img
              src="src/assets/image/ImageDetail.png"
              alt="Square cultivation pots"
              className="w-[65px] h-[65px] object-cover  hover:border-2 border-gray-400"
            />
          </div>
        </div>

        <div className="p-6 w-[45%]">
          <p className="text-green-800 font-medium">Plant</p>
          <h2 className="text-[34px] font-bold text-gray-800 t leading-10 ">
            Square cultivation pots 0.27 to 2 litres
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="mt-4">
            <div>
              <span className="text-xl font-bold text-gray-900">$125.00</span>
              <span className="ml-2 text-green-500 px-3 py-1  bg-[#FFEDE0]  rounded-md">
                50%
              </span>
            </div>
            <span className="ml-2 text-gray-500 line-through">$250.00</span>
          </div>
          <div className="mt-4 flex items-center">
            <button className="px-4 py-1 bg-gray-300 rounded-l-lg">-</button>
            <span className="px-4 py-1 border-t border-b  ">3</span>
            <button className="px-4 py-1 bg-gray-300 rounded-r-lg">+</button>
            <button className="ml-4 px-14 py-2 bg-[#4E7C32] text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>

        {/* decription  */}
      </div>
      <div className="max-w-[85%]  mx-auto  overflow-hidden   gap-10 mt-10">
        <h4 className="text-[#4E7C32] text-[30px]">Discription</h4>
        <p className="text-inherit max-w-[80%] font-[inter] text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          harum expedita suscipit voluptatibus qui excepturi labore molestiae
          obcaecati aperiam dolores, voluptate, iure nisi architecto dicta!
          Ipsam recusandae dolores esse quidem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus harum expedita suscipit
          voluptatibus qui excepturi labore molestiae obcaecati aperiam dolores,
          voluptate, iure nisi architecto dicta! Ipsam recusandae dolores esse
          quidem?
        </p>
      </div>
      <div className="max-w-[85%]  mx-auto  overflow-hidden   gap-10 mt-10 mb-10">
        <h4 className="text-[#4E7C32] text-[30px]">About</h4>
        <p className="text-inherit max-w-[80%] font-[inter] text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          harum expedita suscipit voluptatibus qui excepturi labore molestiae
          obcaecati aperiam dolores, voluptate, iure nisi architecto dicta!
          Ipsam recusandae dolores esse quidem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus harum expedita suscipit
          voluptatibus qui excepturi labore molestiae obcaecati aperiam dolores,
          voluptate, iure nisi architecto dicta! Ipsam recusandae dolores esse
          quidem?
        </p>
      </div>
      <Feedback></Feedback>
    </div>
  );
};

export default ProductDetail;
