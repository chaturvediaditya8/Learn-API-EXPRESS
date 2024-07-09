const express = require('express')
const app = express()
const api = require('./routes/api')
const connectDB= require('./db/connectDB')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const cors = require("cors")


app.use(cors())//for api communication

//for dataget in api
app.use(express.json())

//file upload
const fileUpload = require('express-fileupload')
//tempfile uploader
app.use(fileUpload({useTempFiles:true}))

connectDB()



//route
app.use('/api',api)
//localhost:5000/api
//Server Create
app.listen(process.env.PORT,()=>{
               console.log(`Server Start http://localhost:${process.env.PORT}`)
})