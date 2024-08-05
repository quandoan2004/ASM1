import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { productCT } from "../context/ProductContext";
import { IProduct } from "../interfaces/products";
import { ICategory } from "../interfaces/category";
import { GetCategoryById } from "../service/products";

const EditCate = () => {
  const { onSubmitUpdateCategory } = useContext(productCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const cate = await GetCategoryById(id as string | number);
      console.log(cate);

      reset({
        name: cate.name,
      });
    })();
  }, []);
  const onSubmitUDCate = async (formData: ICategory) => {
    onSubmitUpdateCategory(formData, id as string | number);
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitUDCate)}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Update</h2>
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

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Thêm Danh Mục
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCate;
