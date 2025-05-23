const User = require("../database/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (serviceData) => {
  try {
    const user = await User.findOne({ email: serviceData.email });
    console.log(serviceData.email);
    console.log(user);
    if (user) {
      return { error: "email deja utilisé" };
    } else {
      const hashPassword = await bcrypt.hash(serviceData.password, 12);

      const newUser = new User({
        email: serviceData.email,
        password: hashPassword,
        firstName: serviceData.firstName,
        lastName: serviceData.lastName,
      });
      await newUser.save();
      let msg = "User successfully created";
      return { msg };
    }
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};

module.exports.getUserProfile = async (serviceData) => {
  try {
    const jwtToken = serviceData.headers.authorization
      .split("Bearer")[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });

    if (!user) {
      throw new Error("User not found!");
    }

    return user.toObject();
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};

module.exports.loginUser = async (serviceData) => {
  try {
    const user = await User.findOne({ email: serviceData.email });

    if (!user) {
      return { error: "User not found!" };
    }

    const isValid = await bcrypt.compare(serviceData.password, user.password);

    if (!isValid) {
      return { error: "Password is invalid" };
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || "marouaregaya",
      { expiresIn: "1d" }
    );
    let msg = "User successfully logged in";
    return { token, user, msg };
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};

module.exports.updateUserProfile = async (serviceData) => {
  try {
    const jwtToken = serviceData.headers.authorization
      .split("Bearer")[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        firstName: serviceData.body.firstName,
        lastName: serviceData.body.lastName,
      },
      { new: true }
    );

    if (!user) {
      throw new Error("User not found!");
    }

    return user.toObject();
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};
