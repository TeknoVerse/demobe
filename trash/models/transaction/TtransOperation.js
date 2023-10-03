import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";

const TtransOperation = Database.define("ttrans_operation", {
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

},{
    tableName :  'ttrans_operation'
})

export default TtransOperation ;
/* 
(async () => {
    await TtransOperation.sync()
})() */