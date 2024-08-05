import instance from "../config/axios";
import { ICategory } from "../interfaces/category";
import { IProduct } from "../interfaces/products";

export const GetAllProduct = async () => {
  try {
    const { data } = await instance.get("products");
    return data;
  } catch {}
};

export const GetProductById = async (id: string | number) => {
  try {
    const { data } = await instance.get(`products/${id}`);
    return data;
  } catch {}
};
export const addAllProduct = async (product: IProduct) => {
  const { data } = await instance.post("products", product);
  return data;
};

export const UpdateProduct = async (
  productData: IProduct,
  id: string | number
) => {
  try {
    const { data } = await instance.put(`products/${id}`, productData);
    return data;
  } catch {}
};

export const DeleteProduct = async (id: string | number) => {
  try {
    const { data } = await instance.delete(`products/${id}`);
    return data;
  } catch {}
};
// export const GetProductByCategory = async (category: string) => {
//   try {
//     const { data } = await instance.get(`products?category=${category}`);
//     return data;
//   } catch {}
// };
export const GetAllCategory = async () => {
  try {
    const { data } = await instance.get("categories");
    return data;
  } catch {}
};
export const GetCategoryById = async (id: string | number) => {
  try {
    const { data } = await instance.get(`categories/${id}`);
    return data;
  } catch {}
};
export const addCategory = async (category: ICategory) => {
  const { data } = await instance.post("categories", category);
  return data;
};
export const UpdateCategory = async (
  formDataCate: ICategory,
  id: string | number
) => {
  try {
    const { data } = await instance.put(`categories/${id}`, formDataCate);
    return data;
  } catch {}
};
export const DeleteCategory = async (id: string | number) => {
  try {
    const { data } = await instance.delete(`categories/${id}`);
    return data;
  } catch {}
};

export const GetProductByCategory = async (category: string) => {
  try {
    const { data } = await instance.get(`products?category=${category}`);
    return data;
  } catch {}
};
export const GetProductBySearch = async (search: string) => {
  try {
    const { data } = await instance.get(`products?q=${search}`);
    return data;
  } catch {}
};
