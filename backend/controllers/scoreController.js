const scoreSchema = require('../models/score')

class ScoreController {

    async getAllScore(req, res, next) {
        try {
            const score= await scoreSchema.find(req.query)
            .populate('userId')
            .populate('lessonId')
            res.send(score)
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async getScoreFromUser(req,res){
        try{
            const _id = req.params.id
            const score = await scoreSchema.find({'user': _id})
            .populate('lessonId')
            .populate('userId')
            res.send(score)
        }catch(err){
            throw new Error(err)
        }
    }

    async getStudentFromExam(req,res){
        const lessonId = req.body.lessonId
        const userId = req.body.userId
        console.log(req.body);
        try {
            const score = await scoreSchema.find({'lessonId': lessonId})
            .populate('userId')
            .populate('lessonId')
          
            for(let i = 0, l = score.length; i < l; i++){
                console.log(score[i]);
                if(i == score.length){
                    res.send("exam do khong ton tai student")
                    break
                }
                else if(score[i].userId == userId)
                {
                    res.send(score[i])
                    break
                }
            }
    
        } catch (err) {
            throw new Error(err)
        }
    }




    async addScore(req,res){
        const score = await new scoreSchema({
            userId: req.body.userId,
            lessonId: req.body.lessonId,
            scoreTotal: req.body.scoreTotal,
        })
        try {
            const temp = await score.save()
            res.json(temp)
        }
        catch (err) {
            throw new Error(err)
        }
    }

   
}

module.exports = new ScoreController