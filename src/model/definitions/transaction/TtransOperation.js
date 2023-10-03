

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
        type : DataTypes.TIME,
        allowNull : true
    },
    finish : {
        type : DataTypes.TIME,
        allowNull : true
    },
    createdAt : {
        type : DataTypes.DATE
            }, 
            updatedAt : {
                type : DataTypes.DATE
        
            }
}