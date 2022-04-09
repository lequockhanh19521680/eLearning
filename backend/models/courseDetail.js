const mongoose = require('mongoose');
const shortId = require('short-id')
const courseDetail = new mongoose.Schema({
    courseId:{
        type:String,
        ref:'course',
        default: shortId.generate()
    },
    classId:{
        type: String,
        ref:'class'
    },
    subjectId:{
        type:String,
        ref:'subject'
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
        ]
    },
    createAt:{
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Course',courseDetail);