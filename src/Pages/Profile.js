import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const userDetailUrl = "http://localhost:8000/api/user/processUser/getUser";
const ticketDetailUrl =
  "http://localhost:8000/api/user/ticket/getTicketClustersOfUser";


function Profile() {
  const { auth, setAuth } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  const [ticketData, setTicketData] = useState([]);
  
  const cancelTicket = (id) => {
    fetch(`http://localhost:8000/api/user/ticket/deleteTicketCluster/${id}`, 
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: `bearer:${auth.user.accessToken}`,
        id: auth.user.user_id,
      },
    }).then(res => res.json()).then(data => console.log(data))
  }
  // const DeleteAccount = () => {
  //   var status =  window.confirm("Confirm to Delete account")
  //   if(status)
  //   {
  //     fetch()
  //   }
  // }
  useEffect(() => {
    const Fetchmethod = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: `bearer:${auth.user.accessToken}`,
        id: auth.user.user_id,
      },
    };
    // const [userData, ticketData] = 
    
    async function getData (Fetchmethod) {
      console.log(Fetchmethod)
      const [userData, ticketData] = await Promise.all([
        fetch(userDetailUrl, Fetchmethod),
        fetch(ticketDetailUrl, Fetchmethod),
      ]);
      const [userDetails, ticketDetails] = await Promise.all([userData.json(), ticketData.json()]);
      setTicketData(ticketDetails)
      setUserDetails(userDetails)
    };

    getData(Fetchmethod)
    // console.log(userData);
    // setUserDetails(userData);
    // setTicketData(ticketData);
  }, []);
  return (
    <div className="bg-white">
      <header className="p-2 flex gap-2">
        <Link
          to="/"
          className="p-5 bg-blue-500 text-center flex align-center justify-center rounded-md text-white text-3xl font-medium hover:shadow-md hover:bg-blue-600"
        >
          Home
        </Link>
        <button
          className="bg-blue-500 flex gap-2 items-center justify-center rounded-md p-5 hover:shadow-md hover:bg-blue-600"
          onClick={() => {
            var status = window.confirm("Do you really want to logout?");
            if (status) {
              setAuth({});
            }
          }}
        >
          <span className="text-3xl font-medium text-white">Logout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </header>
      <main className="grid gap-7 bg-white w-full h-full p-5 lg:pr-10 lg:pl-10 lg:grid-cols-2 md:pr-5 md:pl-5 md:grid-cols-2 sm:grid-cols-1">
        {/* user card */}
        <div className="h-96   grid grid-cols-3 gap-0">
          <div className="bg-purple-700 rounded-tl-lg rounded-bl-lg col-span-1 flex items-center justify-center p-5">
            <img
              src={`https://avatars.dicebear.com/api/human/${Math.floor(
                Math.random() * 5000
              )}.svg`}
              className="w-full p-2 rounded-full bg-gray-400 border-8 border-white shadow-lg "
            />
          </div>
          <div className="rounded-tr-lg rounded-br-lg col-span-2 bg-purple-600 pr-2 pl-2 flex flex-col pt-6 pb-6 items-start justify-center gap-3">
            <p className="text-2xl font-sans font-medium text-white">
              User Name:{" "}
              <span className="text-zinc-300">{userDetails.USER_NAME}</span>
            </p>
            <p className="text-2xl font-sans font-medium text-white">
              Phone Number:{" "}
              <span className="text-zinc-300">{userDetails.PHONE_NUMBER}</span>
            </p>
            <p className="text-2xl font-sans font-medium text-white">
              Email: <span className="text-zinc-300">{userDetails.EMAIL}</span>
            </p>
            <p className="text-2xl font-sans font-medium text-white">
              Age: <span className="text-zinc-300">{userDetails.AGE}</span>
            </p>
          </div>
        </div>

        {/* ticket section */}
        <div className="h-96 bg-purple-700 rounded-lg p-3 overflow-y-scroll scroll-smooth">
          <table className="w-full">
            <tr>
              <th className="bg-purple-700 text-left text-2xl text-white font-bold p-2 border-2 border-gray-200">
                Train
              </th>
              <th className="bg-purple-700 text-left text-2xl text-white font-bold p-2 border-2 border-gray-200">
                Source
              </th>
              <th className="bg-purple-700 text-left text-2xl text-white font-bold p-2 border-2 border-gray-200">
                Destination
              </th>
              <th className="bg-purple-700 text-left text-2xl text-white font-bold p-2 border-2 border-gray-200">
                Action
              </th>
            </tr>
            {ticketData.map(
              (
                {
                  TRAIN_NAME,
                  SOURCE_NAME,
                  DESTINATION_NAME,
                  TICKET_CLUSTER_ID,
                },
                idx
              ) => {
                return (
                  <tr
                    key={idx}
                    className={idx % 2 == 0 ? `bg-purple-600` : `bg-purple-500`}
                  >
                    <td className="text-xl font-medium text-white p-2 border-2 border-gray-200">
                      {TRAIN_NAME}
                    </td>
                    <td className="text-xl font-medium text-white p-2 border-2 border-gray-200">
                      {SOURCE_NAME}
                    </td>
                    <td className="text-xl font-medium text-white p-2 border-2 border-gray-200">
                      {DESTINATION_NAME}
                    </td>
                    <td className="text-xl font-medium text-white p-2 border-2 border-gray-200">
                      <button
                        className="bg-red-400 hover:bg-red-600 p-2 rounded-lg hover:shadow-md"
                        id={`${TICKET_CLUSTER_ID}`}
                        onClick={(e) => {cancelTicket(TICKET_CLUSTER_ID)}}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </table>
        </div>
        <div className="bg-white border-2 border-gray-200 p-8 rounded-md grid grid-cols-2 gap-5">
          <button className="p-5 bg-white rounded-md hover:bg-red-600 hover:text-white text-red-500 border-red-500 border-2 font-semibold text-2xl hover:shadow-lg">
            Delete Account
          </button>
          <Link 
            to='/user/profile/update'
          className="bg-green-500 p-5 rounded-md hover:bg-green-600 text-white text-center font-semibold text-2xl hover:shadow-lg">
            Update Details
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Profile;
