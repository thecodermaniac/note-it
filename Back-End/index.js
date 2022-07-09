const connnectedToMongo = require('./db')
const express = require('express')
var cors = require('cors')

connnectedToMongo()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/app/auth', require('./routes/auth'))
app.use('/app/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})