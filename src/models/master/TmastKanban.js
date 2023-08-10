import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";


const TmastKanban = Database.define('tmast_kanban', {
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
}, {
    tableName : 'tmast_kanban'
})

export default TmastKanban;

/* (async() => {
    await TmastKanban.sync()
})() */