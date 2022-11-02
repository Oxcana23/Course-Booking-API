const express = require("express");
const router = express.Router();
const Course = require("../models/Course.js");
const courseController = require("../controllers/courseController.js");
const auth = require ("../auth.js");

/*Finished Part 3 Activity

1. verify the token that should be provided in order to create a course.


2. in the controller, create a logic inside the addCourse function which will check if the user that is logged in is admin or not. 
- if user is admin, continue with the creation of the course 
- else if the use is not admin, return false
*/


router.post("/create", auth.verify, (req, res) => {
const data = {
	course: req.body,
	isAdmin: auth.decode(req.headers.authorization).isAdmin
	}
	courseController.addCourse(data).then(resultFromController => {
		res.send(resultFromController)
	})
})


module.exports = router






