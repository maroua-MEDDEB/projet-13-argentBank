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
import Language from "./pages/Language";
import Buttons from "./pages/Buttons";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userInfos" element={<UserInfos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
