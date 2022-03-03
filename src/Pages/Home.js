import React, { useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Ticket from "../Components/Ticket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const [trains, setTrains] = useState([]);
  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-200 to-indigo-600">
      <Header />
      <div className="w-full flex items-center justify-center flex-col">
        <Ticket setTrains={setTrains} />
        <div className="w-full flex justify-center mt-4">
          <button className="mr-2 ml-2 font-['Poppins'] px-3 py-3 bg-blue-600 text-white rounded-md font-semibold space-x-1 active:bg-blue-500">
            PNR STATUS
          </button>
          <button className="mr-2 ml-2 font-['Poppins'] px-3 py-3 bg-blue-600 text-white rounded-md font-semibold space-x-1 active:bg-blue-500">
            CHART/VACCANCY
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-700 flex justify-center h-full py-5">
        <div className="w-2/4 bg-gray-800 shadow-lg shadow-gray-900 rounded-sm px-5 py-3">
          <h1 className="w-full font-medium font-['Poppins'] text-white text-lg border-b border-slate-200">
            Trains meri hai
          </h1>
          <div className="flex items-start justify-center ">
            <span className="px-2 py-2 bg-blue-500 text-white mx-4 rounded-sm font-normal  font-['Poppins'] text-base">
              Source
            </span>
            <div>
              <FontAwesomeIcon icon="fa-regular fa-arrow-right-arrow-left" />
            </div>

            <span className="px-2 py-2 bg-blue-500 text-white mx-4 rounded-sm font-normal  font-['Poppins'] text-base">
              Destination
            </span>
          </div>
        </div>
        {trains.map((item, idx) => {
          return (
            <div key={idx} className="w-2/4 bg-red-500">
              <h1>{item.NAME}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
