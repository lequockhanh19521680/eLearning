const mongoose = require('mongoose');
const shortId = require('short-id')
const classSchema = new mongoose.Schema({
    classId:{
        type: String,
        ref:'class',
        default:shortId.generate(),
    },
    className:{
        type: String,
        require: true,
        unique: true,
    },
})


module.exports = mongoose.model('Class',classSchema);
