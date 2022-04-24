import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import useAuth from "./hooks/useAuth";
import Layout from "./Components/Layout";
import RequireAuth from "./auth/RequireAuth";
import User from "./Pages/User";
import TrainDetails from "./Pages/TrainDetails";
import Profile from "./Pages/Profile";
const SuccessPage = () => {
  return (
    <div className="grid place-items-center w-full h-screen bg-red-50"> 
      <h1
      className="font-bold text-5xl text-green-600"
      >Ticket Booked</h1>
      <Link to="/" className="p-2 rounded-md bg-blue-500 font-bold text-3xl text-white">
        Home
      </Link>
    </div>
  )
}

function App() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Login />} path="login" />
        <Route element={<Signup />} path="signup" />
        <Route element={<RequireAuth />}>
          <Route element={<Home />} path="/" />
          <Route element={<TrainDetails />} path="/src/:src_id/dest/:dest_id/trains/:trainId" />
            {/* <Route element={<PaymentPage />} path="/payment"/> */}
          <Route element={<Profile />} path="/user/profile"/>
          <Route element={<User />} path="/user/profile/update" />
          <Route element={<SuccessPage />} path="/success_page"/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
