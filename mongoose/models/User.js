const mongoose = require('mongoose');

const User=mongoose.model('users',{

    firstName: {
        type:String,
        required:true,
        minlength:4,
        trim:true
    },

    lastName: {
        type:String,
        required:true,
        minlength:4,
        trim:true
    },

    isActive: {
        type:Number,
        default:0
    }

});

module.exports = User;