import Database from "../../../../config/database/Database.js";

import {tmastWarehouseDefinition} from "../../definitions/master/TmastWarehouse.js"


const TmastWarehouse = Database.define("tmast_warehouse",tmastWarehouseDefinition, {
    tableName : "tmast_warehouse"
})

export default TmastWarehouse ;
