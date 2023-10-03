import Database from "../../../../config/database/Database.js";

import { ttransOperationDefinition } from "../../definitions/transaction/TtransOperation.js";

const TtransOperation = Database.define("ttrans_operation", ttransOperationDefinition ,{
    tableName :  'ttrans_operation'
})

export default TtransOperation ;
