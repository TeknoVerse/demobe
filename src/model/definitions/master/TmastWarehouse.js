
import { DataTypes } from "sequelize"

export const tmastWarehouseDefinition = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
    sloc_code : {
        type : DataTypes.STRING,
        allowNull : true
    },  
    sloc_name : {
        type : DataTypes.STRING,
        allowNull : true
    },  
    part_code : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    part_name : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    qty : {
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