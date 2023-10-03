import { DataTypes } from "sequelize"

export const tmastKanbanDefinition = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
    part_name : {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    part_code : {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    qty : {
        type : DataTypes.INTEGER,
        allowNull : true
    } ,
    from : {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    to: {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    createdAt : {
        type : DataTypes.DATE
            }, 
            updatedAt : {
                type : DataTypes.DATE
        
            }
}