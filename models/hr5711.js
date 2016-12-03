module.exports = function (sequelize, Datatypes){
	var hr5711 = sequelize.define('hr5711', {
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
		}
	},{
      classMethods: {
        associate: function(models) {
          hr5711.hasMany(models.hr5982, {foreignKey: 'id'})
        }
      }
  	});
	
	return hr5711;
}
