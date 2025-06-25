import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLength: 4,
    },
    description:{
        type:String,
        required:true,
        minLength: 10,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps:true})

const From = mongoose.model('Form', formSchema);

export default From;