const express = require("express");
const {
  register,
  login,
  resetPassword,
  generateResetPassUrl,
  refreshToken,
} = require("../controllers/auth.controller");

const router = express.Router();

//! User
router.post("auth/register", register);
router.post("auth/login", login);
router.post("auth/refreshToken", refreshToken);

//! Reset Password
router.post("auth/resetPassword", resetPassword);
router.post("auth/generateResetPassUrl", generateResetPassUrl);

module.exports = router;
