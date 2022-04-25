const express = require('express');
const lessonController = require('../controllers/lessonController')
const router = express.Router();
//tat ca su dung :id khong co chu thich thi su dung _id
router.get('/class',lessonController.getClass)
router.get('/class/:id',lessonController.getClassById)
router.get('/subject',lessonController.getSubject)
router.get('/subject/:id',lessonController.getSubjectById)
router.get('/',lessonController.getLesson)
router.get('/:id',lessonController.getLessonFromId)//Duong, Tam
router.get('/fromClass/:id',lessonController.getLessonFromClass)//dung id class
router.get('/fromSubject/:id',lessonController.getLessonFromSubject)// dung id subject
router.get('/fromTeacher/:id',lessonController.getLessonFromTeacher)//Tam
router.get('/content',lessonController.getAllContent)
router.get('/content/:id',lessonController.getContentFromId)

router.post('/class',lessonController.addClass)
router.post('/subject',lessonController.addSubject)
router.post('/',lessonController.addLesson)//Duong
router.post('/content/:id',lessonController.addContentForLesson)

router.delete('/content/:id',lessonController.deleteContentFromLesson)
router.delete('/:id',lessonController.deleteLessonFromId)//Duong
module.exports = router

