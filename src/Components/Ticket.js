import React from "react";

function Ticket() {
  return (
    <form className="w-3/6 rounded-lg shadow-lg bg-white py-4 px-5 ml-10 mt-10">
      <div className="w-full flex items-center justify-center h-20">
        <h1 className="text-3xl font-['Poppins'] font-semibold">Book Ticket</h1>
      </div>
      <div className="flex items-center justify-start w-full py-2 px-8">
        <input
          placeholder="From"
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mr-10"
          type="text"
        />
        <input
          placeholder="To"
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mr-10"
          type="text"
        />
      </div>
      <div className="flex items-center justify-start w-full py-2 px-8">
        <input
          placeholder="Date"
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mr-10"
          type="date"
        />
        <select
          defaultValue={"Class"}
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mr-10"
        >
          <option selected>Select Class</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC Bus</option>
        </select>
      </div>
      <div className="flex items-center justify-start w-full py-2 px-8">
        <select
          defaultValue={"Class"}
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm"
        >
          <option selected>General</option>
          <option>Ladies</option>
          <option>Ladies</option>
          <option>Ladies</option>
        </select>
      </div>
      <div className="w-full px-8 py-2">
        <input
          className="w-72 text-2xl font-medium font-['Poppins'] bg-blue-500 hover:bg-blue-700 hover:text-white cursor-pointer rounded-md px-2 py-2 text-white"
          type={"submit"}
        />
      </div>
    </form>
  );
}

export default Ticket;
