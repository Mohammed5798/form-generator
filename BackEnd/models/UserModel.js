import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true,
        minLenght : 4,
    },
    email:{
        type : String,
        required : true,
        unique : true,
        validate:{
            validator : function(value){
                 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
             message: (props) => `${props.value} is not a valid email address!`,
        }
    },
    password:{
        type : String,
        required : true,
        minLenght : 6
    },
},{timestamps : true})

const User = mongoose.model('User', userSchema);

export default User;