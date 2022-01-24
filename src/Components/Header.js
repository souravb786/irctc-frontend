import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full py-2 flex items-center justify-start shadow-sm">
      <div style={{ flex: 0.1 }} className="flex items-center justify-center">
        <img
          src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png"
          className="w-20"
        />
      </div>
      <div className="flex items-center" style={{ flex: 0.9 }}>
        <div className="px-2 py-2 w-20 font-['Poppins'] rounded-full ml-2 mr-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer select-none">
          Home
        </div>
        <div className="px-2 py-2 w-20 font-['Poppins'] rounded-full ml-2 mr-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer select-none">
          <Link to="/">Trains</Link>
        </div>
        <div className="px-2 py-2 w-20 font-['Poppins'] rounded-full ml-2 mr-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer select-none">
          <Link to="/login">Login</Link>
        </div>
        <div className="px-2 py-2 w-20 font-['Poppins'] rounded-full ml-2 mr-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer select-none">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
