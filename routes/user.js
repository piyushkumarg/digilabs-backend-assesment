const express = require("express");
const router = express.Router();

const { handleCreateUser, handleGetAllUser } = require("../controllers/user");

router.post("/", handleCreateUser);
router.get("/", handleGetAllUser);

module.exports = router;
