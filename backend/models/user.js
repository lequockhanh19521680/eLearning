const mongoose = require('mongoose');
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
    nameAccount:{
        type: String,
        default: "Le Quoc Test"

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
