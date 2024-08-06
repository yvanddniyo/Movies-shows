const  mongoose = require("mongoose")
const { clients } = require("../sampleData")
const Clients = require("./Client")

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed"]
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
})

module.exports = mongoose.model("Project", ProjectSchema)