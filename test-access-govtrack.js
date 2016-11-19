var http = require('http');
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {

  connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ohyeahmysql1!',
    database: 'voteryDB'

  });

};

connection.connect();

var server = http.createServer(function(request, response) {

  console.log('Works!');

  response.end();

});

server.listen(3000);

module.exports = connection;
