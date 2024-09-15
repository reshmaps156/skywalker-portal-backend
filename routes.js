const express = require('express')
const router = new express.Router()
const userController = require('./controller/userController')
const adminController = require('./controller/adminController')


//posting grievance form
router.post('/grievances',userController.postGrievanceController) 
//login
router.post('/login',adminController.loginController)

//get grievance
router.get('/admin/grievances' ,adminController.inboxController)

router.delete('/admin/grievance/:id',adminController.deleteMessageController)

//to get the token for dialogueflow chatbot
router.get('/token',userController.getAccessTokenController)

module.exports = router