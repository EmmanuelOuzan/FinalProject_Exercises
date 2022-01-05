const mongoose = require('mongoose')

const langSchema = new mongoose.Schema({
    // ID from the system
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        unique: true
    },
    progm_lang: {
        type: String
    },
    icon: String,
    tags: {
        type: [String]
    }
})
module.exports = mongoose.model("programming_language", langSchema)