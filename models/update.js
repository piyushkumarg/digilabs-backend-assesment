const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  buttonText: { type: String, required: true },
  status: { type: String, default: true },
});

const Updates = mongoose.model("Updates", updateSchema);
module.exports = Updates;
