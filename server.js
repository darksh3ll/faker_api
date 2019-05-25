const express = require('express')
const server = express()
const morgan = require('morgan')
var users = require("./routes/users");

server.get('/',(req,res) => {
    res.json(users())
})


server.listen(4000,() => console.log("SERVER STARTED")  )
