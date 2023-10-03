import Database from "../../../../config/database/Database.js";

import { ttransOutputDefinition } from "../../definitions/transaction/TtransOutput.js";

const TtransOutput = Database.define("ttrans_output", ttransOutputDefinition,{
    tableName : 'ttrans_output'
})

export default TtransOutput ;

