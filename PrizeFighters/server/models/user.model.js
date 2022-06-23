const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[
            true,
            "First Name is required"
        ],
        minlength:[2, "First Name must be at least 2 characters"]},
    
    lastName:{
        type: String,
        required:[
            true,
            "Last Name is required"
        ],
        minlength:[2, "Last Name must be at least 2 characters"]},

    email:{
        type: String,
        required: [
            true, 
            "Email is required"
        ],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
    },

    
    password:{
        type: String,
        required:[
            true,
            "Password is required"
        ],
        minlength:[8, "Password must be at least 8 characters Long"]
    },
    },{timestamps: true});



    module.exports = mongoose.model('User', UserSchema);
