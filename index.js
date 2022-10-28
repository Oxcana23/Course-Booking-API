const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// connect 
const userRoutes = require("./routes/user.js");


const app = express();


// DB CONNECTION
mongoose.connect("mongodb+srv://admin:admin123@zuitt.25fvemh.mongodb.net/Course-Booking-API?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


// PROMPTS MESSAGE IN THE TERMINAL CONNECTION IS OPEN
mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas"))


// MIDDLEWARES
// convert data into json format
// application or modules turns to blue
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// default url
app.use("/users", userRoutes)


app.listen(process.env.PORT || 4000, () =>{
	console.log(`API is now online on port ${process.env.PORT || 4000}`)
})

