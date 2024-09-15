const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },
    adminEmail:{
        type:String,
        required:true
    },
    adminPassword:{
        type:String,
        required:true
    }
})


const admins = mongoose.model("admins",adminSchema)
module.exports = admins