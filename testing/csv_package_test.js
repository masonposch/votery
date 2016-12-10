var csv = require('csv');
var fs = require('fs');

module.exports = function(){

	fs.readFile('../assets/csv/hr-5711.csv', function(err, res) {

	  if (err) throw err;

	  csv.parse(res, function(err, res) {

	    if (err) throw err;

	  })

	});

	return hr5711RawData;

}

