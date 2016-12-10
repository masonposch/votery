var http = require('http');
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

  connection = mysql.createConnection({

    host: 'enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'o1z4jkdycqy982mm',
    password: 'mes8hwhriewfvokq',
    database: 'zr7x4hvyfx47sp32'

  });

};

connection.connect();

var server = http.createServer(function(request, response) {

  console.log('Works!');

  response.end();

});

server.listen(3000);

module.exports = connection;
