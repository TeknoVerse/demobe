import { Sequelize } from "sequelize";
import { db_dialect, db_host, db_name, db_pass, db_user } from "../commands/ConfigurationDb.js";

const Database = new Sequelize(db_name, db_user, db_pass, {
    host : db_host,
    dialect : db_dialect
})



export default Database
