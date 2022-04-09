const express = require('express');
const courseDetail = require('../controllers/courseDetailController')
const router = express.Router();

router.get('/class',courseDetail.getClass)
router.get('/class/:id',courseDetail.getClassById)
router.get('/subject',courseDetail.getCourse)
router.get('/subject/:id',courseDetail.getCourseById)
router.get('/',courseDetail.getCourse)
router.get('/:id',courseDetail.getCourseById)


router.post('/class',courseDetail.addClass)
router.post('/subject',courseDetail.addSubject)
module.exports = router