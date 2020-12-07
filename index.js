const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const user = require('./realServer/controllers/routes/routes/routes/user')
const package = require('./realServer/controllers/routes/routes/routes/package')
const order = require("./realServer/controllers/routes/routes/routes/order")
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
   origin: 'https://aca-final-project-front-end.herokuapp.com'
}))

app.get('/', (req, res) => {
    res.send('Welcome to our express app hahahahaha')
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})