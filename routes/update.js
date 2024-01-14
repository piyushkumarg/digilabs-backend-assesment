const express = require("express");
const router = express.Router();

const {
  handleCreateUpdate,
  handleGetAllUpdateData,
  handleEditUpdateData,
} = require("../controllers/update");

router.post("/", handleCreateUpdate);
router.get("/", handleGetAllUpdateData);
router.put("/:updateId", handleEditUpdateData);

module.exports = router;
