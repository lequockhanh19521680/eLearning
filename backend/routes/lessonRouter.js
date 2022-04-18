const express = require('express');
const lessonController = require('../controllers/lessonController')
const router = express.Router();
//tat ca su dung :id khong co chu thich thi su dung _id
router.get('/class',lessonController.getClass)
router.get('/class/:id',lessonController.getClassById)
router.get('/subject',lessonController.getCourse)
router.get('/subject/:id',lessonController.getCourseById)
router.get('/',lessonController.getCourse)
router.get('/:id',lessonController.getCourseById)
router.get('/fromClass',lessonController.getCourseFromClass)//su dung classId, vd localhost:5000/course/fromSubject?classId=....
router.get('/fromSubject',lessonController.getCourseFromSubject)//su dung subjectId, vd localhost:5000/course/fromSubject?subjectId=....

router.post('/class',lessonController.addClass)
router.post('/subject',lessonController.addSubject)
router.post('/',lessonController.addLesson)
module.exports = router