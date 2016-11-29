var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var models  = require('./models');
var tables = require('tables');
var test = require('./test/csv_package_test.js');
var csv = require('csv');
var fs = require('fs');






//model controllers
var application_controller = require('./controllers/application_controller.js'); // set up just in case, not sure how many needed
// var hr5711_controller = require('./controllers/hr5711_controller'); // set up just in case, not sure how many needed
// var hr5982_controller = require('./controllers/hr5982_controller'); // set up just in case, not sure how many needed
// var mhr5711_controller = require('./controllers/mhr5711_controller'); // set up just in case, not sure how many needed
// var mhr5982_controller = require('./controllers/mhr5982_controller'); // set up just in case, not sure how many needed
// var s3110_controller = require('./controllers/s3110_controller'); // set up just in case, not sure how many needed

// instantiate app
var app = express();


// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;


// PREPARE OUR TABLES 
// =======================================================================


// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')


.then(function(){
	return sequelizeConnection.sync({force:true})
})

.then(function(){


	fs.readFile('./assets/csv/hr-5711.csv', function(err, res) {

	  if (err) throw err;

	  csv.parse(res, function(err, res) {

	    if (err) throw err;

	    for(var i = 0; i < 5; i++){

	    	models.hr5711.create({

	    		state: res[i][1],
	    		district: res[i][2],
	    		vote: res[i][3],
	    		name: res[i][4],
	    		party: res[i][5] 

	    	})

	    }

	  })

	});


})


.then(function(){


	models.hr5711.findAll({

	}).then(function(records){
		console.log(records);
	})


})






// Express settings
// ================

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

// set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// view engine setup
app.set('views', path.join(__dirname, 'views'));

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// what to send based on route
app.use('/', application_controller);
// app.use('/x', need a controller); // set up just in case, not sure how many routes needed
// app.use('/y', need a controller); // set up just in case, not sure how many routes needed
// app.use('/z', need a controller); // set up just in case, not sure how many routes needed

// in case of 404 catch by handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// listen on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000")
})

// export as app
module.exports = app;
