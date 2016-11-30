var express = require('express');
var router  = express.Router();
var models = require('../models');



router.get('/', function(req, res) {


  // models.hr5711.findAll({
  // 	where: {
  // 		state: 'TX'
  // 	}
  // })

  // .then(function(reps) {

  //   res.render(reps);

  // })

  res.send("hello world");

});

module.exports = router;