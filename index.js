const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const user = require('./sever/wax-onServer/routes/user')
const package = require('./sever/wax-onServer/routes/package')
const order = require("./sever/wax-onServer/routes/order")
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 4000
// seeing if it is working
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"realClient/client/build")))
app.use(package)
app.use(user)
app.use(order)
app.use(cors({
   origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
    res.send('Welcome to our express app hahahahaha')
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})