const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        minlength: 3,
        trim: true

    },
    access_level: {
        enum: ["view", "editor", 'admin'],
        // default: String // Maybe wil cause problem, How to see a real default?
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    profile_pic: String
})
module.exports = mongoose.model('users', userSchema)