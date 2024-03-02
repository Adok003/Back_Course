import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 5000;
const MONGO_URL = 'mongodb+srv://root:root@cluster0.fwtgckq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use("/api", router)


async function startApp() {
    try {
        await mongoose.connect(MONGO_URL)
        app.listen(PORT, () => console.log("Server Started"))
    } catch (e) {
        console.log(e)
    }
}

startApp()
