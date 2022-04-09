const mongoose = require('mongoose');
const shortId = require('short-id')
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        default:shortId.generate(),
    },
    username:{
        type: String,
        unique:true,
        required: true,
    },
    password:{
        type: String,
        required: true,

    },
    role:
    {
        type: String,
        enum: ['ADMIN','STUDENT','TEACHER'],
        default:'STUDENT',
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
})


module.exports = mongoose.model('User',userSchema);
