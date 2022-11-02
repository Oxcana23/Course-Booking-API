const express = require("express");
const router = express.Router();
// connect 
const User = require("../models/User.js");
const userController = require("../controllers/userController.js");
// connect
const auth = require ("../auth.js");

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
// if from database _id, if postman just id

// router.post("/details", (req, res) => {
// 	userController.getProfile({userId : req.body.id}).then(resultFromController => res.send(resultFromController));
// })



// START OF S39 with SIR EARL
// middleware = auth.verify
// req.headers.authorization = is the token from postman
// router.post("/details", auth.verify, (req, res) => {
// 	// we can get the token by accessing req.headers.authorization
// 	const userData = auth.decode(req.headers.authorization)
// 	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController));
// })


router.post("/details", auth.verify, (req, res) => {
	// We can get the token by accessing req.headers.authorization
	const userData = auth.decode(req.headers.authorization)

	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController));
})


module.exports = router;