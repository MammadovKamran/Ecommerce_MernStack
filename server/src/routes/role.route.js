const express = require("express");
const { createRole } = require("../controllers/role.controller");
const router = express.Router();

router.post("/createRole", createRole);

module.exports = router;
