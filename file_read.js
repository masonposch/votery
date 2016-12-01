var fs = require('fs');


fs.readFile('C:\\Users\\Warrehz\\Desktop\\legislators-current.json', function(err, res) {

 	  if (err) throw err;

    var data = JSON.parse(res);

    for (i = 0; i < 541; i++){
      console.log('name: ' + data[i].name.official_full);
      console.log('party: ' + data[i].terms[data[i].terms.length - 1].party);
      console.log('state: ' + data[i].terms[data[i].terms.length - 1].state);
      console.log('chamber: ' + data[i].terms[data[i].terms.length - 1].type);
      console.log('office address: ' + data[i].terms[data[i].terms.length - 1].office);
      console.log('phone number: ' + data[i].terms[data[i].terms.length - 1].phone);
      console.log('phone number: ' + data[i].terms[data[i].terms.length - 1].url)
      console.log('-------------------------------------------------------');

    }

 	});
