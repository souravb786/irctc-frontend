import React, { useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Ticket from "../Components/Ticket";
import Train from "../Components/Train";
const Home = () => {
  const [trains, setTrains] = useState([]);
  return (
    <div className="w-full max-h-screen flex flex-col bg-gradient-to-br from-sky-200 to-indigo-600">
      <Header />
      <div className="relative flex flex-row h-screen">
        <div className="w-1/4 h-full inset-0 relative flex justify-center items-center">
          <Ticket setTrains={setTrains} />
        </div>
        <div className="h-full ml-auto absolute right-0 overflow-y-scroll w-3/4">
          {trains.length > 0 ? (
            trains.map((item, idx) => {
              return <Train item={item} key={idx} />;
            })
          ) : (
            <div className="h-full w-full text-center text-6xl font-bold text-white flex items-center justify-center">
              Search for your train
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
