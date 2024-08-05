import React, { useContext } from "react";

import { productCT } from "../context/ProductContext";
import { IProduct } from "../interfaces/products";
import { Link } from "react-router-dom";
import { ICategory } from "../interfaces/category";

const Dashboard = () => {
  const { products, onDelete, categories, onDeleteCategory } =
    useContext(productCT);
  return (
    <div className="max-w-[82.5%] ml-[17%] mt-2">
      <div className=" relative overflow-x-auto  shadow-md sm:rounded-lg">
        <Link to={"/admin/product/add"}>
          <button className="h-9 w-[200px] bg-blue-500 mb-1 rounded-md text-[#fff] ">
            Thêm Sản Phẩm
          </button>
        </Link>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct) => (
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={product.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title}
                </th>
                <td className="px-6 py-4">
                  <img src={product.image} alt="" className="h-20 w-20" />
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4 ">
                  <button>
                    <Link
                      to={`/admin/product/edit/${product.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </button>

                  <button className="ml-3" onClick={() => onDelete(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
