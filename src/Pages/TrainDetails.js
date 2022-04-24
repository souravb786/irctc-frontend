import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import PassangerForm from "../Components/PassangerForm";
import { TicketDetails } from "../Components/Schemas";
import useAuth from "../hooks/useAuth";
import "../Sass/Traindetails.scss";
const date = new Date();
function TrainDetails() {
  let { src_id, dest_id, trainId } = useParams();
  let navigate = useNavigate()
  const [coaches, setCoaches] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(TicketDetails),
  });
  const { auth } = useAuth();
  const [passengerData, setPassengerData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `http://localhost:8000/api/user/train/getCoachOfTrain/${trainId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            access_token: `bearer:${auth.user.accessToken}`,
            id: auth.user.user_id,
          },
        }
      );
      if (result.status === 200) {
        const jsonData = (await result).json();
        // console.log(jsonData);
        setCoaches(await jsonData);
      }
    };
    getData();
  }, []);
  const [passenger, setPassenger] = useState([]);
  const [passengerNum, setPassengerNum] = useState(0);
  const passengerNumber = useRef();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const newData = {
      ...data,
      passengers: passengerData,
      source_id: src_id,
      destination_id: dest_id,
      train_id: trainId,
      train_departure_time: `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`,
    };
    console.log(newData);

    const res = await fetch(
      "http://localhost:8000/api/user/ticket/bookTicketCluster",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: `bearer:${auth.user.accessToken}`,
          id: auth.user.user_id,
        },
        body: JSON.stringify(newData),
      }
    );
    if(res.status === 200)
    {
      navigate("/success-page", {replace:true})
    }
  };
  return (
    <div className="text-black">
      <form id="main_form" onSubmit={handleSubmit(onSubmit)} />
      <section className="h-screen bg-white">
        <TrainDetailsHeader />
        <div className="h-4/5 border-t-2 bg-white">
          <div className="h-5/6 bg-white flex">
            <div className="w-2/5 bg-white max-h-full overflow-y-scroll grid place-items-center">
              <h2 className="text-4xl font-semibold font-['SF Pro Display']">
                Choose the coach
              </h2>
              {coaches.map((item, idx) => {
                return (
                  <div>
                    <input
                      form="main_form"
                      name={`seat_options`}
                      id={`${item.COACH_ID}`}
                      type={"radio"}
                      value={item.COACH_ID}
                      {...register("coach_id")}
                      className="hidden"
                    />
                    <label
                      for={`${item.COACH_ID}`}
                      class="flex flex-col items-center justify-start cursor-pointer text-xl text-black w-max p-3 border-2 rounded-md m-3 bg-white"
                    >
                      <div>
                        <span className="mr-2">Coach Number : {idx + 1}</span>
                        <span className="ml-2">Type : {item.COACH_TYPE}</span>
                      </div>
                      <hr className="w-full bg-slate-600" />
                      <div className="text-left w-full pt-2 pb-1 flex">
                        <span className="mr-2">
                          Seat Available : {item.seat_available}
                        </span>
                        <span className="font-bold flex items-center ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="green"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.PRICE}
                        </span>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="w-3/5 bg-white max-h-full overflow-y-scroll">
              <label
                for="number__seat"
                className="font-bold text-black text-xl ml-2 mr-2"
              >
                Number of Passenger :
              </label>
              <input
                form="main_form"
                {...register("passengerNumber")}
                className="font-semibold text-black text-xl p-2 border-2 rounded-md focus:border-blue-300 ring-0 outline-none"
                type="number"
                id="number__seat"
                ref={passengerNumber}
                onKeyPress={(event) => {
                  var allowedChars = "0123456789";
                  function contains(stringValue, charValue) {
                    return stringValue.indexOf(charValue) > -1;
                  }

                  var invalidKey =
                    event.key.length === 1 &&
                    (!contains(allowedChars, event.key) ||
                      event.target.value.length === 10);
                  invalidKey && event.preventDefault();
                }}
              />
              <button
                className="text-xl p-2 rounded-md bg-blue-500 text-white font-semibold ml-2"
                onClick={(e) => {
                  setPassengerNum(passengerNumber.current.value);
                  e.preventDefault();
                }}
              >
                Confirm Passengers
              </button>
              {Array.apply(0, { length: passengerNum }).map((item, idx) => {
                return (
                  <PassangerForm
                    setPassengerData={setPassengerData}
                    passengerData={passengerData}
                    key={idx}
                    id={idx}
                  />
                );
              })}
            </div>
          </div>
          <div className="h-1/6 bg-white border-t-2 grid place-items-center">
            <input
              type={"submit"}
              form="main_form"
              className="font-semibold text-xl text-white p-3 bg-blue-500 rounded-md cursor-pointer hover:shadow-md shadow-blue-100"
              value={"Confirm Details"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const TrainDetailsHeader = () => {
  return (
    <div className="h-1/5 flex items-center justify-center">
      <Link to="/" className="cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Train_Logo.png"
          className="h-32 rounded-full mr-10"
        />
      </Link>
      <h1 className="font-bold font-sans text-5xl text-black ml-10">
        Train Name Express
      </h1>
    </div>
  );
};
export default TrainDetails;
