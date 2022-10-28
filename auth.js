// GIT = npm install jsonwebtoken
const jwt = require("jsonwebtoken");
// for secret code
const secret = "CourseBookingAPI";

module.exports.createAccessToken = (user) => {
	const data = {
		id : user._id,
		email : user.email,
		isAdmin: user.isAdmin
	}
	return jwt.sign(data, secret, {});
};



