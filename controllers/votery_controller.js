var express = require('express');
var router  = express.Router();
var models = require('../models');


//Set router for homepage
router.get('/', function(req, res) {

    res.render('votery/index', {

    });

});

// Route that returns the reps for the state selected
router.post('/state', function (req, res) {

  models.congress_members.findAll({
  	where: {
  		state: req.body.state
  	}
  })
  .then(function(reps) {
		res.render('votery/index', {
      // reps is being passed to handlebars to be sent to the page
			reps: reps
		});
   });
});

// Route responsible for getting the voting information to populate the rep table. Not scalable but got the job done.
router.post('/representative_profile/:id', function (req, res) {
  models.hr5711.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(hr5711result) {
   models.hr5982.findAll({
    where: {
      id: req.params.id
    }
   })
    .then(function(hr5982result) {
     models.mhr5711.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(mhr5711result) {
       models.mhr5982.findAll({
        where: {
          id: req.params.id
        }
      })
        .then(function(mhr5982result) {
         models.s3110.findAll({
          where: {
            id: req.params.id
          }
        })
          .then(function(s3110result) {
            res.render('userChoice/state', {
              // the result of each query is being passed to handlebars to be sent to the page
            	hr5711: hr5711result[0],
            	hr5982: hr5982result[0],
            	mhr5711: mhr5711result[0],
            	mhr5982: mhr5982result[0],
        		  s3110: s3110result[0]
            });
          });
        });
      });
    });
  });
});

module.exports = router;



