const express = require('express'),
  http = require('http'),
  year = require('./routes/leap-year');

const app = express();


const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || '8080';
app.set('port', port);

app.use('/leap-year', year);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;