import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";

const TmastSloc = Database.define('tmast_sloc', {
    name : {
        type : DataTypes.STRING,
        allowNull : true
    } ,
    code : {
        type : DataTypes.STRING,
        allowNull : true
    } , 
},{
    tableName : "tmast_sloc" 
}) 

export default TmastSloc;

/* (async() => {
    await TmastSloc.sync()
})() */