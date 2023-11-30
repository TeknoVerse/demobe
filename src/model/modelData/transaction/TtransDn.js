import Database from "../../../../config/database/Database.js";
import {ttransDnDefinition} from "../../definitions/transaction/TtransDn.js"

const TtransDn = Database.define('ttrans_dn', 
    ttransDnDefinition
, {
    tableName : 'ttrans_dn'
})


export default TtransDn