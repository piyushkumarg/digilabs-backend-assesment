const Users = require("../models/user");

const handleCreateUser = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await Users.create(body);

    res.status(200).json({
      message: "User created successfully!",
      users: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again!" });
  }
};

const handleGetAllUser = async (req, res) => {
  try {
    const allUsers = await Users.find({});

    res.status(200).json({
      users: allUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  handleCreateUser,
  handleGetAllUser,
};
