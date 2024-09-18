const mongoose = require("mongoose");

const roleShema = mongoose.Schema({
  roleName: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports= mongoose.model("Role", roleShema);

