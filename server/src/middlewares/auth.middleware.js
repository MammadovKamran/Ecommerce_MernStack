const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.sendStatus(401);
  console.log(req.userId);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.userId = decoded.id;
    next();
  });
};

// const User = require('../models/user.model');

// exports.checkRole = (requiredRole) => {
//   return async (req, res, next) => {
//     const userId = req.userId; // Token doğrulama sonrası ayarlanmalı
//     const user = await User.findById(userId).populate('role');
//     if (user && user.role.roleName === requiredRole) {
//       next();
//     } else {
//       res.status(403).send('Erişim reddedildi');
//     }
//   };
// };

module.exports = verifyToken;
