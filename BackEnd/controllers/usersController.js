
import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
export const CreateUser = async (req , res) =>{
    try{
          const {name , email , password} = req.body

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          const newUser = new UserModel({
           name , email , hashedPassword
      })

        await newUser.save()
        res.status(201).json({message:"user created"} )
    }catch(error){
        res.status(500).json({message: "Error creating user", error: error.message});
    }
}

export const getUser = (req , res) => {
    res.json({message: "User data retrieved successfully", user: req.user});
}