module.exports = function (sequelize, Datatypes){
	var hr5711 = sequelize.define('hr5711', {
		id: {
			type: Datatypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
	});
	
	return hr5711;
}
