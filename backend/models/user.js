const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,

    },
    role:
    {
        type: String,
        enum: ['STUDENT','TEACHER'],
        default:'STUDENT',
        required: true

    },
})


module.exports = mongoose.model('User',userSchema);
