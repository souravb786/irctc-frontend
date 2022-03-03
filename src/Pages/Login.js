import React, { useState } from "react";
import IRCTC from "../assets/Logo/IRCTC.png";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../Components/Schemas";
import { yupResolver } from "@hookform/resolvers/yup";
// import { env } from "process";
function Login() {
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const onSubmit = async (data) => {
    const result = await fetch(`http://localhost:8000/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      const resdata = (await result).json();
      console.log(resdata);
      if ((await resdata).error.length > 0) {
        setError((await resdata).error);
      } else {
        setError("");
        setAuth({ user: await resdata });
        navigate(from, { replace: true });
      }

      // console.log(await resdata);
    }
  };
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-500 to-indigo-500 flex items-center justify-center">
      <form
        className="w-2/6 py-5 bg-white px-10 shadow-md hover:shadow-xl rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full justify-center items-center flex">
          <img src={IRCTC} className="w-2/6" />
        </div>
        <div className="flex w-full items-center justify-start mb-3">
          <h2 className='text-4xl font-semibold  text-blue-900 select-none font-["Poppins"]'>
            Login
          </h2>
        </div>
        <input
          placeholder="Email"
          type="text"
          {...register("email")}
          className='px-5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />
        {errors.email && (
          <span className="text-red-700 font-medium">
            {errors.email.message}
          </span>
        )}
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
          className='px-5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />
        {errors.password && (
          <span className="text-red-700 font-medium">
            {errors.password.message}
          </span>
        )}
        <input
          value={"Login"}
          type="submit"
          className='px-5 py-5 rounded-md shadow-sm bg-blue-500 text-xl mb-4 w-full font-semibold text-white hover:bg-blue-700 cursor-pointer font-["Poppins"]'
        />
        <div>
          <p className='text-slate-700 text-base select-none font-["Poppins"]'>
            Dont have an account?
            <span className="ml-2 text-blue-700 cursor-pointer select-none">
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </div>
        {error.length > 0 && (
          <spna className="text-red-700 px-5 py-5 text-xl">{error}</spna>
        )}
      </form>
    </div>
  );
}

export default Login;
