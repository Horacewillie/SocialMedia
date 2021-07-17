const User = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");

let auth = async (req, res, next) => {
  let token = req.cookies.w_auth;
  try {
    let decoded = await jwt.verify(token, process.env.SECRETKEY);
    const user = await User.findOne({ _id: decoded, token: token })
      .select("-token");
    if (!user) {
      return res.status(400).json({
        success: false,
      });
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      isAuth: false,
      error: true,
      verification: false,
    });
  }
};

module.exports = { auth };
