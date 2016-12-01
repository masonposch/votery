var express = require('express');
var router  = express.Router();
var models = require('../models');




//Set router for homepage
router.get('/texas', function(req, res) {


  models.hr5982.findAll({
    where: {
      state: 'TX'
    }
  })

  .then(function(test) {

    res.render('userChoice/state', {
      test: test
    });

  })

  // res.send("hello world");

});







//THIS IS A TEST OF USING PARAMS
// router.get('/:location', function(req, res) {


//   models.hr5982.findAll({
//     where: {
//       state: 'TX'
//     },
//     where: {
//       location: { location : req.params.state } 
//     }
//   })

//   .then(function(test) {

//     res.render('userChoice/state', {
//       test: test
//     });

//   })

//   // res.send("hello world");

// });




module.exports = router;