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
    isTeacher:
    {
        type: Boolean,
        required: true

    },
    isSelect:
    {
        type: Boolean,
        required: true

    }
})


module.exports = mongoose.model('User',userSchema);
