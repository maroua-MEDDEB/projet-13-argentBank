import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    // bloquer l'action par default de balise <form> </form> cest le refresh !
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.body.token);
      });
  }
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
