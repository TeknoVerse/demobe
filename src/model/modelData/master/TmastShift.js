import Database from "../../../../config/database/Database.js";
import { TmastShiftDefinition } from "../../definitions/master/TmastShift.js";

 const TmastShift = Database.define('tmast_shift', TmastShiftDefinition, {
    tableName : 'tmast_shift'
})
export default TmastShift