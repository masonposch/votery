var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

//model controllers
var application_controller = require('./controllers/application_controller'); // set up just in case, not sure how many needed
var hr5711_controller = require('./controllers/hr5711_controller'); // set up just in case, not sure how many needed
var hr5982_controller = require('./controllers/hr5982_controller'); // set up just in case, not sure how many needed
var mhr5711_controller = require('./controllers/mhr5711_controller'); // set up just in case, not sure how many needed
var mhr5982_controller = require('./controllers/mhr5982_controller'); // set up just in case, not sure how many needed
var s3110_controller = require('./controllers/s3110_controller'); // set up just in case, not sure how many needed

// instantiate app
var app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// set up handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

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

// what to send based on route
app.use('/', votery_controller);
app.use('/x', need a controller); // set up just in case, not sure how many routes needed
app.use('/y', need a controller); // set up just in case, not sure how many routes needed
app.use('/z', need a controller); // set up just in case, not sure how many routes needed

// in case of 404 catch by handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// export as app
module.exports = app;
