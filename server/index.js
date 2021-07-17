const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongooseConnect = require('./database/connection')
const cookieParser = require('cookie-parser')

const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/user')
const PostRoute = require('./routes/post')


require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

//Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'))

//Routes
app.use('/api/users', AuthRoute)
app.use('/api/users', UserRoute)
app.use('/api/posts', PostRoute)


mongooseConnect(() => {
    app.listen(PORT, () => {
        console.log(`SERVER LISTENING ON PORT ${PORT}`)
    })
})


