const mongoose = require('mongoose');
const saveSchema = new mongoose.Schema({
    lessonId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})


module.exports = mongoose.model('Save',saveSchema);
