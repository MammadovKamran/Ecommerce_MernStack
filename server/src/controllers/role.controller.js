const Role = require("../models/role.model.js");

const createRole = async (req, res) => {
  try {
    const { roleName } = req.body;
    const role = await Role.create({ roleName });
    res.status(201).json({ status: "OK", role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createRole };
