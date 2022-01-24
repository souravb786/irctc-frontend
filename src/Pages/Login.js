import React from "react";
import IRCTC from "../assets/Logo/IRCTC.png";
import { color } from "../Components/colors";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-500 to-indigo-500 flex items-center justify-center">
      <form className="w-2/6 py-5 bg-white px-10 shadow-md hover:shadow-xl rounded-lg">
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
          className='px-5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />
        <input
          placeholder="Password"
          type="password"
          className='px-5 py-5 rounded-md shadow-sm bg-blue-50 text-xl mb-4 w-full outline-blue-200 text-slate-600 font-["Poppins"]'
        />
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
      </form>
    </div>
  );
}

export default Login;
