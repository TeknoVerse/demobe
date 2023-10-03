import Database from "../../../../config/database/Database.js";

import { ttransDefectDefinition } from "../../definitions/transaction/TtransDefect.js";

const TtransDefect = Database.define("ttrans_defect", ttransDefectDefinition ,{
    tableName: "ttrans_defect"
})

export default TtransDefect;

