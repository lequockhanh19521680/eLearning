const lessonSchema = require('../models/lesson')
const classSchema = require('../models/class')
const subjectSchema = require('../models/subject')
class lessonController{


    async getLessonFromTeacher(req,res){
        try{
            const _id = req.params.id
            const lesson = await  lessonSchema.find({'userId' : _id}).populate('userId')
    
            res.send(lesson)
    
        }catch(err){
            throw new Error(err)
        }
    }

    async getClass(req, res) {
        try {
            const class1 = await classSchema.find()
            res.send(class1)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getClassById(req, res, next) {
        try {
            const _id = req.params._id
            const class1 = await classSchema.findById(_id)
            res.send(class1)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async getLessonFromClass(req,res){
        try {
            const _id = req.params.id
            const findCourse = await lessonSchema.find({"classId":_id})
            res.send(findCourse)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getSubject(req, res, next) {
        try {
            const subject = await subjectSchema.find()
            res.send(subject)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getSubjectById(req, res) {
        try {
            const _id = req.params._id
            const subject = await subjectSchema.findById(_id)
            res.send(subject)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getLesson(req,res){
        try {
            const course = await lessonSchema.find()
            res.send(course)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getLessonFromId(req,res){
        try {
            const _id = req.params.id
            const course = await lessonSchema.findById(_id)
            res.send(course)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }



    async getLessonFromSubject(req,res){
        try {
            const _id = req.params.id
            const findCourse = await lessonSchema.find({"subjectId":_id})
            res.send(findCourse)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    /*






    toan bo post














    */
    async addClass(req,res){
        const class1 = await new classSchema({
            className : req.body.className
        })
        try {
            const temp = await class1.save()
            res.send(temp)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async addSubject(req,res){
        const subject = await new subjectSchema({
            subjectName : req.body.subjectName
        })
        try {
            const temp = await subject.save()
            res.send(temp)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    
    async addLesson(req,res){
        const lesson = await new lessonSchema({
            userId: req.body.userId,
            classId: req.body.classId,
            subjectId: req.body.subjectId,
            name: req.body.name,
            header: req.body.header,
            content: req.body.content,
            type: req.body.type,
        })
        try {
            const temp = await lesson.save()
            res.send(temp)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    
    
    //delete


    async deleteLessonFromId(req,res){
        const _id = req.params.id
        try{
        const lesson = await lessonSchema.findByIdAndDelete(_id)
        res.send(lesson)
        }catch(err)
        {
            throw new Error(err)
        }
    }

}

module.exports = new lessonController