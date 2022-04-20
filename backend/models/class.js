const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    className:{
        type: String,
        require: true,
        unique: true,
    },
})


module.exports = mongoose.model('Class',classSchema);
