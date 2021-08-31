const mongoose = require('mongoose');

const grpSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    nbMax: {
        "type": Number,
        "default": 2,
        "min": 2,
        "max": 25
    },
    captain : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    members : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    size: {
        type: Number,
        default: 1
    },
    game: {
        id: Number,
        name: String
    },
    dateCreated : {
        type: Date,
        default: Date.now
    },
    dateUpdated : Date
})

module.exports = mongoose.model("Group", grpSchema);