import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "./register";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const navigate = useNavigate();
  const onSubmit = async (registerdata: IUser) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        registerdata
      );
      alert("dang nhap thanh cong");
      navigate("/");
      sessionStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      alert("Sai ten dang nhap hoac mat khau");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h3 className="text-lg font-bold mb-4">Đăng nhập</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: /^\S+@(\S+\.)+\S{2,6}$/,
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">Sai định dạng email</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                Mật khẩu lớn hơn 6 kí tự
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              Nhớ đăng nhập
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Quên mật khẩu?
          </a>
          <br />
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/register"
          >
            Quay lại trang đăng ký?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
