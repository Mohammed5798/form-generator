import formModel from '../models/formModel.js';
import User from '../models/userModel.js';
// import userModel from '../models/userModel.js';
export const createForm = async(req , res)=>{
    const { title , description , userEmail}= req.body;
    try{
       const user = await User.findOne({ email: userEmail });
        if(!user)
            return res.status(404).json({message:"User not foound"})
    const newForm = new formModel({
        title,
        description,
        user:user._id,
    })
    await newForm.save();
     res.status(201).json({
    message: 'Form created successfully',
    form: { title, description , user: user.email },
    
  });
  console.log('Form created:', newForm)
    // res.status(201).json({message:"form created successfully"});
}catch(error){
    res.status(500).json({message:"Error create from", error:error.message})
}
}