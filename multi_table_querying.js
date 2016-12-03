var models  = require('./models');


models.congress_members.findAll({})

.then(function(test) {

  console.log(test);

});
