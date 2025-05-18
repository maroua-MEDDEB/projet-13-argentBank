import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import UserInfos from "./pages/UserInfos";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./layout/PrivateRoutes";
function App() {
  return (
    <>
      <ToastContainer /> <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/userInfos"
          element={
            <PrivateRoutes>
              <UserInfos />
            </PrivateRoutes>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
