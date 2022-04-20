const mongoose = require('mongoose');
const lessonDetail = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    classId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Class',
        required: true,
    },
    subjectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    header:{
        type:String,
        default:''
    },
    content:{
        type: [{
            headerContent:{
                type: String,
            },
            imageContent:{
                type: String,
            },
            mainContent:{
                type: String,
            },
        }],
        default: [],
    },
    createAt:{
        type: Date,
        default: Date.now
    },
    type:{
        type: String,
        enum:["LESSON","EXERCISE","EXAM"],
        default: "LESSON",
    },
})


module.exports = mongoose.model('Lesson',lessonDetail);