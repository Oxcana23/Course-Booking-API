const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const auth = require("../auth.js");
 
module.exports.checkEmailExists = (reqBody) => {
	return User.find({email : reqBody.email}).then(result => {
		if(result.length > 0){
			return true;
		}else{
			return false;
		}
	})
}


module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		mobileNo: reqBody.mobileNo,
		password: bcrypt.hashSync(reqBody.password, 10)
	})
	return newUser.save().then((user, error) => {
		if(error){
			return false;
		}else{
			return true;
		}
	})
}


module.exports.loginUser = (reqBody) => {
	return User.findOne({email : reqBody.email}).then(result => {
		if(result == null){
			return false;
		}else{
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);
			if(isPasswordCorrect){
				return {access: auth.createAccessToken(result)}
			}
		}
	})
}



// S38 ACTIVITY - CODE ALONG
// specific to find id
module.exports.getProfile = (data) => {
	return User.findById(data.userId).then(result => {
		return result;
	})
}


// generate an access token
/*
THIS IS WITHOUT BCRYPT
module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		mobileNo: reqBody.mobileNo,
		password: reqBody.password
	})
	return newUser.save().then((user, error) => {
		if(error){
			return false;
		}else{
			return true;
		}
	})
	// saving of database bec we users info to register but with conditional statement. depends whether you want to return a string
}
// result can be named as data
// return can also be a message "The user ..."*/