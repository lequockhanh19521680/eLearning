const lessonSchema = require('../models/lesson')
const classSchema = require('../models/class')
const userSchema = require('../models/user')
const subjectSchema = require('../models/subject')
const saveSchema = require('../models/save')
const contentSchema = require('../models/content')
class lessonController{


    async getLessonFromTeacherId(req,res){
        try{
            const _id = req.params.id
            const lesson = await  lessonSchema.find({'userId' : _id})
            .populate('userId')
            .populate('classId')
            .populate('subjectId')
            .populate('content._id')
    
            res.send(lesson)
    
        }catch(err){
            throw new Error(err)
        }
    }
    async getLessonFromTeacher(req,res){
        try{
            const user = await userSchema.find(req.query)
            let temp = null
            if(user.length != 0){
                temp = user[0].id
            }
            const lesson = await  lessonSchema.find({'userId': temp})
            .populate('userId')
            .populate('classId')
            .populate('subjectId')
            .populate('content._id')
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
            .populate('userId')
            .populate('classId')
            .populate('subjectId')
            .populate('content._id')
            res.send(course)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async getAllSave(req,res){
        try{
            /*
            const user = await userSchema.find(req.query)
            let temp = null
            if(user.length != 0){
                temp = user[0].id
            }
            const lesson = await  lessonSchema.find({'userId': temp})*/
            const lesson = await lessonSchema.find()
            const save = await saveSchema.find()
            .populate('userId')
            .populate({
                path: 'lessonId',
                populate:{
                    path: 'subjectId classId'
                }})
            res.send(save)
        }
        catch(err){
            throw new Error(err)
        }
    }

    async getLessonFromSaveInStudent(req,res){
        try {
            const _id = req.params.id
            const save = await saveSchema.find({'userId': _id})
            .populate('userId')
            .populate({
                path: 'lessonId',
                populate:{
                    path: 'subjectId classId'
                }})
            res.send(save)
        } catch (error) {
            throw new Error(error)
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

    async getAllContent(req,res){
        try {
            const content = await contentSchema.find(req.query)
            res.send(content)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async getContentFromId(req,res){
        try{
            const _id = req.params.id
            const findCourse = await contentSchema.findById(_id)
            res.send(findCourse)
        }catch(err){
            throw new Error(err)
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
    
    async saveStudentLesson(req,res){
        const save = await new saveSchema({
            userId: req.body.userId,
            lessonId: req.body.lessonId
        })
        try{
            const temp = await save.save()
            res.send(temp)
        }catch(err)
        {
            throw new Error(err)
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
    async addContentForLesson(req,res){
        const _id = req.params.id
        const content = await new contentSchema({
            lessonId: _id,
            header: req.body.header,
            image: req.body.image,
            main: req.body.main
        })
   
        try {
            const lesson = await lessonSchema.findById(_id)
            lesson.content.push(content)
            lesson.save()
            const contentAdd = await content.save()
            res.send([lesson,contentAdd])
        } catch (error) {
            throw new Error(error)
        }
    }
    
    //delete

    async deleteContentFromLesson(req,res){
        try {
            const temp = req.body.contentId
            const lesson = await lessonSchema.findByIdAndUpdate(
                {_id:req.params.id},
                {$pull: {content: {_id: temp}}})
            const content = await contentSchema.findByIdAndDelete(temp)
            res.send([lesson,content])
        } catch (err) {
            throw new Error(err)
        }
    }

    async deleteLessonFromId(req,res){
        const _id = req.params.id
        try{
        const save = await saveSchema.deleteOne({"lessonId": _id})
        const lesson = await lessonSchema.findByIdAndDelete(_id)
        res.send([lesson,save])
        }catch(err)
        {
            throw new Error(err)
        }
    }

}

module.exports = new lessonController