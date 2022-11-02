const express = require("express");
const router = express.Router();
const Course = require("../models/Course.js");
const courseController = require("../controllers/courseController.js");
const auth = require("../auth.js")



/*Finished Part 3 Activity: Creating single course
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


// Getting all courses 
router.get("/all", (req, res) => {
	courseController.getAllCourses().then(resultFromController => {
		res.send(resultFromController)
	})
})




// getting all courses that are active only
router.get("/active", (req, res) => {
	courseController.getActiveCourses().then(resultFromController => {
		res.send(resultFromController)
	})
})



// getting one course - url parameters
router.get("/:courseId", (req, res) => {
	courseController.getCourse(req.params.courseId).then(resultFromController => {
		res.send(resultFromController)
	})
})


// editing a single course - no need to use .save()
router.patch("/:courseId/update", auth.verify, (req, res) => {
	courseController.updateCourse(req.params.courseId, req.body).then(resultFromController => {
		res.send(resultFromController)
	})
})


// archiving a course - auth only 
router.patch("/:courseId/archive", auth.verify, (req, res) => {
	courseController.archiveCourse(req.params.courseId).then(
		resultFromController => {
			res.send(resultFromController)
	})
})



module.exports = router






