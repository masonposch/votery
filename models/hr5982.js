module.exports = function (sequelize, Datatypes){
	
	var hr5982 = sequelize.define('hr5982', {
		
		id: {
			type: Datatypes.STRING,
			primaryKey: true
		},

		state: {
			type: Datatypes.STRING,
		},

		district: {
			type: Datatypes.STRING,
		},

		vote: {
			type: Datatypes.STRING,
		},

		name: {
			type: Datatypes.STRING,
		},

		party: {
			type: Datatypes.STRING,
		},
	})

	return hr5982;
	
}