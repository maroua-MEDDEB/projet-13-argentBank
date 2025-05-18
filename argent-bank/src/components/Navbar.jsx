import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav class="main-nav">
      <NavLink class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {user != null ? (
          <button onClick={() => dispatch(logout())}>se deconnecter </button>
        ) : (
          <NavLink class="main-nav-item" to="/signin">
            <i class="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
