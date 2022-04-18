const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    lessonId:{
        type:[mongoose.Schema.Types.ObjectId]
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
