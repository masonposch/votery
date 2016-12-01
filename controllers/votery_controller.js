var express = require('express');
var router  = express.Router();
var models = require('../models');




//Set router for homepage
router.get('/', function(req, res) {


  models.hr5711.findAll({
  	where: {
  		state: 'TX'
  	}
  })

  .then(function(reps) {

    res.render('votery/index', {
    	reps: reps
    });

  })

  // res.send("hello world");

});


//////////////////////////////////////////////////////////////////////////////////////////

//Will this need to be in it's own controller file due to promise restrictions?

//Set router for the value of the state that is chosen
router.get('/texas', function(req, res) {
  

  //This needs to be changed to search through all models, or the new model that still needs to be created
  models.hr5711.findAll({

    where: {

      //This needs to be changed to take in the user value
      state: 'TX'

    }

  })

  .then(function(reps) {

    res.render('votery/index', function(req, res) {
      reps: reps
    });

  }
  
})

//////////////////////////////////////////////////////////////////////////////////////////  

module.exports = router;