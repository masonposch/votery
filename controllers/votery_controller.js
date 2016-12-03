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
    res.render('userChoice/state/', {
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

// router.post('/representative_profile/:id', function (req, res) {
//   models.hr5711.findOne({
//     // include: [{
//     //   model: models.hr5982,
//     //   where: {
//     //     id: req.params.id
//     //   }
//     // }],
//     where: {
//       id: 400004
//     }
//   })
//   // connect the .create to this .then
//   .then(function(reps) {

//     reps.gethr5982s()

//     .then(function(data) {

//       res.json(data)

//     })
//     // res.render('userChoice/state', {
//     //   reps: reps
//     // });
//   });
// });



module.exports = router;



