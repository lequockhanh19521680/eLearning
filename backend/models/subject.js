const mongoose = require('mongoose');
const shortId = require('short-id')
const subjectSchema = new mongoose.Schema({
    subjectName:{
        type: String,
        require: true,
        unique: true,
    },
})


module.exports = mongoose.model('Subject',subjectSchema);
