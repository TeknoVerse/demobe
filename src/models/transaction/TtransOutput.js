import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";

const TtransOutput = Database.define("ttrans_output", {
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
    npk  : {
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
    wire_part_no  : {
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
},{
    tableName : 'ttrans_output'
})

export default TtransOutput ;

/* (async () => {
    await TtransOutput.sync()
})() */