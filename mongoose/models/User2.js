const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema=new Schema({

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

module.exports = mongoose.model('users',UserSchema);