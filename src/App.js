import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import useAuth from "./hooks/useAuth";
import Layout from "./Components/Layout";
import RequireAuth from "./auth/RequireAuth";
import User from "./Pages/User";
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
          <Route element={<User />} path="/user" />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
