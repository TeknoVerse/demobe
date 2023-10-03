import Database from "../../../../config/database/Database.js";

import { tworkDisplayDefinition } from "../../definitions/public/TworkDisplay.js";


const TworkDisplay = Database.define("twork_display", tworkDisplayDefinition ,{
    tableName : "twork_display"
})

export default TworkDisplay;
