import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(cors())

const VideoRouter = require("./routes/main.route")
app.use("/", VideoRouter)

app.listen(PORT, () => console.info(`Server runnong on port ${PORT}`))