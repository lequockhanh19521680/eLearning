const userModel = require('../models/user')

class UserController {

    


    //Ham lay du lieu tu database
    async getAllUser(req, res, next) {
        try {
            const user = await userModel.find()
            res.send(user)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    // Ham them user vao database, trong do chi can them username vs password la dc, isTeacher va isSelect tu dong la false
    async addUser(req, res) {
        const user = await new userModel({
            username: req.body.username,
            password: req.body.password,
            isTeacher: false,
            isSelect: false
        })

        try {
            const temp = await user.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }

    async changeSelect(req,res) {
        try{
            const _id = req.params.id;
            const update = await userModel.findByIdAndUpdate(_id,{"isSelect": true})
            res.send(update)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }
    async changeTeacher(req,res) {
        try{
            const _id = req.params.id;
            const update = await userModel.findByIdAndUpdate(_id,{"isTeacher": true})
            res.send(update)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }
    
  
}

module.exports = new UserController
