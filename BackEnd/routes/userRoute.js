const router = require("express").Router();

const { userRegister } = require("../controllers/userController");
const { registerValidation } = require("../validation");

router.post("/register", registerValidation, userRegister);

module.exports = router;
