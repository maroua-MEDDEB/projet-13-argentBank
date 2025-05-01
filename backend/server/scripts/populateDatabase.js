const axios = require("axios");
const userModel = require("../database/models/userModel");
const signupApi = "http://localhost:3001/api/v1/user/signup";

async function populateDB() {
  const users = [
    {
      firstName: "Tony",
      lastName: "Stark",
      email: "tony@stark.com",
      password: "password123",
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
      email: "steve@rogers.com",
      password: "password456",
    },
  ];
  // recherche des utlisateurs existant
  let existingUsers = await userModel.find();
  // no doit ajouter les utilisateurs dans la base de donnes si et seulement si il ne sont pas creer donc collection vide
  if (existingUsers.length != 0) {
    console.log("users already exists");
  } else {
    users.forEach((user) => {
      axios
        .post(signupApi, user)
        .then((response) => {})
        .catch((error) => console.log(error));
    });
  }
}

module.exports = populateDB;
