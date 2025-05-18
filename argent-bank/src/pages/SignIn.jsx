import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../redux/slices/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { msg, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // cartouche + pistolet
  function handleLogin(e) {
    // bloquer l'action par default de balise <form> </form> cest le refresh !
    e.preventDefault();
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (msg != null) {
      toast.success(msg);
      setTimeout(() => {
        navigate("/userInfos");
      }, 2500); // 2.5 sec
    }
    if (error != "") {
      toast.error(error);
    }
  }, [error, msg]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label for="username">email</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
