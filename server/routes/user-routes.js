const express = require("express");
const router = express.Router();
const userController = require("../controllers/users-controllers");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, userController.getAllUsers);
router.get("/:id", userController.getById);
router.post("/", userController.createUser);
router.post("/login", userController.loginUser);

module.exports = router;
 