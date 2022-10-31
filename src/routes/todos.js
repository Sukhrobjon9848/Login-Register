const router = require("express").Router();
const { GET, POST } = require("../controllers/todo.js");
router.route("/").get(GET);

module.exports = router;
