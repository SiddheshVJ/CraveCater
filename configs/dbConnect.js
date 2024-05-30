import mongoose from "mongoose";
require('dotenv').config();

const dbURI = process.env.DB_URI

export const dbConnect = (mongoose.connect(dbURI).then((data) => {
    if (data) {
        console.log(`Database connected to ${data.connection.host}`)
    }
    else {
        console.log(`Database failed to connect.`)
        setTimeout(dbConnect, 5000)
    }
}))