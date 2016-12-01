module.exports = function (sequelize, Datatypes){
	var congress_members = sequelize.define('congress_members', {
		id: {
			type: Datatypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fullName: {
			type: Datatypes.STRING
		},
		party: {
			type: Datatypes.STRING
		},
		state: {
			type: Datatypes.STRING
		},
		chamber: {
			type: Datatypes.STRING
		},
		officeAddress: {
			type: Datatypes.STRING
		},
    phoneNumber: {
      type: Datatypes.STRING
    },
    url: {
      type: Datatypes.STRING
    }
	});

	return congress_members;
}
