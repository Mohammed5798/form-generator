import User from '../models/UserModel.js';
import UserModel from '../models/UserModel.js';

export const CreateUser = async (req , res) =>{
    try{
          const {name , email , password} = req.body

          const newUser = new UserModel({
           name , email , password
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