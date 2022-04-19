const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/teacherController');

router.get('/',verifyToken,userController.getUser)
router.get('/getAll',userController.getAllUser)
router.post('/login',userController.Login)
router.post('/register',userController.Register)
router.patch('/student/:id',userController.changeStudent)
router.patch('/teacher/:id', userController.changeTeacher)

module.exports = router