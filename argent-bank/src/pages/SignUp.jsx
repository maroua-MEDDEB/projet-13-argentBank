import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { registerUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
function SignUp() {
  const dispatch = useDispatch();
  // const app = express ()
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleRegister(e) {
    // bloquer l'action par default de balise <form> </form> cest le refresh !
    e.preventDefault();
    // le composant dit lancer l'action qui se trouve dans
    // la slice authSlice de redux

    // on ne peut pas faire :  registerUser(data);
    dispatch(registerUser(data));
  }
  // msg cest un eproprite de l'object auth (auth = {...,...,...msg:"sjgdjsgd"})
  //useselector on va selectionner
  const { msg, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (msg != null) {
      toast.success(msg);
    }
    if (error != "") {
      toast.error(error);
    }
  }, [msg, error]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign Up</h1>
        <form onSubmit={handleRegister}>
          <div className="input-wrapper">
            <label for="username">firstName</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
          </div>
          <div className="input-wrapper">
            <label for="username">lastName</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>
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
              type="text"
              id="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
