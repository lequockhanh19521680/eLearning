const mongoose = require('mongoose');
const contentSchema = new mongoose.Schema({
    lessonId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Lesson'
    },
    header:{
        type: String,
    },
    image:{
        type: String,
    },
    main:{
        type: String,
    },
})

module.exports = mongoose.model('Content',contentSchema);