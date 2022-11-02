// all process about the database happens here
// represents the course table in mongoDB


const Course = require("../models/Course.js");


module.exports.addCourse = (data) => {
	if(data.isAdmin) {
		let newCourse = new Course ({
			name: data.course.name,
			description: data.course.description,
			price: data.course.price
		})

		return newCourse.save().then((newCourse, error) => {
			if(error){
				return false
			}
			return true
		})
	}
	let message = Promise.resolve({
		message: "User must be ADMIN to access this."
	})
	return message.then((value) =>{
		return value
	})
}

