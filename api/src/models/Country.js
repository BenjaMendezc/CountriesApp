const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    //agregar un default para cuando es null, porque algunos no tienen
   	idcode: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	unique: true,
    	primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    continent:{
    	type:DataTypes.STRING,
    	allowNull:false
    },
    subregion:{
    	type: DataTypes.STRING
    },
    capital:{
    	type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'No info'
    },
    area:{
    	type: DataTypes.STRING
    },
    // detailinfo:{
    //   type: DataTypes.VIRTUAL,
    //   get(){
    //     return [this.idcode, this.capital, this.subregion, this.area]
    //   }
    // }
    // pop: {
    // 	type: DataTypes.INTEGER
    // }
  }, {
  	timestamps: false
  });
};
