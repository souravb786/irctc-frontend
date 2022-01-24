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
        <div className="w-full flex justify-center">
          <button className="mr-2 ml-2">PNR STATUS</button>
          <button className="mr-2 ml-2 fon">CHART/VACCANCY</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
