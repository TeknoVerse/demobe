

import { DataTypes } from "sequelize"

export const ttransOutputDefinition = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
    time  : {
        type : DataTypes.TIME,
        allowNull : true
    },
    machine_no  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    assy_no  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    circuit_no  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    qty  : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    qty_perct  : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    shift  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    part_no  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    terminal_left  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    terminal_right  : {
        type : DataTypes.STRING,
        allowNull : true
    },
    work_date  : {
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