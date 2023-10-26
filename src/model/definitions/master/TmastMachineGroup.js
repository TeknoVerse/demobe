import { DataTypes } from "sequelize";

export const TmastMachineGroupDefiniiton = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement : true
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
