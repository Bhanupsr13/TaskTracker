require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const listsroutes = require('./routes/lists')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
})

// routes
app.use('/api/lists', listsroutes)

//connnect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
        
        // listen for requests
        app.listen(process.env.PORT, () => {
                console.log("Connected to MongoDB & Listening on PORT:", process.env.PORT)
        })
})
.catch((err) => {
                console.log(process.env.MONGO_URI)
                console.log(err)
        })
