const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Base API endpoint")
})

app.post("/submit", (req, res) => {
    //TODO check if it's a valid JSON?
    const payload = req.body;
    res.send(payload)
})

app.listen(3000, () => {
    console.log("listening on port 8000")
})
