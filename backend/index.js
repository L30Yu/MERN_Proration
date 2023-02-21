const express = require('express');
const  cors = require('cors');
const routes = require('./routes/proration')

require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())
const PORT = process.env.port || 5001

app.use(routes)
app.listen(PORT, ()=> console.log(`Listening on: ${PORT}`))