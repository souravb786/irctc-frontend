import React from "react";
import { Link } from "react-router-dom";
function Train({ item }) {
  console.log(item);
  return (
    <div className="w-2/4 bg-white shadow-lg  rounded-md px-5 py-3 m-2 ">
      <h1 className="w-full font-medium font-['Poppins'] text-black text-lg border-b border-slate-200">
        {item.NAME}
      </h1>
      <div className="flex justify-between w-1/2 py-2 items-center ">
        <span className="px-2 py-2 ring-2 ring-blue-500 bg-gray-100 text-black rounded-sm font-normal  font-['Poppins'] text-base">
          {item.Source}
        </span>
        <div className="rounded-full p-1 bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
        <span className="px-2 py-2 ring-2 ring-blue-500 bg-gray-100 text-black rounded-sm font-normal  font-['Poppins'] text-base">
          {item.Destination}
        </span>
      </div>
      <Link
        className="p-2 rounded-md bg-blue-500 text-white shadow-md"
        to={`/src/${item.source_id}/dest/${item.destination_id}/trains/${item.TRAIN_ID}`}
      >
        Book Seat
      </Link>
    </div>
  );
}

export default Train;
