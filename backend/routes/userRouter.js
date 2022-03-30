const express = require('express');
const verifyToken = require('../middleware/auth')
const router = express.Router();
const userController = require('../controllers/userController');

//o day chuyen den router de get va post data trong mongo
router.get('/',verifyToken,userController.getUser)
router.post('/login',userController.Login)
router.post('/register',userController.Register)

router.patch('/teacher/:id', userController.changeTeacher)

module.exports = router