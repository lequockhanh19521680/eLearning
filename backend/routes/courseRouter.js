const express = require('express');
const courseDetail = require('../controllers/courseDetailController')
const router = express.Router();
//tat ca su dung :id khong co chu thich thi su dung _id
router.get('/class',courseDetail.getClass)
router.get('/class/:id',courseDetail.getClassById)
router.get('/subject',courseDetail.getCourse)
router.get('/subject/:id',courseDetail.getCourseById)
router.get('/',courseDetail.getCourse)
router.get('/:id',courseDetail.getCourseById)
router.get('/fromClass',courseDetail.getCourseFromClass)//su dung classId, vd localhost:5000/course/fromSubject?classId=....
router.get('/fromSubject',courseDetail.getCourseFromSubject)//su dung subjectId, vd localhost:5000/course/fromSubject?subjectId=....

router.post('/class',courseDetail.addClass)
router.post('/subject',courseDetail.addSubject)
module.exports = router