const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongooseConnect = require('./database/connection')
const cookieParser = require('cookie-parser')

const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/user')
const PostRoute = require('./routes/post')


require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'))


app.use('/api/users', AuthRoute)
app.use('/api/users', UserRoute)
app.use('/api/posts', PostRoute)


mongooseConnect(() => {
    app.listen(8080, () => {
        console.log('Server is listening on port 8080')
    })
})


