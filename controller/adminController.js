const admins = require("../models/adminModel")
const userGrievances = require("../models/grievanceModel");
const jwt = require('jsonwebtoken')

exports.loginController = async (req, res) => {
    const { email, password } = req.body
    try {

        let currentAdmin = await admins.findOne({ adminEmail: email, adminPassword: password })
        if (currentAdmin) {
            const token = jwt.sign({ adminId: currentAdmin._id }, 'secret000')
            res.status(201).json({ currentAdmin, token })
        } else {
            res.status(406).json('Invalid Email or Password')
        }
    } catch (error) {
        res.status(401).json(`${error}`)
    }


}

exports.inboxController = async (req, res) => {
    const searchKey = req.query.search
    try {
        const query = {
            subject: { $regex: searchKey, $options: 'i' }
        }
        let inbox = await userGrievances.find(query)
        if (inbox) {
            res.status(201).json(inbox)
        } else {
            res.status(406).json('Inbox is empty')
        }
    } catch (error) {
        res.status(406).json(error)
    }
}

exports.deleteMessageController = async (req, res) => {
    const { id } = req.params
    try {
        await userGrievances.findByIdAndDelete(id)
        res.status(201).json({ message: 'Deleted' })
    } catch (error) {
        res.status(401).json(`${error}`)

    }
}