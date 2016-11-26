//necessary dependencies
var express = require('express');
var app = express();
var mysql = require('mysql');

//variable to hold connection
var connection;

//sets initial port to use to listen
var PORT = process.env.PORT || 3000;

//use JAWSDB to connect to our database
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

//route paths
app.get('/hr5711', function(request, response) {
  //pull records from the HR5711 table and list them
  hr5711.findAll().then(function(records) {
    console.log(records.length);
  });

  response.write('Test...it works.');
  response.end();

});

//listen for requests
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
