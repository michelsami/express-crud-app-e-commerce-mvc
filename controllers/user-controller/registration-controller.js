
import { userModel } from "../../models/user-model/registration-model.js";
import bcrypt from 'bcrypt'



export const registrationProcess = async(req, res)=>{
	try {
		const {email , password, repeatPassword} = req.body;
	if(repeatPassword !== password){
		return res.status(400).json({message : "Passwords are not identical"})
	}

	const existingUser = await userModel.findOne({email});

	if(existingUser){
		return res.status(400).json({message : "Email already exists"})
	}

	
	const salt = await bcrypt.genSalt( Number(process.env.saltRounds));

	const hashedPassword = await bcrypt.hash(password, salt);

	const createUser = await userModel.create({email: email, password: hashedPassword});
	return res.status(201).json({message : "User created successfully",details : `user created : ${email}`,  "success": true})

	} catch (error) {
		console.log(`Error in registrationProcess/registration-controller.js/user-controller/controllers : ${error}`)
	}
}