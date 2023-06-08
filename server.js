const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dataRoutes = require("./src/routes/dataRoute")

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use("/api/data", dataRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});