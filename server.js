var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + '/public'));

// app.use(bodyParser.urlencoded({
// 	extended: false
// }));


sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return sequelizeConnection.sync({force:true})
})


.then(function(){

	//THIS IS WHERE WE WILL SET ALL THE DATA FOR OUR TABLES
	//DO WE KNOW HOW TO ENTER CSVs DIRECTLY INTO SEQUELIZE?

}).catch(function(error){
	console.log(error);
})








// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
// 	defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// var routes = require('./controllers/*******INSERT A CONTROLLER FILE HERE***********');
// app.use('/', routes);

// var port = 3000;
// app.listen(port);
// console.log('App listening on PORT ' + port);
