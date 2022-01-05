const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    // id from the system
    icon: String,
    title: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        enum: ["draft", "published", "deleted"] 
        // default: "draft"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        // Auto?
        require: true
    },
    exerciseType: {
        type: String,
        enum: ['short', 'rolling', 'tutorial'],
        required: true
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    },
    tags: [String],
    prog_lang: {
        //type: mongoose.SchemaTypes.ObjectId,
        type: String,
        required: true,
    },
    dev_time: {
        type: String
    },
    content: {
        content: {
            type: String,
        },
        sources: [{
            name: String,
            url: String
        }]
    },
    solution: String,

})

module.exports = mongoose.model('exercise', schema)