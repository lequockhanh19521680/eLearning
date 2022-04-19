const userModel = require('../models/user')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
class UserController {



    /*
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
    // Ham them user vao database, trong do chi can them username vs password la dc, role tu dong la STUDENT va isSelect tu dong la false
    async addUser(req, res) {
        const user = await new userModel({
            username: req.body.username,
            password: req.body.password,
        })

        try {
            const temp = await user.save()
            res.json(temp)
        } catch (err) {
            res.send('Error ' + 'username khong duoc trung nhau')
        }
    }
    */

    async getAllUser(req, res, next) {
        try {
            const user = await userModel.find()
            res.send(user)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }



    async getUser(req, res) {
        try {
            const user = await userModel.findById(req.userId).select('-password')
            if (!user)
                return res.status(400).json({ success: false, message: 'User not found' })
            res.json({ success: true, user })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }

    

    async Register(req, res) {
        const { username, password } = req.body

        // Simple validation
        if (!username || !password) {
            return res
                .status(400)
                .json({ success: false, message: 'Missing username and/or password' })
        }

        try {
            // Check for existing user
            const user = await userModel.findOne({ username })

            if (user) {
                return res
                    .status(400)
                    .json({ success: false, message: 'Username already taken' })
            }

            // All good
            const hashedPassword = await argon2.hash(password)
            const newUser = new userModel({ username, password: hashedPassword })
            await newUser.save()

            console.log( process.env.ACCESS_TOKEN_SECRET);
            // Return token
            const accessToken = jwt.sign(
                { userId: newUser._id },
                process.env.ACCESS_TOKEN_SECRET
            )

            res.json({
                success: true,
                message: 'User created successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }




    async Login(req, res) {
        const { username, password } = req.body

        // Simple validation
        if (!username || !password)
            return res
                .status(400)
                .json({ success: false, message: 'Missing username and/or password' })

        try {
            // Check for existing user
            const user = await userModel.findOne({ username })
            if (!user)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password' })

            // Username found
            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password' })

            // All good
            // Return token
            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET
            )

            res.json({
                success: true,
                message: 'User logged in successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }






    async changeTeacher(req, res) {
        try {
            const _id = req.params.id;

            const update = await userModel.findByIdAndUpdate(_id, { "role": 'TEACHER' })

            res.send(update)
        }
        catch (err) {
            res.send('error' + err)
        }
    }

    
    async changeStudent(req,res) {
        try{
            const _id = req.params.id;
            const update = await userModel.findByIdAndUpdate(_id,{"role": 'STUDENT'})
            res.send(update)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }

    async possLesson(req,res){
        try{
            const _id = req.params.id;

        }catch(err){
            
        }
    }

    
  

}

module.exports = new UserController
