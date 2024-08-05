import React, { useContext } from "react";
import { productCT } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { ICategory } from "../interfaces/category";

const ListCate = () => {
  const { categories, onDeleteCategory } = useContext(productCT);
  return (
    <div className="max-w-[82.5%] ml-[17%] mt-2">
      {/* hiển thị bảng danhh sách category */}
      <div className="mt-4 mb-4 ">
        <Link to={"/admin/cate/add"}>
          <button className="h-9 w-[200px] bg-blue-500 mb-1 rounded-md text-[#fff] ">
            Thêm Danh Mục
          </button>
        </Link>
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: ICategory) => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={category.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {category.name}
                  </th>

                  <td className="px-6 py-4 ">
                    <button>
                      <Link
                        to={`/admin/cate/edit/${category.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </button>
                    <button
                      className="ml-3"
                      onClick={() => onDeleteCategory(category.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCate;
