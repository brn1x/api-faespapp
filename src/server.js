const express = require('express')
const routes = require('./routes')

/* Conexão com o banco */
require('./database')

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3333)