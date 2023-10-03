import Database from "../../../../config/database/Database.js";
import { tmastDefectDefinition } from "../../definitions/master/TmastDefect.js";

const TmastDefect = Database.define('tmast_defect', tmastDefectDefinition ,{
    tableName : 'tmast_defect'
})

export default TmastDefect;

