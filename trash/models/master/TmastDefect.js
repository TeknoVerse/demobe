import { DataTypes } from "sequelize"
import Database from "../../../config/database/Database.js"

const TmastDefect = Database.define('tmast_defect', {
    category_code : {
        type : DataTypes.STRING,
        allowNull : true
    },
    category_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    machine_group : {
        type : DataTypes.STRING,
        allowNull : true
    }, 

},{
    tableName : 'tmast_defect'
})

export default TmastDefect;

/* (async () => {
    await TmastDefect.sync()
})() */