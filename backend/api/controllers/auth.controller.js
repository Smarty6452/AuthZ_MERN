import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
  // console.log(req.body);
  const { username, email, password } = req.body;
  const hashedpassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email,  password: hashedpassword });

  try {
    await newUser.save();

  res.status(201).json({ message: "User created succesfully"})
  } catch (error) {
    res.status(500).json(error.message)
    
  }


  
};