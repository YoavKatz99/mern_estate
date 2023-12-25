import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, //must have a username 
        unique: true  //must be a unique username
    },
    email: {
        type: String, 
        required: true, //must have an email
        unique: true  //must be a unique email
    },
    password: {
        type: String, 
        required: true, //must have a password
        //doesn't have to be unique
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    } 
    

}, {timestamps: true} //for sorting earliest/latest user 

);

const User = mongoose.model('User', userSchema);

export default User;