import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productCT } from "../context/ProductContext";
import { IProduct } from "../interfaces/products";

type Props = {};

const ProductItem = (props: Props) => {
  const { productsByCate, currentPage, itemsPerPage, handlePageChange } =
    useContext(productCT);

  // Tính toán các sản phẩm hiện tại để hiển thị
  const indexOfLastProduct = currentPage * itemsPerPage; //giai thích : số sản phẩm cuối cùng của trang hiện tại
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage; //số sản phẩm đầu tiên của trang hiện tại
  const currentProducts = productsByCate.slice(
    //lấy ra các sản phẩm của trang hiện tại
    indexOfFirstProduct, //số sản phẩm đầu tiên của trang hiện tại
    indexOfLastProduct //số sản phẩm cuối cùng của trang hiện tại
  );

  // Tính tổng số trang
  const totalPages = Math.ceil(productsByCate.length / itemsPerPage);

  // Hàm chuyển trang trước
  const goToPreviousPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  // Hàm chuyển trang tiếp theo
  const goToNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <>
      <div className="grid grid-cols-3  gap-10 ml-16">
        {currentProducts.map((product: IProduct) => (
          <div
            key={product.id}
            className="relative product-item flex flex-col mb-5 w-[240px]"
          >
            <Link to="/detail">
              <div className="overflow-hidden relative group">
                <img
                  className="h-[320px] w-[235px] object-cover mt-12 group-hover:scale-110 duration-500"
                  src={product.image}
                  alt={product.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                  <div className="flex space-x-2">
                    <button className="bg-white p-2 rounded">
                      <img src="src/assets/image/hoann.png" alt="" />
                    </button>
                    <button className="bg-[#4E7C32] p-2 rounded">
                      <img src="src/assets/image/cart.png" alt="" />
                    </button>
                    <button className="bg-white p-2 rounded ">
                      <img src="src/assets/image/heart.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-[#665345] font-semibold text-[14px] px-4 my-4">
                {product.title}
              </h3>
              <div className="flex justify-between px-4 pb-2">
                <span className="text-[#777777] text-[12px]">
                  {product.category}
                </span>
                <span>${product.price}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-200 text-black disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-200 text-black disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </>
  );
};

export default ProductItem;
