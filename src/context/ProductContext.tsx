import React, { createContext, useEffect, useState } from "react";
import {
  addAllProduct,
  addCategory,
  DeleteCategory,
  DeleteProduct,
  GetAllCategory,
  GetAllProduct,
  UpdateCategory,
  UpdateProduct,
} from "../service/products";
import { IProduct } from "../interfaces/products";
import { ICategory } from "../interfaces/category";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};
export const productCT = createContext({} as any);
const ProductContext = ({ children }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  //loc
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [productsByCate, setProductsByCate] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); //số sản phẩm trên 1 trang
  //
  useEffect(() => {
    (async () => {
      const data = await GetAllProduct();
      setProducts(data);
    })();
  }, []);

  const onDelete = async (id: number | string) => {
    try {
      if (confirm("Are you sure you want to delete")) {
        await DeleteProduct(id);
        toast.success("Xóa thành công");
        setProducts(products.filter((product: IProduct) => product.id !== id));
      }
    } catch (error) {}
  };

  const onSubmitUpdate = async (formData: IProduct, id: string | number) => {
    try {
      const data = await UpdateProduct(formData, id);
      const newproducts = products.map((product) =>
        product.id == id ? data : product
      );
      setProducts(newproducts);
      toast.success("Cập Nhập Thành Công");
    } catch (error) {}
  };

  const onAdd = async (product: IProduct) => {
    try {
      const newPro = await addAllProduct(product);
      setProducts([...products, newPro]);
      toast.success("Thêm Thành Công");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await GetAllCategory();
      setCategories(data);
    })();
  }, []);

  const onAddCategory = async (category: ICategory) => {
    try {
      const newCategory = await addCategory(category);
      setCategories([...categories, newCategory]);
      toast.success("Thêm thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteCategory = async (id: number | string) => {
    try {
      if (confirm("Are you sure you want to delete")) {
        await DeleteCategory(id);
        toast.success("Xóa thành công");
        setCategories(
          categories.filter((category: ICategory) => category.id !== id)
        );
      }
    } catch (error) {}
  };

  const onSubmitUpdateCategory = async (
    formData: ICategory,
    id: string | number
  ) => {
    try {
      const data = await UpdateCategory(formData, id);
      const newCategory = categories.map((category) =>
        category.id == id ? data : category
      );
      setCategories(newCategory);
      toast.success("Cập nhập thành công");
    } catch (error) {}
  };

  ///lọc
  const productsByCategory = (categoryNames: string[]) => {
    if (categoryNames.length > 0) {
      const filtered = products.filter((product: IProduct) =>
        categoryNames.includes(product.category.trim())
      );
      setProductsByCate(filtered);
    } else {
      setProductsByCate(products);
    }
  };

  useEffect(() => {
    productsByCategory(selectedCategories);
  }, [selectedCategories, products]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <productCT.Provider
      value={{
        products,
        selectedCategories,
        setSelectedCategories,
        productsByCate,
        currentPage,
        itemsPerPage,
        handlePageChange,
        onDelete,
        onAdd,
        onSubmitUpdate,
        onAddCategory,
        categories,
        onDeleteCategory,
        onSubmitUpdateCategory,
      }}
    >
      {children}
    </productCT.Provider>
  );
};

export default ProductContext;
