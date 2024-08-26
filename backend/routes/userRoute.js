const express = require("express")
const { registerUser, getAllUsers } = require("../controllers/userController")

const router = express.Router()

router.route('/')
    .post(registerUser)
    .get(getAllUsers)


module.exports = router