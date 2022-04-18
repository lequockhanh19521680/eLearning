const userRouter = require('./userRouter')
const lessonRouter = require('./lessonRouter')
function route(app) {
    app.use('/user', userRouter)
    app.use('/lesson',lessonRouter)
}


module.exports = route