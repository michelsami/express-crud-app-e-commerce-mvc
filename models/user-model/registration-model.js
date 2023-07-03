import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
	email: {
		type : String,
		required: [true, "Email is required"],
		unique : [true, "There is already an account with this email"]
	},
	password:{
		type:String,
		required: [true, "Password is required"],
	}
})


export const userModel = mongoose.model("users", userSchema)