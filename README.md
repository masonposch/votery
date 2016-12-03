# votery

THE PURPOSE OF VOTERY =============================
Votery was created at a time when it became common practice to question whether the news that was being presented to the world had actually had any merit to it or not. The purpose of Votery is to quickly and accurately inform users who their local political representatives are, and what real action they are taking for their constituents while in office -- all presented in a simple, comprehensible format.





CODE SAMPLES =============================

				fs.readFile('./assets/csv/motion-to-hr-5982.csv', function(err, res) {

				// 	  if (err) throw err;

				// 	  csv.parse(res, function(err, res) {

				// 	    if (err) throw err;

				// 	    for(var i = 0; i < res.length; i++){

				// 	    	models.mhr5982.create({

				// 	    		id: res[i][0],
				// 	    		state: res[i][1],
				// 	    		district: res[i][2],
				// 	    		vote: res[i][3],
				// 	    		name: res[i][4],
				// 	    		party: res[i][5]

With the ability to quickly create new table structures based off a source of constantly updated data through CSV files, Votery is easily able to always be up-to-date with current HoR and Senate news.

						router.post('/representative_profile/:id', function (req, res) {
						  models.hr5711.findAll({
						    include: [{
						      model: models.hr5982,
						      where: {
						        id: req.params.id
						      }
						    }],
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

I.D. based routing methods keep the information in order and ensure that all voting records are consistent with each individual representative.






CODE LINK =============================

https://github.com/masonposch/votery






LIVE LINK =============================




