const express = require("express");
const router = express.Router();
const Course = require("../models/Course.js");
const courseController = require("../controllers/courseController.js");
const auth = require ("../auth.js");


router.post("/create", (req, res) => {

	courseController.addCourse(req.body).then(resultFromController =>{
		res.send(resultFromController)
	})
	
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));

})




module.exports = router