

import { DataTypes } from "sequelize"


export const ttransOperationDefinition = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
    time : {
        type : DataTypes.TIME,
        allowNull : true
    },
    shift : {
        type : DataTypes.STRING,
        allowNull : true
    },
    machine_no : {
        type : DataTypes.STRING,
        allowNull : true
    },
    npk : {
        type : DataTypes.STRING,
        allowNull : true
    },
    start : {
        type : DataTypes.DATE,
        allowNull : true
    },
    finish : {
        type : DataTypes.DATE,
        allowNull : true
    },
    createdAt : {
        type : DataTypes.DATE
            }, 
            updatedAt : {
                type : DataTypes.DATE
        
            }
}