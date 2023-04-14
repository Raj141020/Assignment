const express = require('express');

const router = express.Router();

const userController = require('../controller/userController.js')



/*.........................//1// CREATE //..............................................*/

router.post('/createData', userController.createUser)

/*.........................//3// GET //..............................................*/

// router.get('/user/:userId/profile',userController.getUserData)

// /*.........................//4// UPDATE//..............................................*/

// router.put('/user/:userId/profile', userController.updateProfile)



module.exports = router