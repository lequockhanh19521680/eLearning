const courseDetailSchema = require('../models/courseDetail')
const classSchema = require('../models/class')
const subjectSchema = require('../models/subject')
class courseDetailController{

    async getClass(req, res, next) {
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

    async getCourseFromClass(req,res){
        try {
            const classId = req.query.classId
            const findCourse = await courseDetailSchema.find({"classId":[classId]})
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


    async getSubjectById(req, res, next) {
        try {
            const _id = req.params._id
            const subject = await subjectSchema.findById(_id)
            res.send(subject)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getCourse(req,res){
        try {
            const course = await courseDetailSchema.find()
            res.send(course)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getCourseById(req,res){
        try {
            const _id = req.params.id
            const course = await courseDetailSchema.findById(_id)
            res.send(course)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }



    async getCourseFromSubject(req,res){
        try {
            const subjectId = req.query.subjectId
            const findCourse = await courseDetailSchema.find({"subjectId":[subjectId]})
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

    async addCourse(req,res){
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
        
    


}

module.exports = new courseDetailController