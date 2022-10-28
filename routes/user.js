const express = require("express");
const router = express.Router();
// connect 
const User = require("../models/User.js");
const userController = require("../controllers/userController.js");


// ROUTER WITH ENDPOINT
// POST METHOD + promise
router.post("/checkEmail", (req, res) => {
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
})

// POST METHOD
router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})


// authentication
router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})


// S38 ACTIVITY - CODE ALONG
// specific to find id
router.post("/details", (req, res) => {
	userController.getProfile({userId : req.body.id}).then(resultFromController => res.send(resultFromController));
})



// if from database _id, if postman just id




module.exports = router;