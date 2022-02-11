import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Ticket from "../Components/Ticket";
const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-sky-200 to-indigo-600">
      <Header />
      <div className="w-full flex items-center justify-center flex-col">
        <Ticket />
        <div className="w-full flex justify-center mt-4">
          <button className="mr-2 ml-2 font-['Poppins'] px-3 py-3 bg-blue-600 text-white rounded-md font-semibold space-x-1 active:bg-blue-500">
            PNR STATUS
          </button>
          <button className="mr-2 ml-2 font-['Poppins'] px-3 py-3 bg-blue-600 text-white rounded-md font-semibold space-x-1 active:bg-blue-500">
            CHART/VACCANCY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
