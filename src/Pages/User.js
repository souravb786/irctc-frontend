import React from "react";
import IRCTC from "../assets/Logo/IRCTC.png";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-500 to-indigo-500 flex items-center justify-center">
      <form className="w-2/6 py-4.5 bg-white px-10 shadow-md hover:shadow-xl rounded-lg">
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
        />
        <input
          placeholder="Email"
          type="text"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />
        <input
          placeholder="Password"
          type="password"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />
        <input
          placeholder="Phone No."
          type="number"
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
          min={1000000000}
          max={9999999999}
        />
        <input
          placeholder="Age"
          type="number"
          min={18}
          className='px-4.5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />

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
