import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js"

const TmastMachine = Database.define('tmast_machine',{
    machine_name :{
        type : DataTypes.STRING,
        allowNull : true
    }, 
    machine_no :{
        type : DataTypes.STRING,
        allowNull : true
    },
    line_group :{
        type : DataTypes.STRING,
        allowNull : true
    }, 
    npk :{
        type : DataTypes.STRING,
        allowNull : true
    },
    assy_no :{
        type : DataTypes.STRING,
        allowNull : true
    },
    circuit_no :{
        type : DataTypes.STRING,
        allowNull : true
    },
    ct :{
        type : DataTypes.FLOAT,
        allowNull : true
    },
    qty_perct :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    status_start :{
        type : DataTypes.BOOLEAN,
        allowNull : true
    },
    status_yellow :{
        type : DataTypes.BOOLEAN,
        allowNull : true
    },
    status_red :{
        type : DataTypes.BOOLEAN,
        allowNull : true
    },
    code_aplicator_a :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    qty_aplicator_a :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    code_aplicator_b :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    qty_aplicator_b :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    wire_part_no :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    terminal_left :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    terminal_right :{
        type : DataTypes.INTEGER,
        allowNull : true
    },
    status_checking :{
        type : DataTypes.BOOLEAN,
        allowNull : true
    },

},{
    tableName : "tmast_machine"
})

export default TmastMachine;

/* (async () => {
    await TmastMachine.sync()
})() */