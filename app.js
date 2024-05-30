import express from "express";
import { configDotenv } from "dotenv";
import morgan, { format } from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'
import fs from 'fs'
import bodyParser from "body-parser";

// Import database connection
import { dbConnect } from "./configs/dbConnect";

let app = express()
configDotenv()
const PORT = process.env.PORT || 3113


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// app logs in app.log file
app.use(morgan('dev', { stream: fs.createWriteStream('./app.log') }))

app.get('/health', () => {
    return ("<h1>Health Ok</h1>")
})

app.listen(PORT, (err) => {
    if (err)
        console.log(err.message)
    console.log(`Server is running on ${PORT} port`)
})