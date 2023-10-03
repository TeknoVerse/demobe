import Database from "../../../../config/database/Database.js";

import {tmastSlocDefinition} from "../../definitions/master/TmastSloc.js"


const TmastSloc = Database.define('tmast_sloc', tmastSlocDefinition,{
    tableName : "tmast_sloc" 
}) 

export default TmastSloc;

