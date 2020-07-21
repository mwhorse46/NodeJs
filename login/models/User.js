const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        minlength: 3
    },

    password: {
        type:String,
        required:true,
        minlength: 5
    }
});

module.exports = mongoose.model('users',UserSchema);