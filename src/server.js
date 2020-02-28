const express = require('express')
const dotEnv = require('dotenv')
const routes = require('./routes')

dotEnv.config()

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('Listening on port:', port))
