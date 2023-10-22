const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", (req, res) => {
    res.render("home", {
        authorized: req.session.authorized
    })
})
router.get("/logout", (req, res)=> {
    req.session.authorized = false;
    res.redirect("/")
})
router.get("/sign-up", userController.signUpGet);
router.post("/sign-up", userController.signUpPost);

router.get("/login", userController.loginGet);
router.post("/login", userController.loginPost);

module.exports = router