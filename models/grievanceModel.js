const mongoose = require('mongoose')

const grievanceSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    grievanceDetails: {
        type: String,
        required: true
    },
    submitTime: {
        type: String,
        required: true
    }
})






const userGrievances = mongoose.model('usergrievances', grievanceSchema)
module.exports = userGrievances