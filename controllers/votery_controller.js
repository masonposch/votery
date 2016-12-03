var express = require('express');
var router  = express.Router();
var models = require('../models');




//Set router for homepage
router.get('/', function(req, res) {

    res.render('votery/index', {

    });

});

router.post('/state', function (req, res) {

  models.congress_members.findAll({
  	where: {
  		state: req.body.state
  	}
  })

  // connect the .create to this .then
  .then(function(reps) {
		res.render('votery/index', {
			reps: reps
		});
   });
});

router.post('/representative_profile/:id', function (req, res) {
  models.hr5711.findAll({
    where: {
      id: req.params.id
    }
  })
  // connect the .create to this .then
  .then(function(reps) {
    res.render('userChoice/state', {
      reps: reps
    });
   });
});


module.exports = router;



