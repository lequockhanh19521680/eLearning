const userModel = require('../models/user')
class TeacherController{
    async findListLesson(req,res){
        
    }

    async postLesson(req,res){
        const _id = req.params.id;
        const lesson = req.body.lesson
        try{
            const user = await userModel.findById(_id)
            user.lesson.push(lesson)
            user.save()
            res.send(user)
        }catch(err){
            throw new Error(err)
        }
    }


    async deleteLesson(req,res){
        try{
        const user = await userModel.findByIdAndUpdate(
            {_id:req.params.id},
            {$pull: {lesson:  req.body.lessonId}})
        res.send(user)
        }catch(err)
        {
            throw new Error(err)
        }
    }
}
module.exports = new TeacherController