const express = require('express')
const app = express()


app.listen(3002)

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/index.html")
})

app.get("/docs", (req, res) => {
    res.sendFile(__dirname + "/view/docs.html")
})