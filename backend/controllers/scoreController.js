const scoreSchema = require('../models/score')

class ScoreController {

    async getAllScore(req, res, next) {
        try {
            const score= await scoreSchema.find(req.query)
            .populate('studentId')
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
            res.send(score)
        }catch(err){
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