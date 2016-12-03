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
	
	}, {
      classMethods: {
        associate: function(models) {
          hr5982.belongsTo(models.hr5711, {foreignKey: 'id'})
        }
      }
  	})

	return hr5982;
	
}