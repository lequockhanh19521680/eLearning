const userRouter = require('./userRouter')
const lessonRouter = require('./lessonRouter')
const commentRouter = require('./commentRouter')
const contactRouter = require('./contactRouter')
function route(app) {
    app.use('/user', userRouter)
    app.use('/lesson',lessonRouter)
    app.use('/comment',commentRouter)
    app.use('/contact',contactRouter)

}


module.exports = route