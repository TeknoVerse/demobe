import Database from "../../../../config/database/Database.js";

import { ttransStopDefinition } from "../../definitions/transaction/TtransStop.js";

const TtransStop = Database.define("ttrans_stop", ttransStopDefinition, {
    tableName : "ttrans_stop"
})

export default TtransStop ;
