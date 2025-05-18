const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  let response = {};

  try {
    if (!req.headers.authorization) {
      throw new Error("Token is missing from header");
    }
    //req.headers.authrorisation  = "bearer fdf.fdfd.dfdf"
    const userToken = req.headers.authorization.split(" ")[1].trim();
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || "marouaregaya"
    );
    return next();
  } catch (error) {
    console.error("Error in tokenValidation.js", error);
    response.status = 401;
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
