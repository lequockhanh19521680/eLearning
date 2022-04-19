const express = require('express');
const verifyToken = require('../middleware/auth')
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',verifyToken,userController.getUser)
router.get('/getAll',userController.getAllUser)
router.post('/login',userController.Login)
router.post('/register',userController.Register)
router.patch('/student/:id',userController.changeStudent)
router.patch('/teacher/:id', userController.changeTeacher)

module.exports = router