import React, { useContext } from "react";
import { productCT } from "../context/ProductContext";
import { ICategory } from "../interfaces/category";

type Props = {};

const Side3 = (props: Props) => {
  //
  const { categories, selectedCategories, setSelectedCategories } =
    useContext(productCT);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories((prevSelected: any) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((name: any) => name !== categoryName)
        : [...prevSelected, categoryName]
    );
  };

  return (
    <div>
      <div className="w-64 h-screen p-4 bg-white border-r border-gray-200 ">
        <h2 className="text-xl font-bold mb-4">Kategorien</h2>
        <ul className="mb-6 ">
          {categories.map((category: ICategory) => (
            <li key={category.id}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox p-4"
                  checked={selectedCategories.includes(category.name.trim())} //.trim() :
                  onChange={() => handleCategoryChange(category.name.trim())}
                />
                <span>{category.name.trim()}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="mb-6">
          <div className="relative w-full h-[262px] bg-gray-200">
            <img
              src="src/assets/image/side32.png"
              alt="Grow your own favourite plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-30 text-white p-2 w-full h-full">
                <p>Grow your own favourite plant</p>
                <div>
                  <button className="mt-[80%] px-4 py-2 text-[12px] text-white rounded flex gap-1">
                    Shop Now
                    <img src="src/assets/image/chấm.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Filter By Price</label>
          <div className="flex items-center space-x-2">
            <input type="range" min="0" max="8000" className="w-full " />
            <span>$8000</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Filter By Size</label>
          <div className="flex items-center space-x-2 ">
            <input type="range" min="2" max="50" className="w-full" />
            <span>50 mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side3;
