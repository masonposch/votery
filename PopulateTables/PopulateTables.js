var server = require('../server');

// PREPARE OUR TABLES
// =======================================================================

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize;


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

	    for(var i = 0; i < res.length; i++){

	    	models.hr5711.create({

	    		id: res[i][0],
	    		state: res[i][1],
	    		district: res[i][2],
	    		vote: res[i][3],
	    		name: res[i][4],
	    		party: res[i][5]

	    	})

	    }

	  })

	});

	fs.readFile('./assets/csv/hr-5982.csv', function(err, res) {

	  if (err) throw err;

	  csv.parse(res, function(err, res) {

	    if (err) throw err;

	    for(var i = 0; i < res.length; i++){

	    	models.hr5982.create({

	    		id: res[i][0],
	    		state: res[i][1],
	    		district: res[i][2],
	    		vote: res[i][3],
	    		name: res[i][4],
	    		party: res[i][5]

	    	})

	    }

	  })

	});

	fs.readFile('./assets/csv/motion-to-hr-5711.csv', function(err, res) {

	  if (err) throw err;

	  csv.parse(res, function(err, res) {

	    if (err) throw err;

	    for(var i = 0; i < res.length; i++){

	    	models.mhr5711.create({

	    		id: res[i][0],
	    		state: res[i][1],
	    		district: res[i][2],
	    		vote: res[i][3],
	    		name: res[i][4],
	    		party: res[i][5]

	    	})

	    }

	  })

	});

	fs.readFile('./assets/csv/motion-to-hr-5982.csv', function(err, res) {

	  if (err) throw err;

	  csv.parse(res, function(err, res) {

	    if (err) throw err;

	    for(var i = 0; i < res.length; i++){

	    	models.mhr5982.create({

	    		id: res[i][0],
	    		state: res[i][1],
	    		district: res[i][2],
	    		vote: res[i][3],
	    		name: res[i][4],
	    		party: res[i][5]

	    	})

	    }

	  })

	});

	fs.readFile('./assets/csv/s-3110.csv', function(err, res) {

	  if (err) throw err;

	  csv.parse(res, function(err, res) {

	    if (err) throw err;

	    for(var i = 0; i < res.length; i++){

	    	models.s3110.create({

	    		id: res[i][0],
	    		state: res[i][1],
	    		district: res[i][2],
	    		vote: res[i][3],
	    		name: res[i][4],
	    		party: res[i][5]

	    	})

	    }

	  })

	});

fs.readFile('./assets/json/legislators-current.json', function(err, res) {

 	  if (err) throw err;

    var data = JSON.parse(res);

 	  for (i = 0; i < 541; i++){

 	    models.congress_members.create({

 	    	id: data[i].id.govtrack,
 	    	fullName: data[i].name.official_full,
 	    	party: data[i].terms[data[i].terms.length - 1].party,
 	    	state: data[i].terms[data[i].terms.length - 1].state,
 	  		chamber: data[i].terms[data[i].terms.length - 1].type,
 	  		officeAddress: data[i].terms[data[i].terms.length - 1].office,
        	phoneNumber: data[i].terms[data[i].terms.length - 1].phone,
        	url: data[i].terms[data[i].terms.length - 1].url

 	    })

 	  }

 });

})





//Push the parsed data into its respective table in the database
// =======================================================================

.then(function(){


	models.hr5711.findAll({

	}).then(function(records){
		// console.log(records);
	})


	models.hr5982.findAll({

	}).then(function(records){
		// console.log(records);
	})


	models.mhr5711.findAll({

	}).then(function(records){
		// console.log(records);
	})


	models.mhr5982.findAll({

	}).then(function(records){
		// console.log(records);
	})


	models.s3110.findAll({

	}).then(function(records){
		// console.log(records);
	})


})