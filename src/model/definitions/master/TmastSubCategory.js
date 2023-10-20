import { DataTypes } from "sequelize";


export const TmastSubCategoryDefinition = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
       category_code : {
        type : DataTypes.STRING,
        allowNull : true
       },
       name : {
        type : DataTypes.STRING,
        allowNull : true
       },
       code : {
        type : DataTypes.STRING,
        allowNull : true
       },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
}