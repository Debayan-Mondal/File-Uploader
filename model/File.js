const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    isFolder: {
        default: false
    },
    parentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    },
    ancestor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }],
    url: {
        type: String,
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('File',fileSchema);