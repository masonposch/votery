var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var models  = require('./models');
var csv = require('csv');
var fs = require('fs');

//model controllers
var application_controller = require('./controllers/application_controller.js'); // set up just in case, not sure how many needed
var votery_controller = require('./controllers/votery_controller.js');

// instantiate app
var app = express();

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
app.use('/votery', votery_controller);

var port = process.env.PORT || 3000;

// listen on port 3000
app.listen(port, function(){
	console.log("Listening on port %s", port);
})

// our module get's exported as app.
module.exports = app;
