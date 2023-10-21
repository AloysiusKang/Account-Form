const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/sign-up", userController.signUpGet)
router.post("/sign-up", userController.signUpPost);

router.get("/login", (req, res) => {
    res.render("login");
})

module.exports = router