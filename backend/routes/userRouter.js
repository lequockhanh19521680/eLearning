const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//o day chuyen den router de get va post data trong mongo
router.get('/',userController.getAllUser)
router.post('/',userController.addUser)


router.patch('/select/:id', userController.changeSelect)
router.patch('/teacher/:id', userController.changeTeacher)

module.exports = router