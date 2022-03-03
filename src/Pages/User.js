import React from "react";
import IRCTC from "../assets/Logo/IRCTC.png";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../hooks/useAuth";
import { UpdateUserSchema } from "../Components/Schemas";

function User() {
  const { auth, setAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateUserSchema),
  });
  const onSubmit = async (data) => {
    const result = await fetch(
      "http://localhost:8000/api/user/processUser/updateUser",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: `bearer:${auth.user.accessToken}`,
          id: auth.user.user_id,
        },

        body: JSON.stringify({ ...data, isAdmin: false }),
      }
    );
    if (result.status === 200) {
      const resdata = (await result).json();
      setAuth({ user: await resdata });
      navigate(from, { replace: true });

      console.log(await resdata);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-500 to-indigo-500 flex items-center justify-center">
      <form
        className="w-2/6 py-4.5 bg-white px-10 shadow-md hover:shadow-xl rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full justify-center items-center flex">
          <img src={IRCTC} className="w-2/6" />
        </div>
        <div className="flex w-full items-center justify-center mb-3">
          <h2 className='text-4xl font-semibold  text-blue-900 select-none font-["Poppins"]'>
            Update User Details
          </h2>
        </div>
        <input
          placeholder="User Name"
          type="text"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
          {...register("username")}
        />
        {errors.username && (
          <span className="text-red-600 font-medium">
            {errors.username.message}
          </span>
        )}
        <input
          placeholder="Email"
          type="text"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-600 font-medium">
            {errors.email.message}
          </span>
        )}
        <input
          placeholder="Password"
          type="password"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-600 font-medium">
            {errors.password.message}
          </span>
        )}
        <input
          placeholder="Phone No."
          type="number"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
          min={1000000000}
          max={9999999999}
          {...register("phone")}
          onKeyPress={(event) => {
            var allowedChars = "0123456789";
            function contains(stringValue, charValue) {
              return stringValue.indexOf(charValue) > -1;
            }

            var invalidKey =
              event.key.length === 1 &&
              (!contains(allowedChars, event.key) ||
                event.target.value.length === 10);
            invalidKey && event.preventDefault();
          }}
        />
        {errors.phone && (
          <span className="text-red-600 font-medium">
            {errors.phone.message}
          </span>
        )}
        <input
          placeholder="Age"
          type="number"
          min={18}
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
          {...register("age")}
        />
        {errors.age && (
          <span className="text-red-600 font-medium">{errors.age.message}</span>
        )}
        <input
          value={"Update"}
          type="submit"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-500 text-xl mb-4 w-full font-semibold text-white hover:bg-blue-700 cursor-pointer font-["Poppins"]'
        />
      </form>
    </div>
  );
}
export default User;
