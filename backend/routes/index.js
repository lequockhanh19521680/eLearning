const userRouter = require('./userRouter')
const lessonRouter = require('./lessonRouter')
const commentRouter = require('./commentRouter')
function route(app) {
    app.use('/user', userRouter)
    app.use('/lesson',lessonRouter)
    app.use('/comment',commentRouter)

}


module.exports = route