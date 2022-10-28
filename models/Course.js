const mongoose = require("mongoose");

// SCHEMA
const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Course Name is Required!"]
	},
	description: {
		type: String,
		required: [true, "Description is Required!"]
	},
	price: {
		type: Number,
		required: [true, "Price is Required!"]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	enrollees: [{
		userId: {
			type: String,
			required: [true, "UserId is Required!"]
		},
		enrolledOn:{
			type: Date,
			default: new Date()
		}
	}]
})


// MODEL - serves as an authorizing agent to approve data export. Cap first letter. model and schema are always together. 
module.exports = mongoose.model("Course", courseSchema);