const router = require("express").Router();
const { LOGIN, REGISTER } = require("../controllers/authController.js");
const { registerValidator } = require("../middlewares/validator.js");
router.post("/login", LOGIN);
router.post("/register", registerValidator, REGISTER);

module.exports = router;
