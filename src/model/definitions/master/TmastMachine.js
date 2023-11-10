import { DataTypes } from "sequelize";


export const tmastMachineDefinition = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
   
  },
 code : {
    type : DataTypes.STRING,
    allowNull : true
 },
 name : {
    type : DataTypes.STRING,
    allowNull : true
 },
 status_green : {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    
    allowNull : true
 },
 status_yellow : {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
    allowNull : true
 },
 status_red : {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
    allowNull : true
 },
 defect : {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
    allowNull : true
 },
 category : {
    type : DataTypes.STRING ,
    allowNull : true
 },
 part_no : {
    type : DataTypes.STRING ,
    allowNull : true
 },
 part_name : {
    type : DataTypes.STRING ,
    allowNull : true
 },
 ct : {
    type : DataTypes.STRING ,
    allowNull : true
 },
 qty : {
    type : DataTypes.STRING ,
    allowNull : true
 },
 machine_group_code : {
    type : DataTypes.STRING ,
    allowNull : true
 },
 createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
