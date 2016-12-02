module.exports = function (sequelize, Datatypes){
	
	var mhr5711 = sequelize.define('mhr5711', {
		
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

	return mhr5711;
	
}