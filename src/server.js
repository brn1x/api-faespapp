const express = require('express')
const routes = require('./routes')
const http = require('http');

const app = express();

const server = http.createServer(app);

/* Conexão com o banco */
require('./database')

app.use(express.json())
app.use(routes)
app.set('port', process.env.PORT || 3000);
app.use(express.static('src/pages'));

server.listen(app.get('port'), () => {
  console.log(`connected at port ${app.get('port')}`);
});