const mongoose = require("mongoose");

const InfoSchema =  mongoose.Schema({
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    city: {
        type: String,
        max: 50
    },
    desc: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship:{
        type: Number,
        enum: [1,2,3,4]
    }

})

module.exports = mongoose.model('Info', InfoSchema)