//original creation
// CREATE TABLE burgers
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT false,
// 	createdDate datetime DEFAULT(now()),
// 	PRIMARY KEY (id)
// );

module.exports = function(sequelize, Datatypes){
	var burgerlists = sequelize.define("burgerlists", {
		burger_name:{
			type:Datatypes.STRING,
			allowNull:false,
			validate:{
				len:[1]
			}
		},
		devoured:{
			type:Datatypes.BOOLEAN,
			defaultValue: false
			}
	});
	return burgerlists;
};

