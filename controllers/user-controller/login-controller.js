import User from "../../models/user-model/login-model.js";
import jwt from 'jsonwebtoken';


export const loginProcess = async (req, res) => {
	try {
	  const { email, password } = req.body;
  
	
	  const user = await User.findOne({ email });
	  if (!user) {
		return res.status(401).json({ message: 'Invalid email or password' });
	  }
  
	  const isMatch = await user.comparePassword(password);
	  if (!isMatch) {
		return res.status(401).json({ message: 'Invalid email or password' });
	  }
  
	  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
	  res.status(200).json({ email: email, password: user.password,token });
	} catch (err) {
	  console.error(err.message);
	  res.status(500).json({ message: 'Server error' });
	}
  };