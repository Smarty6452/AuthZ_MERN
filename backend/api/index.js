import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("db connected succesfully")
  }).catch((err) => {
    console.log("db not conneccted" + err)
  })

 


const app = express()

app.listen(3000, () => {
    console.log(`server listening on 3000 `)
})
