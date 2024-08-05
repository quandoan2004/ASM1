import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { productCT } from "../context/ProductContext";
import { IProduct } from "../interfaces/products";
import { ICategory } from "../interfaces/category";

import { ToastContainer, toast } from "react-toastify";
import { Button } from "primereact/button";
import "react-toastify/dist/ReactToastify.css";
const AddCateElemnet = () => {
  const { onAddCategory } = useContext(productCT);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>();
  const navigate = useNavigate();
  const onSubmitadd = async (formData: ICategory) => {
    onAddCategory(formData);
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
              {...register("name", {
                required: true,
                minLength: 6,
              })}
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                Yêu cầu nhập đủ 6 ký tự
              </span>
            )}
          </div>

          <div className="card flex justify-content-center ">
            <Button
              label="Thêm Danh Mục"
              icon="pi pi-check"
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCateElemnet;
