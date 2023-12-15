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
    }
    

}, {timestamps: true} //for sorting earliest/latest user 

);

const User = mongoose.model('User', userSchema);

export default User;