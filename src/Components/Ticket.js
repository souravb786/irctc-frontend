import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ticketSchema } from "../Components/Schemas";
import { useParams } from "react-router-dom";
function Ticket({ setTrains }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ticketSchema) });
  const { auth } = useAuth();
  const [stations, setStations] = useState([]);
  const [source, setSource] = useState( -1)
  const [destination, setDestination] = useState( -1)
  const [sourceName, setSourceName] = useState("")
  const [destinationName, setDestinationName] = useState("")
  useEffect(()=> {
    stations.forEach(ele => {
      if(ele.STATION_ID == destination) setDestinationName(ele.STATION_NAME)
    })
  }, [destination])
  useEffect(()=> {
    stations.forEach(ele => {
      if(ele.STATION_ID == source) setSourceName(ele.STATION_NAME)
    })
  }, [source])
  
  useEffect(() => {
    console.log("Effect Called");
    fetch("http://localhost:8000/api/user/station/getAllStation", {
      headers: {
        "Content-Type": "application/json",
        access_token: `bearer:${auth.user.accessToken}`,
        id: auth.user.user_id,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, [auth]);

  const submitFun = async (data) => {
    const res = await fetch(
      `http://localhost:8000/api/user/train/getTrain/${data.source}/${data.destination}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: `bearer:${auth.user.accessToken}`,
          id: auth.user.user_id,
        },
      }
      );
      
      stations.forEach(element => {
        if(element.STATION_ID === data?.source)
        {
          setSource(element.STATION_NAME)
        }
        else if(element.STATION_ID === data?.destination) setDestination(element.STATION_NAME)  
      });
      
    console.log(`Source: ${source}`);
    console.log(`Destination: ${destination}`);
    const Data = await res.json()   
    setTrains(Data.map((item, idx) => {
      return {...item, Source: sourceName, Destination: destinationName, source_id: source, destination_id : destination }
    }));
    // console.log(await res.json());
  };
  return (
    <form
      className="w-max rounded-lg shadow-lg bg-white py-4 px-5"
      onSubmit={handleSubmit(submitFun)}
    >
      <div className="w-full flex items-center justify-center h-20">
        <h1 className="text-3xl font-['Poppins'] font-semibold">Search Your Train</h1>
      </div>
      <div className="flex  justify-start w-full py-2 px-8 flex-col">
        <select
          {...register("source")}
          defaultValue={-1}
          placeholder={"Source"}
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mt-2 mb-2"
          onChange={(e) => setSource(e.target.value)}
        >
          <option value={-1}>Source</option>
          {stations.map((ele, idx) => {
            return (
              <option value={ele.STATION_ID} key={idx}>
                {ele.STATION_NAME}
              </option>
            );
          })}
        </select>
        {errors.source && <span>{errors.source.message}</span>}
        <select
          {...register("destination")}
          defaultValue={-1}
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mt-2 mb-2"
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value={-1}>Destination</option>
          {stations.map((ele, idx) => {
            return (
              <option value={ele.STATION_ID} key={idx}>
                {ele.STATION_NAME}
              </option>
            );
          })}
        </select>
        {errors.destination && <span>{errors.destination.message}</span>}
        <input
          placeholder="Date"
          className={`text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mt-2 mb-2 ${
            errors.date && `active:ring-2 ring-red-500`
          }`}
          type="date"
          min={"2022-02-11"}
          {...register("date", { required: true })}
        />
        {errors.date && (
          <span className="text-red-500 text-lg">{errors.date.message}</span>
        )}
        <select
          defaultValue={"Class"}
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mt-2 mb-2"
        >
          <option selected>Select Class</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC chair</option>
          <option>AC Bus</option>
        </select>
        <select
          defaultValue={"Class"}
          className="text-xl w-72 font-medium font-['Poppins'] bg-blue-100 text-gray-500 shadow-sm px-2 py-2 rounded-sm mt-2 mb-2"
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
