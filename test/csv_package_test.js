var csv = require('csv');
var fs = require('fs');

fs.readFile('C:\\Users\\Warrehz\\Desktop\\hr-5711.csv', 'utf8', function(err, res) {

  if (err) throw err;

  csv.parse(res, function(err, res) {

    if (err) throw err;

  })

});
