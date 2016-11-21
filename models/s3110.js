module.exports = function (sequelize, Datatypes){
	
	var s3110 = sequelize.define('s3110', {
		
		id: {
			type: Datatypes.INTEGER,
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

	return s3110;
	
}