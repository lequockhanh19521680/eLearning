const mongoose = require('mongoose');
const shortId = require('short-id')
const classSchema = new mongoose.Schema({
    className:{
        type: String,
        require: true,
        unique: true,
    },
})


module.exports = mongoose.model('Class',classSchema);
