import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";

const TmastWarehouse = Database.define("tmast_warehouse", {
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
}, {
    tableName : "tmast_warehouse"
})


export default TmastWarehouse ;

/* (async () => {
    await TmastWarehouse.sync()
})() */