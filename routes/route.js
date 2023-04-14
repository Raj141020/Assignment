const express = require('express');

const router = express.Router();

const userController = require('../controller/userController.js')



/*.........................// CREATE //........................................*/

router.post('/createData', userController.createUser)

/*.........................// GET USER //........................................*/

router.get('/user/:userId',userController.getUserData)

// /*.........................// UPDATE//.........................................*/

router.put('/user/:userId', userController.updateProfile)



module.exports = router