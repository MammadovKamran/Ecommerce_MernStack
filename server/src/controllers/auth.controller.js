/** @format */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth.model.js");
const Role = require("../models/role.model.js");
const sendEmail = require("../utils/mailService.js");

//! Set Default role
const getDefaultRole = async () => {
  const defaultRole = await Role.findOne({ roleName: "User" });
  return defaultRole ? defaultRole._id : null;
};

//! Register Controller

const register = async (req, res) => {
  try {
    const { username, email, number, password } = req.body;

    const user = await Auth.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "bu email ile hesab movcuddur!!" });
    }
    if (password.length < 6) {
      return res.status(401).json({ message: "Sifre 6 simvoldan kicikdir !!" });
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const defaultRole = await getDefaultRole();
    const newUser = await Auth.create({
      username,
      email,
      number,
      password: passwordHash,
      role: defaultRole,
    });
    res.status(201).json({ status: "OK", newUser });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

//! Login Controller

// app.post("/login", (req, res) => {
//   const token = generateJWT(user); // JWT oluştur
//   res.cookie("token", token, {
//     httpOnly: true, // Tarayıcıdan erişilemez
//     secure: process.env.NODE_ENV === "production", // Sadece HTTPS üzerinde çalışır
//     sameSite: "Strict", // CSRF koruması için
//     maxAge: 1000 * 60 * 60 * 24, // 1 gün geçerlilik süresi
//   });
//   res.json({ message: "Login successful" });
// });

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const comparePassword = bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    user.refreshToken = refreshToken;
    await user.save();
    res.cookie("accessToken", accessToken, {
      httpOnly: false,
      secure: false,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: false,
      secure: false,
    });
    res.cookie("id", user._id);
    res.status(201).json({ status: "OK", user });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

//! Refresh Token Controller

const refreshToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = Users.findOne({ where: { id: decoded.id, refreshToken: token } });

    if (!user) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "token refresh successfully", accessToken });
  } catch (err) {
    console.error("Refresh token error:", err);
    res.sendStatus(403);
  }
};

//! Generate Url for Reset Password Controller

const generateResetPassUrl = async (req, res) => {
  try {
    const { email } = req.body;

    var token = crypto.randomBytes(32).toString("hex");
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    sendEmail(
      email,
      "Reset password",
      `Please click on the following link to reset your password: ${resetLink}`
    );

    res.send({ message: "Password reset email sent" });
  } catch (err) {
    res.status(500).send({ message: "Error on requesting password reset", error });
  }
};

//! Reset Password Controller

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const user = await Users.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).send({ message: "Invalid or expired token" });
    }

    user.resetPasswordToken = null;
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordExpires = null;

    await user.save();

    res.send({ message: "Password has been reset successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error on resetting password", error });
  }
};

module.exports = {
  register,
  login,
  refreshToken,
  generateResetPassUrl,
  resetPassword,
};
