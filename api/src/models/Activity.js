const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('activity', {
		name:{
			type: DataTypes.STRING
		},
		difficulty:{
			type: DataTypes.INTEGER,
			validate:{
				isInt: true,
				min: 1,
				max: 10
			}
		},
		duration:{
			type: DataTypes.STRING
		},
		season:{
			type: DataTypes.STRING,
			validate:{
				isIn:[['otoño', 'invierno', 'primavera', 'verano']]
			}
		}
	}, {
		timestamps: false
	})
}