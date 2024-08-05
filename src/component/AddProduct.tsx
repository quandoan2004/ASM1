import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { productCT } from "../context/ProductContext";
import { IProduct } from "../interfaces/products";
import { ICategory } from "../interfaces/category";

const AddProductElement = () => {
  const { onAdd, categories } = useContext(productCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();
  const navigate = useNavigate();
  const onSubmitadd = async (formData: IProduct) => {
    onAdd(formData);
    navigate("/admin/dashboard");
    reset(); //reset lại form sau khi thêm
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitadd)}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Thêm Sản Phẩm
        </h2>
        <div className="form-group space-y-4">
          <div>
            <input
              className="form-control input w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              {...register("title", {
                required: true,
                minLength: 6,
              })}
              placeholder="Title"
            />
            {errors.title && (
              <span className="text-red-600 text-sm">
                Yêu cầu nhập đủ 6 ký tự
              </span>
            )}
          </div>
          <div>
            <input
              className="form-control input w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              {...register("price", {
                required: true,
                min: 0,
              })}
              placeholder="price"
            />
            {errors.price && (
              <span className="text-red-600 text-sm">
                Yêu cầu nhập giá và lớn hơn 0
              </span>
            )}
          </div>
          <div>
            <input
              className="form-control input w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              {...register("image", {
                required: true,
              })}
              placeholder="image"
            />
            {errors.image && (
              <span className="text-red-600 text-sm">Yêu cầu nhập ảnh</span>
            )}
          </div>
          {/* call api gọi ra category  */}
          <div>
            <select
              className="form-control input w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("category", {
                required: true,
              })}
            >
              {categories.map((category: ICategory) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-600 text-sm">
                Yêu cầu chọn danh mục
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Thêm Sản Phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductElement;
