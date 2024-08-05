import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div>
      <div className="min-h-screen  p-4 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative  ">
            <img
              src="src/assets/image/Mask group.png"
              alt="Beleuchtung"
              className="w-full h-full   object-cover rounded-lg"
            />
            <div className="absolute inset-0  rounded-lg top-4 -right-[93px] ">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Beleuchtung</h2>
                <p className="mt-1">30 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/chinh11.jpg"
              alt="Dünger"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[93px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Dünger</h2>
                <p className="mt-1">20 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/c3.png"
              alt="Erde & Substrate"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[93px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Erde & Substrate</h2>
                <p className="mt-1">20 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/c4.png"
              alt="Bewässerung"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[93px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Bewässerung</h2>
                <p className="mt-1">20 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/chinh10.jpg"
              alt="Töpfe & Behälter"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[93px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Töpfe & Behälter</h2>
                <p className="mt-1">20 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/c5.png"
              alt="Growbox"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[93px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Growbox</h2>
                <p className="mt-1">20 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/c6.png"
              alt="Pflanzen & Gärtnern"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[50px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Pflanzen & Gärtnern</h2>
                <p className="mt-1">30 items</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="src/assets/image/c7.png"
              alt="Lüftung & Klimaanlage"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg  top-4 -right-[50px]">
              <div className="text-white text-center">
                <h2 className="text-xl font-bold">Lüftung & Klimaanlage</h2>
                <p className="mt-1">20 items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
