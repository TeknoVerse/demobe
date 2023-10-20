import Database from "../../../../config/database/Database.js";
import { TworkOeeDefinition } from "../../definitions/public/TworkOee.js";

const TworkOee = Database.define('twork_oee', TworkOeeDefinition, {
    tableName : "twork_oee"
})

export default TworkOee