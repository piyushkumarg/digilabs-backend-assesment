const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConfig");
require("dotenv").config();
var cors = require("cors");
var app = express();

app.use(cors());
const PORT = process.env.PORT || 8080;

const userRoutes = require("./routes/user");
const updateRoutes = require("./routes/update");
dbConnect();

// Middleware
app.use(bodyParser.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/updates", updateRoutes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
