import { DataTypes } from "sequelize"


export const TmastProductDefinition = {
  id : {
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement : true
  },
  part_no : {
      type : DataTypes.STRING,
      allowNull : true
    },
    part_name : {
      type : DataTypes.STRING,
      allowNull : true
    },
    ct : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    createdAt : {
      type : DataTypes.DATE
          }, 
          updatedAt : {
              type : DataTypes.DATE
      
          }
}