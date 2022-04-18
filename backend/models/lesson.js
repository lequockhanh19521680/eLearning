const mongoose = require('mongoose');
const lessonDetail = new mongoose.Schema({
    classId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Class'
    },
    subjectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Subject'
    },
    lesson:{
        type:[
            {
                title:{
                    type: String
                },
                content:{
                    type: String,
                },
                image:{
                    type: String,
                }
            }
        ],
        default: []
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