const mongoose = require("mongoose")

const ClientSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
    }
})

module.exports = mongoose.model("Client", ClientSchma)

