// all process about the database happens here
// represents the course table in mongoDB


const Course = require("../models/Course.js");


module.exports.addCourse = (reqBody) => {
	let newUser = new User ({
		isAdmin: false
	})

	return newUser.save().then((newUser, error) =>{
		if(error){
			return false
		}
		return true
	})


	let newCourse = new Course ({
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price
	})

	return newCourse.save().then((newCourse, error) => {
		if(error){
			return false
		}
		return true
	})
}