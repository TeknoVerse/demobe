import Database from "../../../../config/database/Database.js";

import {TmastProductDefinition} from "../../definitions/master/TmastProduct.js"

export const TmastProduct = Database.define("tmast_product", TmastProductDefinition ,{
    tableName : "tmast_product"
})

export default TmastProduct

