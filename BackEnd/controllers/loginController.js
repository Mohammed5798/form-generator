import User from '../models/userModel.js';

export const loginUser = async(req,res)=>{
    const {email , password} = req.body;
    try{
        const userLogin = await User.findOne({email})

        if(!userLogin){
            return res.status(401).json({message:"invalid email or password"});
        }

        const isPassword= password === userLogin.password
        if(!isPassword){
            return res.status(401).json({message:"invalid email or password"})
        }

        res.status(200).json({message:"login successful", user: userLogin});

    }catch(error){
        res.status(500).json({message:"error login", error:error.message})
    }
}