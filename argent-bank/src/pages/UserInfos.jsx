import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/slices/authSlice";

function UserInfos() {
  const [userData, setUserData] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);
  //autre solution
  const [userData2, setUserData2] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setUserData2(user);
    }
  }, []);
  // ------------------------------------------------
  const { token } = useSelector((state) => state.auth);

  function getUserInfos() {
    axios
      .get("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setUserData(result.data.body);
        console.log(result.data);
      });
    /*

 let data = await axios
      .get("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        
     setUserData(data)

      */
  }

  useEffect(() => {
    getUserInfos();
  }, []);
  const dispatch = useDispatch();
  function handleUpdateUserData() {
    axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIsEditMode(false);
  }

  function handleUpdateUserDataWithRedux() {
    dispatch(
      updateUser({
        token: token,
        firstName: userData.firstName,
        lastName: userData.lastName,
      })
    );
    setIsEditMode(false);
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditMode == false && (
          <>
            {" "}
            <h1>
              Welcome back
              <br />
              {userData?.firstName + "  " + userData?.lastName}
            </h1>
            <button className="edit-button" onClick={() => setIsEditMode(true)}>
              Edit Name
            </button>
          </>
        )}

        {isEditMode == true && (
          <>
            <label>
              {" "}
              new firstName
              <input
                type="text"
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              {" "}
              new lastName
              <input
                type="text"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </label>
            <br />
            <button onClick={handleUpdateUserData}>
              valider la mise a jour
            </button>
            <button onClick={handleUpdateUserDataWithRedux}>
              valider la mise a jour avec redux
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserInfos;
