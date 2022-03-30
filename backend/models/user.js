const mongoose = require('mongoose');
const { changeStudent } = require('../controllers/userController');
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
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

        enum: ['STUDENT','TEACHER'],
        default:'STUDENT',
        required: true

    },

    isSelect:
    {
        type: Boolean,
        required: true,
        default: false,

    }

})


module.exports = mongoose.model('User',userSchema);
