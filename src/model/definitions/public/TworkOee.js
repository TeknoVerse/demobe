import { DataTypes } from "sequelize";

export const TworkOeeDefinition = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
   machine_code : {
    type : DataTypes.STRING,
    allowNull : true
  },
   date : {
    type : DataTypes.DATE,
    allowNull : true
  },
   shift : {
    type : DataTypes.STRING,
    allowNull : true
  },
   oee : {
    type : DataTypes.DECIMAL(15,4) ,
    allowNull : true
  },
  avaibility : {
    type : DataTypes.DECIMAL(15,4),
    allowNull : true
  },
  performance: {
    type : DataTypes.DECIMAL(15,4),
    allowNull : true
  },
  quality: {
    type : DataTypes.DECIMAL(15,4),
    allowNull : true
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
